(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/playPage/share"],{"1f43":function(e,t,a){"use strict";a.r(t);var s=a("8e0e"),n=a("f64a");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("8173");var o=a("2877"),c=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=c.exports},"6de0":function(e,t,a){},"6e94":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{bottomData:[{text:"QQ好友",icon:"../../static/sharemenu/qq.png",name:"qq"},{text:"微信好友",icon:"../../static/sharemenu/wx.png",name:"wx"},{text:"微信朋友圈",icon:"../../static/sharemenu/pyq.png",name:"wx"},{text:"复制链接",icon:"../../static/sharemenu/copy.png",name:"more"},{}]}},methods:{togglePopup:function(){this.$emit("togglePopupEvent")},toShare:function(t){var s=this,n=this.$store.state.isLogin;if(n)switch(Number(t.currentTarget.id)){case 0:e.share({provider:"qq",type:1,href:"http://47.98.171.179:8080/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',summary:"精彩大片抢先看",success:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:71"))},fail:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:75"))}});break;case 1:e.share({provider:"weixin",scene:"WXSceneSession",type:0,href:"http://47.98.171.179:8080/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',summary:"精彩大片抢先看",imageUrl:"../../static/98Code.png",success:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:90"))},fail:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:94"))}});break;case 2:e.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://47.98.171.179:8080/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',summary:"精彩大片抢先看",imageUrl:"../../static/98Code.png",success:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:111"))},fail:function(e){s.$emit("successShareEvent"),console.log(a("success:"+JSON.stringify(e)," at pages\\playPage\\share.vue:115"))}});break;case 3:e.setClipboardData({data:"http://47.98.171.179:8080/download_page/download.html",complete:function(){e.showToast({title:"已复制到剪贴板"})}});break}else e.navigateTo({url:"/pages/login/login",animationType:"slide-in-top"})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},8173:function(e,t,a){"use strict";var s=a("6de0"),n=a.n(s);n.a},"8e0e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},f64a:function(e,t,a){"use strict";a.r(t);var s=a("6e94"),n=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);t["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/playPage/share-create-component',
    {
        'pages/playPage/share-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1f43"))
        })
    },
    [['pages/playPage/share-create-component']]
]);                