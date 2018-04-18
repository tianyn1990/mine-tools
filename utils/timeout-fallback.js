/**
 * 回调超时工具
 * 
 *  - 为异步操作添加一个超时后的处理
 * 
 * @param {Number} tiemout 超时时间
 * @param {Function} callback 超时后的回调
 * @returns {Function} hasTimeout 是否已经超时，已被block
 * 
 * @example
 * 
 * ```javascript
 * 
 * let user = { name: null };
 * 
 * let f = async function() {
 *     let hasTimeout = u.timeoutFallback(1000, () => user = {name: 'mock'}); // ++
 *     let json = await getUser() || {};
 *     if(hasTimeout()) return;  // ++
 *     user.name = json.name;
 * }
 * f();
 * 
 * ```
 */
const timeoutFallback = (timeout, callback) => {
    let block = false,
        clear = null;
    clear = setTimeout(() => {
        block = true;
        callback && callback();
    }, timeout);
    const hasTimeout = () => {
        clearTimeout(clear);
        return block;
    };
    return hasTimeout;
};

module.exports = timeoutFallback;
