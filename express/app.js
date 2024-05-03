import express from 'express'
import fetch from 'node-fetch'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const response = await downloadContent('', token)
  res.attachment('DSC_1326.jpg')

  response.body.pipe(res)
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

// TODO: take from header
const token = ''

export async function downloadContent(
  path,
  token,
) {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/drives/${DRIVE_ID}/root:${PATH}/content`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    throw await response.text()
  }

  return response
}