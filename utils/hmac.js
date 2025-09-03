const crypto = require('crypto');

/**   
 * HMAC sign
 * @private
 * @param {Object} requestOption
 * @returns {string}
 */
function hmac_sign(requestOption, app_secret) {
    const excludeKeys = ["access_token", "sign"];
    let signString = "";
    const params = requestOption.params || {};
    const sortedParams = Object.keys(params)
        .filter((key) => !excludeKeys.includes(key))
        .sort()
        .map((key) => ({ key, value: params[key] }));
    //step2: Concatenate all the parameters in the format {key}{value}:  
    const paramString = sortedParams
        .map(({ key, value }) => `${key}${value}`)
        .join("");

    signString += paramString;

    // Join Path
    const pathname = new URL(requestOption.url || '').pathname;
    signString = `${pathname}${paramString}`;

    // Join Body
    if (
        requestOption.headers?.["content-type"] !== "multipart/form-data" &&
        typeof requestOption.data === 'object' &&
        requestOption.data !== null &&
        Object.keys(requestOption.data).length
    ) {
        const body = JSON.stringify(requestOption.data);
        signString += body;
    }

    //Construct the string to sign:
    signString = `${app_secret}${signString}${app_secret}`;
    // console.log('String to sign: ', signString)

    //Sign the string:
    const hmac = crypto.createHmac("sha256", app_secret);
    hmac.update(signString);
    const sign = hmac.digest("hex");
    return sign;
}

module.exports = {
    hmac_sign,
}