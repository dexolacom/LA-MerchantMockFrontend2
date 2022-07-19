import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const uid = () => Math.floor(Math.random() * 100)

export const urlParams = `merchant=test&userId=${uid()}&subscriptionId=${uid()}`

const encryptParams = (str: string) => {
  const ciphertext = AES.encrypt(str, 'secretPassphrase');
  return encodeURIComponent(ciphertext.toString());
}

export const getUrl = (urlParams: string) => {
  const encryptedId = encryptParams(urlParams)
  // return `http://localhost:3001/_*${encryptedId}`;
  return `https://la-dashboard.vercel.app/_*${encryptedId}`;
}

// export const showFrame = () => {
//   // maybe add links with arguments?
//   if (document.getElementById('la-frame')) return
//   const frame = document.createElement('div')
//   frame.innerHTML = `<div id="la-frame" class='la-frame'></div>`
//   document.body.appendChild(frame)
//
//   if (document.getElementById('la-frame')) {
//     const link = document.createElement('link')
//     const script = document.createElement('script')
//     link.setAttribute('rel', 'stylesheet')
//     link.setAttribute('href', './frame/index.css')
//     script.setAttribute('src', './frame/index.js')
//     document.body.append(link, script)
//   }
// };