import Alpine from "alpinejs"

export function composeMail() {
  const el = document.createElement("a")
  el.href = "mailto:" + getMail()
  el.click()
}

export function getMail() {
  return rot13("uryyb@vebayrnirf-cubgbtencul.pbz")
}

function rot13(str: string) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
  const index = (x: string) => input.indexOf(x)
  const translate = (x: string) => (index(x) > -1 ? output[index(x)] : x)
  return str.split("").map(translate).join("")
}

export const AlpineMailer = Alpine.data("Mailer", () => ({
  get mail() {
    return getMail()
  },
  composeMail() {
    composeMail()
  },
}))
