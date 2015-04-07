/*coolie 1428423889848*/
define("0",["1","2"],function(t){"use strict";var e=t("1"),n=(t("2"),document.getElementById("output"));document.getElementById("input").onkeyup=function(){var t=e.parseFloat(this.value);n.innerHTML=String(2*e.PI*t)}});
define("1",[],function(t,a){"use strict";a.parseFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t},a.PI=Math.PI});
define("2",[],function(e,t,i){"use strict";i.exports={}});