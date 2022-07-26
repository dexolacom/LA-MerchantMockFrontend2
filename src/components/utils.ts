import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const id = () => Math.floor(Math.random() * 101)

// export const urlParams = `merchant=MerchantTwo&userId=${uid()}&subscriptionId=${uid()}`

const encryptParams = (str: string) => {
  const ciphertext = AES.encrypt(str, 'secretPassphrase');
  return encodeURIComponent(ciphertext.toString());
}

export const getUrl = (activate?: string) => {
  let urlParams = `merchant=MerchantTwo&userId=${id()}&subscriptionId=${id()}`

  const encryptedLink = encryptParams(urlParams)

  if (activate) {
    return `https://la-dashboard.vercel.app/_*${encryptedLink}&activate`;
  }

  return `https://la-dashboard.vercel.app/_*${encryptedLink}&mint`;
}