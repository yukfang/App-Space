/**
 * Encodes a string or buffer into a Base64 string.
 * @param {string | Buffer} data - The data to encode.
 * @returns {string} The Base64 encoded string.
 */
function base64_encode(data) {
  if (Buffer.isBuffer(data)) {
    return data.toString('base64');
  }
  return Buffer.from(data).toString('base64');
}

/**
 * Decodes a Base64 string.
 * @param {string} data - The Base64 string to decode.
 * @param {string} [encoding='utf8'] - The encoding to use for the decoded string.
 * @returns {string} The decoded string.
 */
function base64_decode(data, encoding = 'utf8') {
  return Buffer.from(data, 'base64').toString(encoding);
}

module.exports = {
  base64_encode,
  base64_decode,
};