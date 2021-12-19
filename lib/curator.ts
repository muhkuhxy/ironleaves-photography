export function loadCurator() {
  const script=document.createElement("script")
  script.async=true
  script.src="https://cdn.curator.io/published/5142edb4-f9c1-4286-8e46-9682b7e80431.js"
  const firstScript=document.getElementsByTagName('script')[0]
  firstScript?.parentNode?.insertBefore(script, firstScript)
}
