/*coolie@0.17.0 1433513303957*/
define("0",["1","2"],function(t,e,n){"use strict";var u=t("1"),i=t("2"),o=document.getElementById("output");document.getElementById("input").onkeyup=function(){var t=u.parseFloat(this.value);o.innerHTML=String(2*u.PI*t)}});
define("1",[],function(t,a,e){"use strict";a.parseFloat=function(t){t=parseFloat(t);return isNaN(t)?0:t};a.PI=Math.PI});
define("2",[],function(e,t,i){"use strict";i.exports={}});