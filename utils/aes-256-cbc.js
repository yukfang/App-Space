const crypto = require('crypto');


function encryptText(rawText, encryptKey) {
    // Create a cipher using the key and AES-256-CBC algorithm
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptKey), Buffer.from(encryptKey.slice(0, 16))); // IV (Initialization Vector) derived from key

    // Encrypt the raw text
    let encrypted = cipher.update(rawText, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return encrypted;
}

function decryptText(encryptedText, encryptKey) {
    // Extract the IV (Initialization Vector) from the key
    const iv = Buffer.from(encryptKey.slice(0, 16)); // 16 bytes IV, same as encryption

    // Create a decipher using the key and AES-256-CBC algorithm
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptKey), iv);

    // Decrypt the encrypted base64 string
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

module.exports = {
    encryptText,
    decryptText
}