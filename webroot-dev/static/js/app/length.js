/*!
 * 计算圆的周长
 * @author ydr.me
 * @create 2015-03-24 16:54
 */


define(function (require, exports, module) {
    'use strict';

    var utils = require('../utils.js'),
        utils2 = require('../utils2.js');
    var $output = document.getElementById('output');

    document.getElementById('input').onkeyup = function () {
        var r = utils.parseFloat(this.value);

        $output.innerHTML = String(2 * utils.PI * r);
    };
});