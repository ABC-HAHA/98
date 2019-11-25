<template>
	<view class="phone">
		<view class="phone-text">手机号修改后下次登陆您需要用新手机号登陆。</view>
		<view class="phone-old">
            <view class="phone-old-num">{{phone}}</view>
            <view class="phone-old-btn" v-if="!beginFalg" @tap="sendCode">获取验证码</view>
            <view class="phone-old-btn" :class="[beginFalg ? ' beginClass':'']" v-if="beginFalg">{{timeText}}</view>
        </view>
		<view class="phone-code">
            <view class="phone-code-text">验证码</view>
            <input type="number" v-model="codeText" maxlength="11" placeholder="请输入验证码" placeholder-class="placeholder-style"/>
        </view>
		<view class="phone-new">
            <view class="phone-new-num">新手机号</view>
            <input type="number" v-model="newPhone" maxlength="11" placeholder="请输入新手机号" placeholder-class="placeholder-style"/>
        </view>
		<view class="finish" @tap="confirm">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                num: 60,
                countdown: '',
                beginFalg: false,
                codeTime: '',
                timeText: '',
                codeText: '',
                newPhone: ''
			}
		},
		methods: {
			sendCode(){
			    let phone_regExp = /^1[3-9]\d{9}$/;
			    if (this.phone == '' || !phone_regExp.test(this.phone)) {
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
			    let phoneStr = new Buffer(this.phone).toString('base64');
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
			},
            checkCode(){
                if (this.codeText != '') {
                    return true
                } else {
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
            checkPhone(){
                let phone_regExp = /^1[3-9]\d{9}$/;
                if (this.newPhone != '' && phone_regExp.test(this.newPhone)) {
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
                    return false
                }
            },
            confirm(){
                if (this.checkCode() && this.checkPhone()) {
                    uni.showModal({
                        title: '确认手机号',
                        content: '确认要将手机号修改为' + this.newPhone,
                        showCancel: true,
                        cancelText: '取消',
                        confirmText: '确定',
                        success: res => {
                            if (res.confirm) {
                                let userinfo = this.$store.state.userInfo;
                                let userid = userinfo.userId;
                                let usertoken = userinfo.loginToken;
                                let oldPhoneStr = new Buffer(this.phone).toString('base64');
                                let newPhoneStr = new Buffer(this.newPhone).toString('base64');
                                uni.request({
                                    url: this.websiteUrl + '/api/user/updMobile',
                                    method: 'POST',
                                    header:{
                                        Authorization: usertoken
                                    },
                                    data: {
                                        userId: userid,
                                        mobile: oldPhoneStr,
                                        smsCode: this.codeText,
                                        newMobile: newPhoneStr
                                    },
                                    success: res => {
                                        if (res.data.status == 0) {
                                            let phonestr = new Buffer(res.data.user.userPhone,'base64').toString('utf8');
                                            userinfo.userPhone = phonestr;
                                            this.$store.commit('login',userinfo);
                                            uni.showToast({
                                                title: '修改成功',
                                                mask: true
                                            });
                                            setTimeout(function(){
                                                uni.hideToast();
                                                uni.navigateBack();
                                            },400)
                                        } else if (res.data.status == 1001) {
                                            uni.showToast({
                                                title: res.data.message,
                                                icon: 'none',
                                                mask: true
                                            });
                                            setTimeout(function () {
                                                uni.hideToast();
                                                uni.navigateTo({
                                                    url:"/pages/login/login",
                                                    animationType:"slide-in-right"
                                                });
                                            }, 300)
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
        computed:{
            phone: function () {
                return this.$store.state.userInfo.userPhone;
            }
        }
	}
</script>

<style>
    .placeholder-style{
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #949494;
    }
    .phone{
        padding: 36rpx 48rpx 0 46rpx;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .phone-text{
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #616161;
        margin-bottom: 30rpx;
    }
    .phone-old{
        width: 100%;
        height: 110rpx;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .phone-old-num{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .phone-old-btn{
        font-size: 24rpx;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: #248ADF;
    }
    .phone-old-btn.beginClass{
        color:#888888;
    }
    .phone-code{
        width: 100%;
        height: 110rpx;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .phone-code-text{
        width: 50%;
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .phone-code>input{
        text-align: right;
    }
    .phone-new{
        width: 100%;
        height: 110rpx;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .phone-new-num{
        width: 50%;
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .phone-new>input{
        text-align: right;
    }
    .finish{
        width: 654rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        color: #FFFFFF;
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        margin-top: 100rpx;
        background: #248ADF;
        border-radius: 8rpx;
    }
</style>
