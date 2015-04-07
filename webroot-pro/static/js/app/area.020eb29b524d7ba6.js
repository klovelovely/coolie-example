/*coolie 1428423889830*/
define("0",["1"],function(t){"use strict";var e=t("1"),n=document.getElementById("output");document.getElementById("input").onkeyup=function(){var t=e.parseFloat(this.value);n.innerHTML=String(e.PI*Math.pow(t,2))}});
define("1",[],function(t,a){"use strict";a.parseFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t},a.PI=Math.PI});