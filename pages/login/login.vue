<template>
	<view>
		<view class="login">
		    <view class="login_logo">
		        <image src="/static/denglu_logo.png" mode=""></image>
		    </view>
            <view class="login_infor">
                <view class="login_mode">
                    <view class="login_pwd" @tap="pwd" :class="[index === 0 ? ' selsctClass':'']">
                        <text>密码登录</text>
                    </view>
                    <view class="login_code" @tap="code" :class="[index === 1 ? ' selsctClass':'']">
                        <text>验证码登录</text>
                    </view>
                </view>
                <swiper class="swiper" :indicator-dots="false" :autoplay="false" :duration="500" :current="index" @change="swiperChange">
                    <swiper-item class="login_family">
                        <view class="swiper-item">
                            <input type="number" maxlength="11" placeholder="请输入手机号码" placeholder-class="placeholder_style" v-model="username" @blur="checkUser"/>
                        </view>
                        <view class="swiper-item swiper-item-right">
                            <input :style="{'font-size':system == 'IOS' ? '8px;' : '19x'}" :class="[isShowPwd ? '' : 'inputPwd']" type="text" placeholder="请输入密码" maxlength="15" placeholder-class="placeholder_style" :password="isShowPwd" v-model="password"  @blur="checkPwd"/>
                            <view class="showHidePwd" @tap="showPass">
                                <image class="hidePwd" src="/static/hide_pwd.png" mode="" v-if="isShowPwd"></image>
                                <image class="showPwd" src="/static/show_pwd.png" mode="" v-if="!isShowPwd"></image>
                            </view>
                        </view>
                    </swiper-item>
                    <swiper-item class="login_family">
                        <view class="swiper-item">
                            <input type="number" maxlength="11" placeholder="请输入手机号码" placeholder-class="placeholder_style" v-model="phoneNum" @blur="checkPhone"/>
                        </view>
                        <view class="swiper-item swiper-item-right">
                            <input type="number" placeholder="请输入短信验证码" placeholder-class="placeholder_style" v-model="smsCode" @blur="checkCode"/>
                            <view class="send" @tap="sendCode" v-if="!beginFalg">{{sendCodeText}}</view>
                            <view class="send" :class="[beginFalg ? ' beginClass':'']" v-if="beginFalg">{{timeText}}</view>
                        </view>
                    </swiper-item>
                </swiper>
                <view class="login_btn" @tap="login">登录</view>
            </view>
            <view class="login_onther">
                <checkbox-group @change="checkboxChange">
                    <label class="checkbox">
                        <checkbox class="checkboxItem" value="" :checked="remPwd.checked" :disabled="disable"/>
                        <view class="checkboxText" :class="[disable ? ' gred' : '']">
                            记住密码
                        </view>
                    </label>
                </checkbox-group>
                <view class="navigat">
                    <navigator url="/pages/register/register" animation-type="slide-in-right" hover-class="none">
                        <view class="register">注册</view>
                    </navigator>
                    <view class="line">|</view>
                    <navigator url="/pages/forgetPwd/forgetPwd" animation-type="slide-in-right" hover-class="none">
                        <view class="forget_pwd">忘记密码？</view>
                    </navigator>
                </view>
            </view>
		</view>
	</view>
</template>

