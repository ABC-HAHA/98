(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"32b8":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");var e=r(n("66fd")),a=r(n("cf5e")),o=r(n("2a5f"));r(n("840b"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=o.default,e.default.prototype.websiteUrl="http://192.168.5.254:8080/98video",e.default.config.productionTip=!1,a.default.mpType="app";var c=new e.default(i({},a.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},"443e":function(t,e,n){"use strict";var a=n("a08a"),o=n.n(a);o.a},"4e35":function(t,e,n){"use strict";n.r(e);var a=n("833b"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"833b":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{}},onLaunch:function(){var e=this;console.log(t("App Launch"," at App.vue:10")),plus.screen.lockOrientation("portrait-primary"),a.getStorage({key:"userInfo",success:function(t){e.login(t.data)}}),a.getStorage({key:"network",success:function(t){e.allowDown(t.data)}}),a.getStorage({key:"push",success:function(t){e.allowPush(t.data)}}),a.getStorage({key:"userImage",success:function(t){e.storeImage(t.data)}}),a.getStorage({key:"device",success:function(t){e.storeDevice(t.data)}}),this.randomStr(),this.update()},onShow:function(){console.log(t("App Show"," at App.vue:49"))},onHide:function(){console.log(t("App Hide"," at App.vue:52"))},methods:r({},(0,o.mapMutations)(["login","allowDown","allowPush","storeImage","storeDevice"]),{update:function(){var e,n,o=this,r=plus.os.name.toUpperCase(),i=0,s=plus.runtime.appid,c=6048e5,u=0;a.getStorage({key:"version_update_time",success:function(t){u=t.data}}),plus.runtime.getProperty(s,function(s){e=plus.storage.getItem("app-id"),console.log(t(e," at App.vue:74")),e=e?e.replace(/\./g,""):s.versionCode,a.request({url:o.websiteUrl+"/sys/checkversion",method:"POST",data:{systemName:r,versionCode:e},success:function(e){var s=e.data;if(s.data)var l=s.data.versionName;var p=new Date;if(p=p.getTime(),null!=s.data){var f=o.CreateDownNotification();if(u+c>p)return;3!=plus.networkinfo.getCurrentType()?(""!=s.data.versionWgtPath&&a.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:173"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&a.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:234"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}})):(""!=s.data.versionWgtPath&&a.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:317"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&a.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:378"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}}))}},fail:function(){},complete:function(){}})})},randomStr:function(){if(""==this.$store.state.deviceId){var t="",e=!1,n=32,a=null,o=null,r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(n=Math.round(Math.random()*(a-min))+min);for(var i=0;i<n;i++)o=Math.round(Math.random()*(r.length-1)),t+=r[o];this.$store.commit("storeDevice",t)}},CreateDownNotification:function(){var t=1,e=plus.android.runtimeMainActivity(),n=plus.android.importClass("android.app.Notification"),a=plus.android.importClass("android.app.NotificationManager"),o=plus.android.importClass("android.content.Context"),r=plus.android.importClass("android.os.Build"),i=plus.android.importClass("com.yangze.cinema.R"),s=plus.android.importClass("android.graphics.BitmapFactory"),c=e.getSystemService(o.NOTIFICATION_SERVICE),u=new n.Builder(e);if(u.setAutoCancel(!1),u.setOngoing(!0),u.setShowWhen(!1),u.setSmallIcon(i.mipmap.ic_launcher),u.setLargeIcon(s.decodeResource(e.getResources(),i.mipmap.ic_launcher)),r.VERSION.SDK_INT>=26){var l=plus.android.importClass("android.app.NotificationChannel"),p=new l("com.yangze.cinema","downtask",a.IMPORTANCE_DEFAULT);u.setChannelId("com.yangze.cinema"),c.createNotificationChannel(p)}function f(e,n){var a=e.toString();u.setContentTitle("下载中..."+a+"%"),u.setProgress(100,e,!1);var o=u.build();c.notify(t,o),100==e&&c.cancel(t),n||c.cancel(t)}return f}})};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},a08a:function(t,e,n){},cf5e:function(t,e,n){"use strict";n.r(e);var a=n("4e35");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("443e");var r,i,s=n("2877"),c=Object(s["a"])(a["default"],r,i,!1,null,null,null);e["default"]=c.exports}},[["32b8","common/runtime","common/vendor"]]]);