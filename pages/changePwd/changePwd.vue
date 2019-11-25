<template>
	<view>
		<view class="changePwd">
            <view class="changePwd-text">
                修改登陆密码，修改后下次登陆您需要用新密码登陆
            </view>
            <view class="changePwd-old">
                <view class="changePwd-old-pwd">旧密码</view>
                <view class="changePwd-old-input">
                    <input type="text" :style="{'font-size':system == 'IOS' ? '8px;' : '20px'}" v-model="oldPwd" password="true" maxlength="15" placeholder="请输入旧密码" placeholder-class="placeholder_style" @blur="checkOld"/>
                </view>
            </view>
            <view class="changePwd-new">
                <view class="changePwd-new-pwd">新密码</view>
                <view class="changePwd-new-input">
                    <input type="text" :style="{'font-size':system == 'IOS' ? '8px;' : '20px'}" v-model="newPwd" password="true" maxlength="15" placeholder="请输入新密码" placeholder-class="placeholder_style" @blur="checkNew"/>
                </view>
            </view>
            <view class="changePwd-comfire">
                <view class="changePwd-comfire-pwd">确认新密码</view>
                <view class="changePwd-comfire-input">
                    <input type="text" :style="{'font-size':system == 'IOS' ? '8px;' : '20px'}" v-model="comfirePwd" password="true" maxlength="15" placeholder="请再次输入新密码" placeholder-class="placeholder_style" @blur="checkComfire"/>
                </view>
            </view>
            <view class="changePwd-content">
                密码必须6~12个字符，而且同时包含字母和数字。
            </view>
            <view class="changePwd-btn" @tap="submit">
                确认修改
            </view>
        </view>
	</view>
</template>

<script>
    import cj from "@/common/crypto-js.js"
	export default {
		data() {
			return {
				oldPwd: '',
                newPwd: '',
                comfirePwd: '',
                system: ''
			}
		},
        onShow(){
            // #ifdef APP-PLUS
            this.system = plus.os.name.toUpperCase();
            // #endif
        },
		methods: {
            checkOld(){
                if (this.oldPwd != '') {
                    this.oldFalg = true;
                    return true
                } else {
                    this.oldFalg = false;
                    uni.showToast({
                        title: '原密码不能为空',
                        icon: "none",
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                }
            },
			checkNew(){
                let pwd_regExp = /^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;
                if (this.newPwd != '' && pwd_regExp.test(this.newPwd)) {
                    this.newFlag = true;
                    return true
                } else {
                    this.newFlag = false;
                    uni.showToast({
                        title: '请输入6-15位的字母数字组合',
                        icon: "none",
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                }
            },
            checkComfire(){
                if (this.comfirePwd != '' && this.newPwd === this.comfirePwd) {
                    this.comfireFalg = true;
                    return true
                } else {
                    this.comfireFalg = false;
                    uni.showToast({
                        title: '两次密码必须相同',
                        icon: "none",
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                }
            },
            submit(){
                if (this.checkOld() && this.checkNew() && this.checkComfire()) {
                    let oldPwdStr = cj.MD5(this.oldPwd).toString();
                    let newPwdCofStr = cj.MD5(this.newPwd).toString();
                    let okPwdCofStr = cj.MD5(this.comfirePwd).toString();
                    let tokenStr = this.$store.state.userInfo.loginToken;
                    uni.request({
                        url: this.websiteUrl + '/api/user/upd',
                        method: 'POST',
                        header: {
                            'Authorization': tokenStr
                        },
                        data: {
                            oldUserPwd: oldPwdStr,
                            userPwd: newPwdCofStr,
                            confirmUserPwd: okPwdCofStr 
                        },
                        success: res => {
                            if (res.data && res.data.status === 0) {
                                uni.showToast({
                                    title: '修改成功',
                                    mask: true
                                });
                                setTimeout(function () {
                                    uni.hideToast();
                                    uni.redirectTo({
                                         url: "/pages/login/login",
                                         animationType: "slide-in-left"
                                     });
                                },1600)
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
                                    icon: "none",
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
                } else{
                    return false;
                }
            }
		}
	}
</script>

<style>
    .changePwd{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35rpx;
    }
    .changePwd-text{
        width: 100%;
        text-align: center;
        font-size: 24rpx;
        color: #616161;
    }
    .changePwd-old{
        width: 655rpx;
        height: 80rpx;
        border-bottom: 1px solid #E5E5E5;
        margin-top: 70rpx;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .changePwd-old-pwd{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .changePwd-old-input{
        width: 436rpx;
    }
    .changePwd-new{
        width: 655rpx;
        height: 80rpx;
        border-bottom: 1px solid #E5E5E5;
        margin-top: 44rpx;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .changePwd-new-pwd{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .changePwd-new-input{
        width: 436rpx;
    }
    .changePwd-comfire{
        width: 655rpx;
        height: 80rpx;
        border-bottom: 1px solid #E5E5E5;
        margin-top: 44rpx;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .changePwd-comfire-pwd{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .changePwd-comfire-input{
        width: 436rpx;
    }
    .changePwd-content{
        width: 655rpx;
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #616161;
        text-align: left;
        margin-top: 64rpx;
    }
    .changePwd-btn{
        width: 655rpx;
        height: 80rpx;
        line-height: 80rpx;
        margin-top: 98rpx;
        text-align: center;
        background: #248ADF;
        color: #FFFFFF;
        border-radius: 8rpx;
        font-size: 30rpx;
        opacity: 1;
    }
    .placeholder_style{
        font-size: 28upx;
        font-weight: 400;
        color: #888888;
    }
</style>
