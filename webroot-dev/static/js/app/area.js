/*!
 * 计算圆的面积
 * @author ydr.me
 * @create 2015-03-24 16:54
 */


define(function (require, exports, module) {
    'use strict';

    var utils = require('../utils.js');
    var $output = document.getElementById('output');

    document.getElementById('input').onkeyup = function () {
        var r = utils.parseFloat(this.value);

        $output.innerHTML = String(utils.PI * Math.pow(r, 2));
    };
});