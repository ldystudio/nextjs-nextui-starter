import CryptoJS from "crypto-js"

const CryptoSecret = "AAAAC3NzaC1lZDI1NTE5AAAAIPcvVkd+OV15b6mN/QdBLbWJ6gBpbaqwV0jwebxE2Sjd"

/**
 * 加密数据
 * @param data - 数据
 */
export function enCrypto(data: any) {
    const newData = JSON.stringify(data)
    return CryptoJS.AES.encrypt(newData, CryptoSecret).toString()
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function deCrypto(cipherText: string) {
    const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    if (originalText) {
        return JSON.parse(originalText)
    }
    return null
}
