<template>
	<view class="signPage">
		<view class="sign">
		    <textarea v-model="content" placeholder="签名最多200个字" maxlength="200" focus="true" placeholder-class="placeholder_style"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                content: ''
			}
		},
        onLoad() {
            this.content = this.$store.state.userInfo.userText;
        },
        onNavigationBarButtonTap() {
            let userinfo = this.$store.state.userInfo;
            let userid = userinfo.userId;
            let usertoken = userinfo.loginToken;
            uni.request({
                url: this.websiteUrl + '/api/user/updBlurb',
                method: 'POST',
                header: {
                    Authorization: usertoken
                },
                data: {
                    userId: userid,
                    userBlurb: this.content
                },
                success: res => {
                    if (res.data.status == 0) {
                        userinfo.userText = res.data.user.userBlurb;
                        this.$store.commit('login',userinfo);
                        uni.showToast({
                            title: '保存成功',
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
	}
</script>

<style>
    page{
        background: #F5F5F5;
    }
    .signPage{
        padding: 30rpx 0 0;
    }
    .sign{
        background: #FFFFFF;
        padding: 30rpx;
        height: 260rpx;
    }
    .sign>textarea{
        width: 100%;
        height: 100%;
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #222222;
    }
    .placeholder_style{
        font-size:28upx;
        font-weight:400;
        color: #888888;
    }
</style>
