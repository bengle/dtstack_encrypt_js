(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory(global):typeof define==="function"&&define.amd?define(factory):global.moment=factory(global)}((typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this),function(global){var _Base64=global.Base64;var version="2.4.0";var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=require("buffer").Buffer}catch(err){}}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++){t[bin.charAt(i)]=i}return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<128?c:cc<2048?(fromCharCode(192|(cc>>>6))+fromCharCode(128|(cc&63))):(fromCharCode(224|((cc>>>12)&15))+fromCharCode(128|((cc>>>6)&63))+fromCharCode(128|(cc&63)))}else{var cc=65536+(c.charCodeAt(0)-55296)*1024+(c.charCodeAt(1)-56320);return(fromCharCode(240|((cc>>>18)&7))+fromCharCode(128|((cc>>>12)&63))+fromCharCode(128|((cc>>>6)&63))+fromCharCode(128|(cc&63)))}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|((ccc.length>1?ccc.charCodeAt(1):0)<<8)|((ccc.length>2?ccc.charCodeAt(2):0)),chars=[b64chars.charAt(ord>>>18),b64chars.charAt((ord>>>12)&63),padlen>=2?"=":b64chars.charAt((ord>>>6)&63),padlen>=1?"=":b64chars.charAt(ord&63)];return chars.join("")};var btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(u){return(u.constructor===buffer.constructor?u:buffer.from(u)).toString("base64")}:function(u){return(u.constructor===buffer.constructor?u:new buffer(u)).toString("base64")}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return !urisafe?_encode(String(u)):_encode(String(u)).replace(/[+\/]/g,function(m0){return m0=="+"?"-":"_"}).replace(/=/g,"")};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(["[\xC0-\xDF][\x80-\xBF]","[\xE0-\xEF][\x80-\xBF]{2}","[\xF0-\xF7][\x80-\xBF]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=((7&cccc.charCodeAt(0))<<18)|((63&cccc.charCodeAt(1))<<12)|((63&cccc.charCodeAt(2))<<6)|(63&cccc.charCodeAt(3)),offset=cp-65536;return(fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320));case 3:return fromCharCode(((15&cccc.charCodeAt(0))<<12)|((63&cccc.charCodeAt(1))<<6)|(63&cccc.charCodeAt(2)));default:return fromCharCode(((31&cccc.charCodeAt(0))<<6)|(63&cccc.charCodeAt(1)))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode((n>>>8)&255),fromCharCode(n&255)];chars.length-=[0,0,2,1][padlen];return chars.join("")};var atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)};var _decode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,"base64")).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(atob(a))};var decode=function(a){return _decode(String(a).replace(/[-_]/g,function(m0){return m0=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};var noConflict=function(){var Base64=global.Base64;global.Base64=_Base64;return Base64};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict};if(typeof Object.defineProperty==="function"){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,true)}))}}if(global["Meteor"]){Base64=global.Base64}if(typeof module!=="undefined"&&module.exports){module.exports.Base64=global.Base64}else{if(typeof define==="function"&&define.amd){define([],function(){return global.Base64})}}return{Base64:global.Base64}}));
var CryptoJS=CryptoJS||function(i,j){var f={},b=f.lib={},m=b.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),l=b.WordArray=m.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=j?e:4*a.length},toString:function(a){return(a||d).stringify(this)},concat:function(a){var e=this.words,c=a.words,o=this.sigBytes,a=a.sigBytes;this.clamp();if(o%4)for(var b=0;b<a;b++)e[o+b>>>2]|=(c[b>>>2]>>>24-8*(b%4)&255)<<24-8*((o+b)%4);else if(65535<c.length)for(b=0;b<a;b+=4)e[o+b>>>2]=c[b>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=i.ceil(e/4)},clone:function(){var a=
m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*i.random()|0);return l.create(e,a)}}),n=f.enc={},d=n.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],b=0;b<a;b++){var d=e[b>>>2]>>>24-8*(b%4)&255;c.push((d>>>4).toString(16));c.push((d&15).toString(16))}return c.join("")},parse:function(a){for(var e=a.length,c=[],b=0;b<e;b+=2)c[b>>>3]|=parseInt(a.substr(b,2),16)<<24-4*(b%8);return l.create(c,e/2)}},h=n.Latin1={stringify:function(a){for(var e=
a.words,a=a.sigBytes,b=[],d=0;d<a;d++)b.push(String.fromCharCode(e[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return l.create(c,b)}},k=n.Utf8={stringify:function(a){try{return decodeURIComponent(escape(h.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return h.parse(unescape(encodeURIComponent(a)))}},g=b.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=l.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=k.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,g=d/(4*f),g=a?i.ceil(g):i.max((g|0)-this._minBufferSize,0),a=g*f,d=i.min(4*a,d);if(a){for(var h=0;h<a;h+=f)this._doProcessBlock(c,h);h=c.splice(0,a);b.sigBytes-=d}return l.create(h,d)},clone:function(){var a=m.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});b.Hasher=g.extend({init:function(){this.reset()},
reset:function(){g.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return p.HMAC.create(a,c).finalize(b)}}});var p=f.algo={};return f}(Math);
(function(){var i=CryptoJS,j=i.lib,f=j.WordArray,j=j.Hasher,b=[],m=i.algo.SHA1=j.extend({_doReset:function(){this._hash=f.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,i){for(var d=this._hash.words,h=d[0],k=d[1],g=d[2],j=d[3],a=d[4],e=0;80>e;e++){if(16>e)b[e]=f[i+e]|0;else{var c=b[e-3]^b[e-8]^b[e-14]^b[e-16];b[e]=c<<1|c>>>31}c=(h<<5|h>>>27)+a+b[e];c=20>e?c+((k&g|~k&j)+1518500249):40>e?c+((k^g^j)+1859775393):60>e?c+((k&g|k&j|g&j)-1894007588):c+((k^g^j)-
899497514);a=j;j=g;g=k<<30|k>>>2;k=h;h=c}d[0]=d[0]+h|0;d[1]=d[1]+k|0;d[2]=d[2]+g|0;d[3]=d[3]+j|0;d[4]=d[4]+a|0},_doFinalize:function(){var b=this._data,f=b.words,d=8*this._nDataBytes,h=8*b.sigBytes;f[h>>>5]|=128<<24-h%32;f[(h+64>>>9<<4)+15]=d;b.sigBytes=4*f.length;this._process()}});i.SHA1=j._createHelper(m);i.HmacSHA1=j._createHmacHelper(m)})();
(function(){var i=CryptoJS,j=i.enc.Utf8;i.algo.HMAC=i.lib.Base.extend({init:function(f,b){f=this._hasher=f.create();"string"==typeof b&&(b=j.parse(b));var i=f.blockSize,l=4*i;b.sigBytes>l&&(b=f.finalize(b));for(var n=this._oKey=b.clone(),d=this._iKey=b.clone(),h=n.words,k=d.words,g=0;g<i;g++)h[g]^=1549556828,k[g]^=909522486;n.sigBytes=d.sigBytes=l;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var b=
this._hasher,f=b.finalize(f);b.reset();return b.finalize(this._oKey.clone().concat(f))}})})();
(function(w,d){if(!window.encrypt){window.encrypt={}}encrypt={getEncryptStr:function(data,sk){var unCryptStr="";if(typeof data=='object'){for(var key in data){unCryptStr=unCryptStr+''+key+'='+data[key]+'&'}var len=unCryptStr.length-1;return Base64.encode(CryptoJS.HmacSHA1(unCryptStr.substr(0,len),sk))}else{return'请检查传入json对象是否正确'}}}})(window,document);