<script>
    import cj from "@/common/crypto-js.js"
	export default {
		data() {
			return {
				index: 0,
                username: '',
                phoneNum: '',
                password: '',
                smsCode: '',
                userFalg: false,
                phoneFalg: false,
                codeFalg: false,
                pwdFalg: false,
                isShowPwd: true,
                sendCodeText: '发送验证码',
                timeText: '',
                num: 60,
                codeTime: '',
                beginFalg: false,
                userobj: {},
                imgObj: {},
                system: '',
                remPwd: {
                    checked: false
                },
                disable: false,
                userInfo: {},
                userValue: ''
			}
		},
        onShow(){
            // #ifdef APP-PLUS
            this.system = plus.os.name.toUpperCase();
            // #endif
            this.userValue = uni.getStorageSync('userValue');
            if (this.userValue) {
                this.username = this.userValue.userNameStr;
                this.password = this.userValue.userPwdStr;
                this.$set(this.remPwd, 'checked', this.userValue.pwdFlag)
            } else{
                this.username = '';
                this.password = '';
                this.$set(this.remPwd, 'checked', false)
            }
        },
		methods: {
			pwd(){
                this.index = 0;
                this.disable = false;
                if (this.userValue) {
                    this.username = this.userValue.userNameStr;
                    this.password = this.userValue.userPwdStr;
                    this.$set(this.remPwd, 'checked', this.userValue.pwdFlag)
                } else{
                    this.username = this.username;
                    this.password = this.password;
                    this.$set(this.remPwd, 'checked', false)
                }
            },
            code(){
                this.index = 1;
                this.disable = true;
                this.$set(this.remPwd, 'checked', false);
            },
            checkboxChange(e){
                let value = e.detail.value;
                if (value.length > 0) {
                    this.$set(this.remPwd, 'checked', true)
                } else{
                    this.$set(this.remPwd, 'checked', false)
                }
            },
            swiperChange(e){
                this.index = e.detail.current;
                this.disable = this.index == 0 ? false : true;
            },
            checkUser(){
                let phone_regExp = /^1[3-9]\d{9}$/;
                if (this.username != '' && phone_regExp.test(this.username)) {
                    this.userFalg = true;
                    return true
                } else {
                    uni.showToast({
                        title: '请检查手机号',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    this.userFalg = false;
                    return false
                }
            },
            checkPhone(){
                let phone_regExp = /^1[3-9]\d{9}$/;
                if (this.phoneNum != '' && phone_regExp.test(this.phoneNum)) {
                    this.phoneFalg = true;
                    return true
                } else {
                    uni.showToast({
                        title: '请检查手机号',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    this.phoneFalg = false;
                    return false
                }
            },
            checkPwd(){
                let pwd_regExp = /^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;
                if (this.password != '' && pwd_regExp.test(this.password)) {
                    this.pwdFalg = true;
                    return true
                } else {
                    uni.showToast({
                        title: '请输入6-15位的字母数字组合',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    this.pwdFalg = false;
                    return false
                }
            },
            checkCode(){
                if (this.smsCode != '') {
                    this.codeFalg = true;
                    return true
                } else {
                    this.codeFalg = false;
                    uni.showToast({
                        title: '验证码不能为空',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                }
            },
            showPass(){
                if (this.isShowPwd) {
                    this.isShowPwd = false;
                    return false
                } else {
                    this.isShowPwd = true;
                    return true
                }
            },
            login(){
                if (this.index === 0) {
                    if (this.checkUser() && this.checkPwd()) {
                        let pwdStr = cj.MD5(this.password).toString();
                        let nameStr = new Buffer(this.username).toString('base64');
                        uni.request({
                            url: this.websiteUrl + '/api/login',
                            method: 'POST',
                            data: {
                                mobile: nameStr,
                                userPwd: pwdStr
                            },
                            success: res => {
                                if (res.data && res.data.status === 0) {
                                    if (this.remPwd.checked) {
                                        this.userInfo = {
                                            userNameStr: this.username,
                                            userPwdStr: this.password,
                                            pwdFlag: this.remPwd.checked
                                        }
                                        uni.setStorageSync('userValue', this.userInfo);
                                    } else {
                                        uni.removeStorageSync('userValue');
                                    }
                                    let userData = res.data;
                                    let phonestr = new Buffer(userData.user.userPhone,'base64').toString('utf8');
                                    this.userobj.userPhone = phonestr;
                                    this.userobj.userName = userData.user.userNickName;
                                    this.userobj.userCode = userData.user.userInvite;
                                    this.userobj.userId = parseInt(userData.user.userId);
                                    this.userobj.loginToken = userData.token;
                                    if (userData.user.userBlurb == null) {
                                        this.userobj.userText = '';
                                    } else {
                                        this.userobj.userText = userData.user.userBlurb;
                                    }
                                    if (userData.user.userPortrait == '') {
                                        this.imgObj.networkImage = ''
                                        this.imgObj.localImage = '/static/touxiang.png';
                                        this.$store.commit('storeImage',this.imgObj);
                                        this.$store.commit('login',this.userobj);
                                        uni.navigateBack();
                                    } else {
                                        this.imgObj.networkImage = this.websiteUrl + '/' + userData.user.userPortrait;
                                        let that = this;
                                        let localImageSrc = that.$store.state.userImage.localImage;
                                        if (localImageSrc && localImageSrc != '' && localImageSrc != '/static/touxiang.png') {
                                            uni.removeSavedFile({
                                                filePath: localImageSrc,
                                                success:function(res){
                                                    console.log(res);
                                                }
                                            })
                                        }
                                        uni.downloadFile({
                                            url: that.imgObj.networkImage,
                                            success: function (res) {
                                                let tempFilePath = res.tempFilePath;
                                                let statusCode = res.statusCode;
                                                if (statusCode == 200) {
                                                    uni.saveFile({
                                                        tempFilePath: tempFilePath,
                                                        success: function (res) {
                                                            let savedFilePath = res.savedFilePath;
                                                            that.imgObj.localImage = savedFilePath;
                                                            that.$store.commit('storeImage',that.imgObj);
                                                            that.$store.commit('login',that.userobj);
                                                            uni.navigateBack();
                                                        }
                                                    })
                                                } else {
                                                    that.imgObj.localImage = '/static/touxiang.png';
                                                    that.$store.commit('storeImage',that.imgObj);
                                                    that.$store.commit('login',that.userobj);
                                                    uni.navigateBack();
                                                }
                                            }
                                        })
                                    }
                                } else {
                                    uni.showToast({
                                        title: res.data.message,
                                        icon:'none',
                                        mask: true
                                    });
                                    setTimeout(function(){
                                        uni.hideToast();
                                    },2000)
                                }
                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    } else {
                        return false
                    }
                } else{
                    if (this.checkPhone() && this.checkCode()) {
                        let phoneStr = new Buffer(this.phoneNum).toString('base64');
                        uni.request({
                            url: this.websiteUrl + '/api/loginsms',
                            method: 'POST',
                            data: {
                                mobile: phoneStr,
                                smsCode: this.smsCode
                            },
                            success: res => {
                                if (res.data && res.data.status === 0) {
                                    let userData = res.data;
                                    let phonestr = new Buffer(userData.user.userPhone,'base64').toString('utf8');
                                    this.userobj.userPhone = phonestr;
                                    this.userobj.userName = userData.user.userNickName;
                                    this.userobj.userCode = userData.user.userInvite;
                                    this.userobj.userId = parseInt(userData.user.userId);
                                    this.userobj.loginToken = userData.token;
                                    if (userData.user.userBlurb == null) {
                                        this.userobj.userText = '';
                                    } else {
                                        this.userobj.userText = userData.user.userBlurb;
                                    }
                                    if (userData.user.userPortrait == '') {
                                        this.imgObj.networkImage = ''
                                        this.imgObj.localImage = '/static/touxiang.png';
                                        this.$store.commit('storeImage',this.imgObj);
                                        this.$store.commit('login',this.userobj);
                                        uni.navigateBack();
                                    } else {
                                        this.imgObj.networkImage = this.websiteUrl + '/' + userData.user.userPortrait;
                                        let that = this;
                                        let localImageSrc = that.$store.state.userImage.localImage;
                                        if (localImageSrc && localImageSrc != ''  && localImageSrc != '/static/touxiang.png') {
                                            uni.removeSavedFile({
                                                filePath: localImageSrc
                                            })
                                        }
                                        uni.downloadFile({
                                            url: that.imgObj.networkImage,
                                            success: function (res) {
                                                let tempFilePath = res.tempFilePath;
                                                let statusCode = res.statusCode;
                                                if (statusCode == 200) {
                                                    uni.saveFile({
                                                        tempFilePath: tempFilePath,
                                                        success: function (res) {
                                                            let savedFilePath = res.savedFilePath;
                                                            that.imgObj.localImage = savedFilePath;
                                                            that.$store.commit('storeImage',that.imgObj);
                                                            that.$store.commit('login',that.userobj);
                                                            uni.navigateBack();
                                                        }
                                                    })
                                                } else {
                                                    that.imgObj.localImage = '/static/touxiang.png';
                                                    that.$store.commit('storeImage',that.imgObj);
                                                    that.$store.commit('login',that.userobj);
                                                    uni.navigateBack();
                                                }
                                            }
                                        })
                                    }
                                } else {
                                    uni.showToast({
                                        title: res.data.message,
                                        icon: 'none',
                                        mask: true
                                    });
                                    setTimeout(function(){
                                        uni.hideToast();
                                    },2000)
                                }
                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    } else {
                        return false
                    }
                }
            },
            sendCode(){
                let phone_regExp = /^1[3-9]\d{9}$/;
                if (this.phoneNum == '' || !phone_regExp.test(this.phoneNum)) {
                    uni.showToast({
                        title: '请检查手机号',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false;
                }
                this.codeTime = setInterval(this.countDown,1000);
                let phoneStr = new Buffer(this.phoneNum).toString('base64');
                uni.request({
                    url: this.websiteUrl + '/api/code/sms',
                    method: 'POST',
                    data: {
                        mobile: phoneStr
                    },
                    success: res => {
                        console.log(res)
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            countDown(){
                this.num--;
                this.beginFalg = true;
                this.timeText = this.num + 's';
                if (this.num <= 0) {
                    this.num = 60;
                    this.timeText = '';
                    this.beginFalg = false;
                    clearInterval(this.codeTime)
                }
            }
		}
	}
</script>

<style>
    .login{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #FFFFFF;
        margin-top: 130upx;
    }
    .login input{
        width: 100%;
    }
    .login_logo{
        width: 120upx;
        height: 148upx;
    }
    .login_logo>image{
        width: 120upx;
        height: 148upx;
    }
    .login_mode{
        width: 580upx;
        margin-top: 106upx;
        margin-bottom: 30upx;
        display: inline-flex;
        border-bottom: 2px solid rgba(36,138,223,0.5);
    }
    .login_pwd{
        flex: 1;
        width: 50%;
        height: 56upx;
        font-size: 30upx;
        line-height: 52upx;
        color: #248ADF;
        text-align: center;
        opacity: 0.5;
    }
    .login_pwd.selsctClass{
        opacity: 1;
    }
    .login_pwd.selsctClass>text{
        display: inline-block;
        height: 54upx;
        border-bottom:4upx solid #248ADF;
    }
    .login_code.selsctClass{
        opacity: 1;
    }
    .login_code.selsctClass>text{
        display: inline-block;
        height: 54upx;
        border-bottom:4upx solid #248ADF;
    }
    .login_code{
        width: 50%;
        height: 56upx;
        font-size: 30upx;
        line-height: 52upx;
        color: #248ADF;
        text-align: center;
        opacity: 0.5;
    }
    .placeholder_style{
        font-size:28upx;
        font-weight:400;
        color: #888888;
    }
    .login_family{
        width: 580upx;
    }
    .swiper-item{
        width: 100%;
        height: 46upx;
        margin-top: 72upx;
        border-bottom: 1px solid #CECECE;
    }
    .login_btn{
        width:580upx;
        height:80upx;
        margin-top: 50upx;
        line-height: 80upx;
        text-align: center;
        color: #FFFFFF;
        font-weight:400;
        font-family:PingFangSC-Regular;
        background:#248ADF;
        border-radius:8upx;
        font-size:36upx;
        opacity: 1;
    }
    /* .login_btn.btn_select{
        opacity: 1;
    } */
    .login_onther{
        width: 580upx;
        height: 30upx;
        margin-top: 48upx;
        line-height: 30upx;
        font-size: 28upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .navigat{
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
    }
    .forget_pwd{
        color: #666666;
    }
    .line{
        font-size: 22rpx;
        margin: 0 6px;
    }
    .register{
        color: #248ADF;
    }
    .swiper-item-right{
        display: inline-flex;
        justify-content: space-between;
    }
    .inputPwd{
        font-size: 19px !important;
    }
    .send{
        width: 50%;
        height: 46upx;
        line-height: 46upx;
        text-align: right;
        font-size:28upx;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#248ADF;
    }
    .send.beginClass{
        color:#888888;
    }
    .showHidePwd{
        height: 100%;
        padding: 0 30rpx;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
    }
    .hidePwd{
        width: 26upx;
        height: 12upx;
    }
    .showPwd{
        width: 31rpx;
        height: 23rpx;
    }
    .checkbox{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .checkboxItem{
        transform: scale(0.6);
        vertical-align: middle;
    }
    .checkboxText{
        font-size: 28rpx;
        color: #666666;
    }
    .gred{
        color: #CCCCCC;
    }
    /* checkbox .wx-checkbox-input {
    	border-radius: 50%;
    	圆角
    	width: 26upx;
    	背景的宽
    	height: 26upx;
    	背景的高
    	border: 1px solid #ccc;
    	background: #FFFFFF;
    } */
    
    /* .checkbox .wx-checkbox-input.wx-checkbox-input-checked {
    	background: #248ADF;
    	border: 1px solid #248ADF;
    } */
    
    /*checkbox选中后图标样式  */
    
    /* .checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
    	width: 26upx;
    	height: 26upx;
    	line-height: 26upx;
    	text-align: center;
    	font-size: 16upx;
    	color: #fff;
    	background: transparent;
    	transform: translate(-50%, -50%) scale(1);
    	-webkit-transform: translate(-50%, -50%) scale(1);
    } */
</style>
