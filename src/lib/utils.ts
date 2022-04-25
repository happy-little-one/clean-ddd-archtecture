export function navigate(path: string) {
  location.hash = `#${path}`
}

export function dispatch(path: string, payload: any) {
  const [domain, type] = path.split('/')
  window.dispatchEvent(new CustomEvent(domain, { detail: { type, payload } }))
}

export function reRender() {
  window.dispatchEvent(new CustomEvent('re-render'))
}

export function message(text: string) {
  alert(text)
}