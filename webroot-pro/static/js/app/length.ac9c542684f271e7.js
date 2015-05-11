/*coolie@0.14.4 1431327643358*/
define("0",["1","2"],function(t,e,n){"use strict";var u=t("1"),i=(t("2"),document.getElementById("output"));document.getElementById("input").onkeyup=function(){var t=u.parseFloat(this.value);i.innerHTML=String(2*u.PI*t)}});
define("1",[],function(t,a,e){"use strict";a.parseFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t},a.PI=Math.PI});
define("2",[],function(e,t,i){"use strict";i.exports={}});