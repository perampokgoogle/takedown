(function() {
!function(o){function n(e){if(t[e])return t[e].exports;var i=t[e]={exports:{},id:e,loaded:!1};return o[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=o,n.c=t,n.p="",n(0)}({0:function(o,n,t){"use strict";function e(o){return o&&o.__esModule?o:{"default":o}}function i(){if(!j){j=!0,window._sp_=window._sp_||{},H=window._sp_.config=window._sp_.config||{},K=H.content_control_callback||window._sp_lock,N=H.account_id||H.client_id||window.sp_cid;for(var o in H)T[o]=H[o]}}function r(o,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",e=new Image;e.src="//"+E+"/cct?v="+encodeURIComponent(x)+"&ct=1&cid="+encodeURIComponent(N)+"&l="+encodeURIComponent(o.toString())+"&rc="+encodeURIComponent(n)+"&d0="+encodeURIComponent(t)}function c(o,n,t,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=function(){return c(o,n,t,e,i,!0)},a=r?t:d;o(n,a,e,i)}function d(o,n,t,e){var i=document.createElement("script");i.src=o,i.onload=function(){try{if(window._sp_&&window._sp_.bootstrap===p&&window.spBootstrap===u&&window._sp_.config===H){for(var o in T)if(T[o]!==H[o]){h&&h();break}}else h&&h()}catch(n){h&&h()}e.onLoad&&e.onLoad()},i.onerror=function(){function i(o,n){t(o,n),e.onError&&e.onError(n)}function r(o){return c.indexOf(o)>-1}var c=(navigator.userAgent||navigator.vendor||window.opera).toLowerCase();r("mobi")||r("ipad")||r("android")||r("iphone")?i(R):r("exabot")?i(k):r("bingbot")||r("bingpreview")?i(D):r("googlebot")||r("adsbot-google")||r("mediapartners-google")?i(L):r("googleweblight")?i(I):window.location.host===g?i(S):window.location.host.indexOf(m)>-1?i(M):r("msie 10")||r("msie 9")||r("msie 8")?i(U):a(o,n,i)},document.head.appendChild(i),document.querySelector('script[src="'+o+'"]')||window.location.host.indexOf(m)!==-1||n(O,o)}function a(o,n,t){(0,v["default"])(o,function(e,i,r,c){var d=e||i?n:t;d(c,o+"::"+r)})}function s(o,n){return A?void w(B+"::"+o,n):(r(y,o,n),void(K&&setTimeout(function(){K()},250)))}function w(o,n){r(C,o,n)}function u(o,n){i(),n&&(K=window._sp_lock=n),c(d,o,s,w)}function p(o,n){i(),c(d,o,s,w,n)}var f=t(364),l=e(f),_=t(91),v=e(_),g=["w","e","b","c","a","c","h","e",".","g","o","o","g","l","e","u","s","e","r","c","o","n","t","e","n","t",".","c","o","m"].join(""),m=["o","p","t","i","m","i","z","e","l","y","p","r","e","v","i","e","w",".","c","o","m"].join(""),h=void 0;try{h=window._sp_&&window._sp_.config&&window._sp_.config.spid_control_callback}catch(b){}var E=l["default"].be.join(""),x=l["default"].bv,C=0,y=1,O="s",R="m",L="g",S="gw",I="gl",U="i",D="b",k="e",B="n",M="o",T={},j=!1,A=!1,H=void 0,K=void 0,N=void 0;window.addEventListener("beforeunload",function(){A=!0});try{window._sp_=window._sp_||{},window._sp_.bootstrap=p,window.spBootstrap=u,window._sp_.bootstrap===p&&window.spBootstrap===u||h&&h()}catch(b){h&&h()}},91:function(o,n){"use strict";function t(o,n){function t(){try{return window.performance.now()}catch(o){return Date.now()}}var a=document.createElement("a");if(a.href=o,"https:"===window.location.protocol&&a.protocol!==window.location.protocol)return void n(!1,!1,a.protocol,d);var s=new XMLHttpRequest;try{s.open("GET",o)}catch(w){return void n(!0,!1,w.toString(),r,s)}var u=void 0,p=void 0;s.onloadstart=function(){u=t()},s.onreadystatechange=function(){if(4===this.readyState){p=t()-u;var o=0===this.status,r="2"===this.status.toString()[0],c=r?i:e;return void n(o,r,this.status+"::"+p,c,s)}};try{s.send()}catch(w){return void n(!0,!1,w.toString(),c,s)}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t;var e=n.NETWORK_FAILURE="n",i=n.XHR_SUCCEEDED="nx",r=n.OPEN_BLOCKED="xo",c=n.SEND_BLOCKED="xs",d=n.PROTOCOL_MISMATCH="p"},364:function(o,n){"use strict";o.exports={be:["w","w","w",".","b","e","e","f","t","r","a","n","s","m","i","s","s","i","o","n",".","c","o","m"],bv:"1.7.508"}}});
//# sourceMappingURL=https://s3.amazonaws.com/d3jlsadfjkuern/1.7.508/Ym9vdHN0cmFwLmpz.map
window._sp_ = window._sp_ || {};
window._sp_.config = window._sp_.config || {};
window._sp_.config.account_id = 188;
// {
window._sp_.config.content_control_callback = function() {
console.log('CONTENT LOCK');
window.location.href = 'http://www.tweaktown.com/sp/index.html';
};
window._sp_.config.vid_control_callback = function() {
console.log('VID');
window.location.href = 'http://www.tweaktown.com/sp/index.html';
};
window._sp_.config.mms_domain = 'zyx.tweaktown.com';
window._sp_.mms = window._sp_.mms || {};
window._sp_.mms.cmd = window._sp_.mms.cmd || [];
window._sp_.config.mms_client_data_callback = function(o) {};
window._sp_.mms.cmd.push(function() {
window._sp_.mms.setTargeting("x", "y");
});
window._sp_.mms.cmd.push(function() {
window._sp_.mms.startMsg();
});
window._sp_.config.enable_fsm_detection = true;
window._sp_.bootstrap('http://www.tweaktown.com/messaging-22317.js');
window._sp_.bootstrap('http://www.tweaktown.com/mms-client-22317.js');
})();
