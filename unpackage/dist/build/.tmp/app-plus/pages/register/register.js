(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1ad1":function(e,t,n){"use strict";(function(e,s,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("85cd"));function a(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{phoneNum:"",smsCode:"",password:"",codeText:"",phoneFalg:!1,codeFalg:!1,pwdFalg:!1,beginFalg:!1,sendCodeText:"发送验证码",timeText:"",num:60,checkFalg:!1,system:""}},onShow:function(){this.system=plus.os.name.toUpperCase()},methods:{sendCode:function(){var t=/^1[3-9]\d{9}$/;if(""==this.phoneNum||!t.test(this.phoneNum))return e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var n=new s(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/code/sms",method:"POST",data:{mobile:n},success:function(e){console.log(i(e," at pages\\register\\register.vue:77"))},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))},checkPhone:function(){var t=/^1[3-9]\d{9}$/;return""!=this.phoneNum&&t.test(this.phoneNum)?(this.phoneFalg=!0,!0):(this.phoneFalg=!1,e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},checkCode:function(){return""!=this.smsCode?(this.codeFalg=!0,!0):(this.codeFalg=!1,e.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},checkPwd:function(){var t=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.password&&t.test(this.password)?(this.pwdFalg=!0,!0):(this.pwdFalg=!1,e.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},isAgree:function(){return this.checkFalg?(this.checkFalg=!1,e.showToast({title:"请阅读相关协议并同意",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1):(this.checkFalg=!0,!0)},hasAgree:function(){return!!this.checkFalg},register:function(){if(!(this.checkPhone()&&this.checkCode()&&this.checkPwd()&&this.hasAgree()))return!1;var t=o.default.MD5(this.password).toString(),n=new s(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/register",method:"POST",data:{mobile:n,userPwd:t,smsCode:this.smsCode,shareCode:this.codeText},success:function(t){t&&0===t.data.status?(e.showToast({title:"注册成功",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateBack({delta:1,animationType:"slide-in-left"})},1600)):(e.showToast({title:t.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))},fail:function(){},complete:function(){}})}}};t.default=u}).call(this,n("6e42")["default"],n("b639").Buffer,n("0de9")["default"])},4549:function(e,t,n){"use strict";(function(e){n("eee4"),n("921b");s(n("66fd"));var t=s(n("4ffe"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4ffe":function(e,t,n){"use strict";n.r(t);var s=n("a59d"),i=n("ae0a");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("cdb6");var a=n("2877"),u=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=u.exports},a59d:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},aacb:function(e,t,n){},ae0a:function(e,t,n){"use strict";n.r(t);var s=n("1ad1"),i=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t["default"]=i.a},cdb6:function(e,t,n){"use strict";var s=n("aacb"),i=n.n(s);i.a}},[["4549","common/runtime","common/vendor"]]]);