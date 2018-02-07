/**
 * 回调超时工具
 * 
 *  - 为异步操作创建一个超时的处理函数
 * 
 * @param {Number} tiemout 超时时间
 * @param {Function} callback 超时后的回调
 * @returns {Function} hasBlock 是否已经超时，已被block
 * 
 * @example
 * 
 * ```javascript
 * 
 * let user = {};
 * 
 * let hasBlock = u.dealTimeout(1000, () => user = {name: 'mock'});
 * 
 * let f = async function() {
 *     let ajaxUser = await getUser();
 *     if(hasBlock()) return;
 *     user = ajaxUser;
 * }
 * f();
 * 
 * ```
 */
let callbackTimeout = function(timeout, callback) {
    var block = false,
        clear = null;
    clear = setTimeout(function() {
        block = true;
        clear = null;
        callback();
    }, timeout);
    return function hasBlock() {
        clear && clear();
        return block;
    };
};

module.exports = callbackTimeout;
