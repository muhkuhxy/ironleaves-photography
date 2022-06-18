// disable scroll behavior, doesn't work in static mode anyway
// instead handled in layouts/pages
export default function (/* to, from, savedPosition */) {
  // console.log('scroll behavior', { to, from, savedPosition})
  return false
}
