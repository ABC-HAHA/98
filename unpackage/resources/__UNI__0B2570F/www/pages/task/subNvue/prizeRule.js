!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}([function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,i="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],i=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},o=function(e){return function(){for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(o.success)||t(o.fail)||t(o.complete)?e.apply(void 0,[o].concat(i)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},o,{success:t,fail:n})].concat(i)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=a.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function f(t){t.$processed=!0;var e=a.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,i=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:i}):w({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var o=t.__uniapp_mask,u=a.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,f=t.hide,p=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:o});for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return f.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return p.apply(t,n)}}}function p(t){var e=a.webview.getWebviewById(t);return e&&!e.$processed&&f(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},_="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?y(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof x&&x(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof b&&b(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof C&&C(t.data.data)});var y=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,i,a=e.id,o=e.type,r=e.params;v[a]=(i=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(i.keepAlive=!0),i),d.postMessage({id:a,type:o,params:r},_)};function w(t){d.postMessage(t,_)}var S=function(t){return function(e){m({id:h++,type:t,params:e})}},x=void 0,b=void 0,k=void 0,C=void 0;function D(t){x=t}function T(t){b=t}function E(t){k=t}function I(t){C=t}function N(t){return weex.requireModule(t)}var P=weex.requireModule("dom"),q=weex.requireModule("globalEvent"),R=[];function $(t){"function"==typeof t&&(this.isUniAppReady?t():R.push(t))}q.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&($.isUniAppReady=!0,R.length&&(R.forEach(function(t){return t()}),R=[]))});var B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j=weex.requireModule("stream"),O="GET",M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":B(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},F=weex.requireModule("plusstorage"),A="__TYPE",V=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function L(t,e,n){return t[e].apply(t,n)}var W=Object.freeze({loadFontFace:function(e){var n=e.family,i=e.source,a=(e.desc,e.success),o=(e.fail,e.complete);P.addRule("fontFace",{fontFamily:n,src:i.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(a)&&a(r),t(o)&&o(r)},ready:$,request:function(e){var n=e.url,i=e.data,a=e.header,o=e.method,r=void 0===o?"GET":o,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,f=e.complete,p=!1,d=!1,g={};if(a)for(var h in a)d||"content-type"!==h.toLowerCase()?g[h]=a[h]:(d=!0,g["Content-Type"]=a[h]);return r===O&&i&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+M(i)),j.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==O?M(i,r,g["Content-Type"]):""},function(e){var n=e.status,i=(e.ok,e.statusText,e.data),a=e.headers,o={};!n||-1===n||p?(o.errMsg="request:fail",t(l)&&l(o)):(o.data=i,o.statusCode=n,o.header=a,t(c)&&c(o)),t(f)&&f(o)}),{abort:function(){p=!0}}},getStorage:function(e){var n=e.key,i=(e.data,e.success),a=e.fail,o=e.complete;F.getItem(n+A,function(e){if("success"===e.result){var r=e.data;F.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(i)&&i({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(a)&&a(e))}else e.errMsg="setStorage:fail",t(a)&&a(e);t(o)&&o(e)})}else e.errMsg="setStorage:fail",t(a)&&a(e),t(o)&&o(e)})},setStorage:function(e){var n=e.key,i=e.data,a=e.success,o=e.fail,r=e.complete,s="String";"object"===(void 0===i?"undefined":B(i))&&(s="Object",i=JSON.stringify(i)),F.setItem(n,i,function(e){"success"===e.result?F.setItem(n+A,s,function(e){"success"===e.result?t(a)&&a({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(o)&&o(e))}):(e.errMsg="setStorage:fail",t(o)&&o(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,i=(e.data,e.success),a=e.fail,o=e.complete;F.removeItem(n,function(e){"success"===e.result?t(i)&&i({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(a)&&a(e)),t(o)&&o(e)}),F.removeItem(n+A)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,i=(e.fail,e.complete);V.getString(function(e){var a={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(a),t(i)&&i(a)})},setClipboardData:function(e){var n=e.data,i=e.success,a=(e.fail,e.complete),o={errMsg:"setClipboardData:ok"};V.setString(n),t(i)&&i(o),t(a)&&a(o)},onSubNVueMessage:u,getSubNVueById:p,getCurrentSubNVue:function(){return p(a.webview.currentWebview().id)},$on:function(){return L(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return L(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return L(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return L(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),z={os:{nvue:!0}},H={};return"undefined"!=typeof Proxy?H=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return w;if("requireNativePlugin"===e)return N;if("onNavigationBarButtonTap"===e)return D;if("onNavigationBarSearchInputChanged"===e)return T;if("onNavigationBarSearchInputConfirmed"===e)return E;if("onNavigationBarSearchInputClicked"===e)return I;var n=W[e];return n||(n=S(e)),i(e)?o(n):n}}):(Object.keys(z).forEach(function(t){H[t]=z[t]}),H.postMessage=w,H.requireNativePlugin=N,H.onNavigationBarButtonTap=D,H.onNavigationBarSearchInputChanged=T,H.onNavigationBarSearchInputConfirmed=E,H.onNavigationBarSearchInputClicked=I,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=W[t];e||(e=S(t)),i(t)?H[t]=o(e):H[t]=e})),H};var a=new WeexPlus(weex);e.weexPlus=a;var o=i(weex,a,BroadcastChannel);e.default=o},function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__0B2570F"}},function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";(function(t,e){function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(4).version,l="__DC_STAT_UUID",f="__DC_UUID_VALUE";function p(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=f}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,f)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===h()?t.runtime.version:""},y=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,w=0,S=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},x=0,b=0,k=function(){var t=(new Date).getTime();return x=t,b=0,t},C=function(){var t=(new Date).getTime();return b=t,t},D=function(t){var e=0;return 0!==x&&(e=b-x),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},T=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},E=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},I=n(5).default,N=n(1).default||n(1),P=e.getSystemInfoSync(),q=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:p(),ut:h(),mpn:v(),ak:N.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===P.platform?"a":"i",brand:P.brand||"",md:P.model,sv:P.system.replace(/(Android|iOS)\s/,""),mpsdk:P.SDKVersion||"",mpv:P.version||"",lang:P.language,pr:P.pixelRatio,ww:P.windowWidth,wh:P.windowHeight,sw:P.screenWidth,sh:P.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(C(),D("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,C();var n=D();k();var i=T(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=T(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=I&&I.pages[i]&&I.pages[i].titleNView&&I.pages[i].titleNView.titleText||I&&I.pages[i]&&I.pages[i].navigationBarTitleText||"",this.__licationShow)return k(),this.__licationShow=!1,void(this._lastPageRoute=n);if(C(),this._lastPageRoute=n,D("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}k()}},{key:"_pageHide",value:function(){if(!this.__licationHide){C();var t=D("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,i,a=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+a||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),i="";return t||("wx"===n&&(i=e.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),i=0,n?i=n:(i=g(),e.setStorageSync("First__Visit__Time",i),e.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,o=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;N.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var i=this,a=g(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),w=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(w-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],f=[],p=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?f.push(n):l.push(n)})};for(var d in s)p(d);u.push.apply(u,l.concat(f));var v={usv:c,t:a,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){i._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var a in e)n[e[a]]=t[e[a]],i+=e[a]+"="+t[e[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),R=function(t){function n(){var t;return r(this,n),(t=i(this,a(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,q),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,E(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,E(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),$=!1,B={onLaunch:function(t){R.report(t,this)},onReady:function(){R.ready(this)},onLoad:function(t){if(R.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return R.interceptShare(!1),e.call(this,t)}}},onShow:function(){$=!1,R.show(this)},onHide:function(){$=!0,R.hide(this)},onUnload:function(){$?$=!1:R.hide(this)},onError:function(t){R.error(t)}};((d=n(6)).default||d).mixin(B),e.report=function(t,e){R.sendEvent(t,e)}}).call(this,n(0).weexPlus,n(0).default)},function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},function(t,e){t.exports=Vue},function(t,e){},,,,function(t,e,n){"use strict";var i=n(24),a=n(21),o=n(2);var r=Object(o.a)(a.default,i.a,i.b,!1,null,null,"3ba3aaf1");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(31).default,this.options.style):Object.assign(this.options.style,n(31).default)}).call(r),e.default=r.exports},,,,,,,,,,function(t,e,n){"use strict";var i=n(22),a=n.n(i);e.default=a.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wx:1452478512,qq:145278965}},methods:{closeBox:function(){t.getSubNVueById("exchangeRule").hide("slide-out-top",200)}}};e.default=n}).call(this,n(0).default)},function(t,e){t.exports={"dialog-rule":{flexDirection:"column",alignItems:"center",justifyContent:"center"},"dialog-rule-box":{width:"330wx",height:"390wx"},"dialog-rule-box-content":{width:"330wx",height:"390wx",position:"relative"},"rule-box-image":{width:"330wx",height:"390wx"},"rule-box-text":{width:"330wx",height:"161wx",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",top:"0wx",left:"0wx"},"rule-box-text-title":{fontSize:"32wx",fontFamily:"PingFang SC",fontWeight:"500",color:"#FFFFFF",marginBottom:"23wx"},"rule-box-text-content":{fontSize:"15wx",fontFamily:"PingFang SC",fontWeight:"bold",color:"#FFFFFF"},"rule-list":{width:"330wx",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",position:"absolute",top:"161wx",left:"25wx"},"rule-list-one":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",marginBottom:"16wx"},"rule-list-two":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",marginBottom:"16wx"},"rule-list-three":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",marginBottom:"16wx"},"rule-list-four":{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",marginBottom:"16wx"},"rule-list-one-img":{width:"14wx",height:"14wx",marginRight:"6wx"},"rule-list-two-img":{width:"14wx",height:"14wx",marginRight:"6wx"},"rule-list-three-img":{width:"14wx",height:"14wx",marginRight:"6wx"},"rule-list-four-img":{width:"14wx",height:"14wx",marginRight:"6wx"},"rule-list-one-text":{width:"270wx",fontSize:"12wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E"},"rule-list-two-text":{width:"270wx",fontSize:"12wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E"},"rule-list-three-text":{width:"270wx",fontSize:"12wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E"},"rule-list-four-text":{width:"270wx",fontSize:"12wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E"},"rule-line-txt":{width:"272wx",height:"1wx",marginTop:"6wx",backgroundColor:"#EEEEEE"},"rule-time":{width:"255wx",flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start",marginLeft:"12wx",marginTop:"16wx"},"rule-time-online":{fontSize:"11wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E",marginBottom:"8wx"},"rule-time-wx":{fontSize:"11wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E",marginRight:"16wx"},"rule-time-qq":{fontSize:"11wx",fontFamily:"PingFang SC",fontWeight:"400",color:"#3E3E3E"}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["dialog-rule"],on:{click:t.closeBox}},[n("div",{staticClass:["dialog-rule-box"]},[n("div",{staticClass:["dialog-rule-box-content"]},[n("image",{staticClass:["rule-box-image"],attrs:{src:"/static/prize-rule.png"}}),t._m(0),n("div",{staticClass:["rule-list"]},[t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:["rule-line-txt"]}),n("div",{staticClass:["rule-time"]},[n("text",{staticClass:["rule-time-online"]},[t._v("客服在线时间：工作日9：00—18：00")]),n("text",{staticClass:["rule-time-wx"]},[t._v("客服微信号："+t._s(t.wx))]),n("text",{staticClass:["rule-time-qq"]},[t._v("客服QQ："+t._s(t.qq))])])])])])])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["rule-box-text"]},[e("text",{staticClass:["rule-box-text-title"]},[this._v("提现规则")]),e("text",{staticClass:["rule-box-text-content"]},[this._v("中奖现金依据下方流程提现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["rule-list-one"]},[e("image",{staticClass:["rule-list-one-img"],attrs:{src:"/static/rule-one.png"}}),e("text",{staticClass:["rule-list-one-text"]},[this._v("添加下方客服微信/QQ号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["rule-list-two"]},[e("image",{staticClass:["rule-list-two-img"],attrs:{src:"/static/rule-two.png"}}),e("text",{staticClass:["rule-list-two-text"]},[this._v("给客服提供您的中奖编号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["rule-list-three"]},[e("image",{staticClass:["rule-list-three-img"],attrs:{src:"/static/rule-three.png"}}),e("text",{staticClass:["rule-list-three-text"]},[this._v("待客服核实后转账/发红包给您，请您耐心等待！ (客服会在24小时内处理）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["rule-list-four"]},[e("image",{staticClass:["rule-list-four-img"],attrs:{src:"/static/rule-four.png"}}),e("text",{staticClass:["rule-list-four-text"]},[this._v("如果又任何疑问请您及时联系客服")])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(23),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a},,,,function(t,e,n){"use strict";n.r(e);n(3),n(7);var i=n(11);i.default.mpType="page",i.default.route="pages/task/subNvue/prizeRule",i.default.el="#root",new Vue(i.default)}]);