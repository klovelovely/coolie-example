/*!
 * 数字格式化
 * @author ydr.me
 * @create 2015-03-24 16:53
 */


define(function (require, exports, module) {
    'use strict';

    exports.parseFloat = function (num) {
        num = parseFloat(num);

        return isNaN(num) ? 0 : num;
    };

    exports.PI = Math.PI;
});