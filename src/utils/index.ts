export function getParameterByName(name: string, url: string) {
  if (!url) url = window.location.href

  name = name = name.replace(/[\[\]]/g, '\\$&')

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(url)

  if (!results || !results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
