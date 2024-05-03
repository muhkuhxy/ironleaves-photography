import dayjs from "dayjs"

export async function getToken() {
  console.log("getToken")

  const response = await fetch(
    `https://login.microsoftonline.com/${import.meta.env.GALLERY_TENANT}/oauth2/v2.0/token`,
    {
      method: "post",
      body: new URLSearchParams({
        client_id: import.meta.env.GALLERY_CLIENT_ID,
        scope: "https://graph.microsoft.com/.default",
        client_secret: import.meta.env.GALLERY_CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
    },
  )

  if (!response.ok) {
    throw await response.text()
  }

  console.log("getToken OK")

  const { access_token, expires_in } = await response.json()

  return [access_token, dayjs().add(expires_in, "second").toDate()]
}

type DriveItemImage = {
  name: string
  file: {
    mimeType: "image/jpeg"
  }
  size: number
  "@microsoft.graph.downloadUrl": string
  image: {
    width: number
    height: number
  }
}

type DriveItem =
  | DriveItemImage
  | {
      name: string
      folder: {
        childCount: number
      }
      size: number
    }
  | {
      name: string
      file: {
        mimeType: string
      }
      size: number
      "@microsoft.graph.downloadUrl": string
    }

export type DriveImages = {
  url: string
  name: string
  size: Bytes
  width: number
  height: number
}

export type Bytes = {
  bytes: number
}

function bytes(value: number) {
  return {
    bytes: value,
  }
}

async function getDriveItems(token: string, path: string) {
  console.log("getDriveItems")

  const params = new URLSearchParams({
    $select: [
      "content.downloadUrl",
      "@microsoft.graph.downloadUrl",
      "name",
      "file",
      "folder",
      "image",
    ].join(","),
  })

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/drives/${import.meta.env.GALLERY_DRIVE_ID}/root:/${path}:/children?${params}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    throw await response.text()
  }

  console.log("getDriveItems OK")

  const { value: items } = (await response.json()) as { value: DriveItem[] }

  return items
}

export async function downloadContent(
  path: string,
  token: string,
): Promise<Blob> {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/drives/${import.meta.env.GALLERY_DRIVE_ID}/root:/${path}:/content`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    throw await response.text()
  }

  return response.blob()
}

export async function getChildren(
  gallery: string,
  token: string,
): Promise<DriveImages[]> {
  const items = await getDriveItems(token, `ironleaves-gallerie/${gallery}`)
  return items
    .filter((item) => "file" in item && item.file.mimeType === "image/jpeg")
    .map((item) => {
      const imageItem = item as DriveItemImage
      return {
        url: imageItem["@microsoft.graph.downloadUrl"],
        name: imageItem.name,
        size: bytes(imageItem.size),
        width: imageItem.image.width,
        height: imageItem.image.height,
      }
    })
}

export async function getThumbnails(
  gallery: string,
  token: string,
): Promise<DriveImages[]> {
  const items = await getDriveItems(
    token,
    `ironleaves-gallerie/${gallery}/--thumbnails`,
  )
  return items
    .filter((item) => "file" in item && item.file.mimeType === "image/jpeg")
    .map((item) => {
      const imageItem = item as DriveItemImage
      return {
        url: imageItem["@microsoft.graph.downloadUrl"],
        name: imageItem.name,
        size: bytes(imageItem.size),
        width: imageItem.image.width,
        height: imageItem.image.height,
      }
    })
}
