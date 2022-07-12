export const showFrame = () => {
  // maybe add links with arguments?
  if (document.getElementById('la-frame')) return
  const frame = document.createElement('div')
  frame.innerHTML = `<div id="la-frame" class='la-frame'></div>`
  document.body.appendChild(frame)

  if (document.getElementById('la-frame')) {
    const link = document.createElement('link')
    const script = document.createElement('script')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', './frame/index.css')
    script.setAttribute('src', './frame/index.js')
    document.body.append(link, script)
  }
};