
const id = () => Math.floor(Math.random() * 1011)

const cryptUrlParams = (key: string, text: string) => {
  const textToChars = (text: string) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
  const applyKeyToChar = (code: any) => textToChars(key).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applyKeyToChar)
    .map(byteHex)
    .join("");
};

export const getUrl = (activate?: string) => {
  let urlParams = `userId=${id()}&merchantId=2`

  const encryptedLink = cryptUrlParams('somesuncreatecargalaxyeasygovermentceleniumproduction', urlParams)

  if (activate) {
    return `https://la-dashboard.vercel.app/_*${encryptedLink}&activate`;
  }

  return `https://la-dashboard.vercel.app/_*${encryptedLink}&mint`;
  // return `http://localhost:3001/_*${encryptedLink}/mint`;
}