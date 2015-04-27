/*coolie 1430125579055*/
define("0",["1"],function(t,e,n){"use strict";var u=t("1"),i=document.getElementById("output");document.getElementById("input").onkeyup=function(){var t=u.parseFloat(this.value);i.innerHTML=String(u.PI*Math.pow(t,2))}});
define("1",[],function(t,a,e){"use strict";a.parseFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t},a.PI=Math.PI});