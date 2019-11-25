<template>
	<view class="invite">
		<view class="invite-item">
            <textarea v-model="code" :disabled="disabled" :placeholder="placeholder" placeholder-class="placeholder_style"/>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                code: '',
                disabled: false,
                placeholder: '填写您的好友邀请码',
                codeToken: ''
			}
		},
        onNavigationBarButtonTap(){
            if (!this.$store.state.isLogin) {
                uni.navigateTo({
                    url: '/pages/login/login',
                    animationType: 'slide-in-bottom'
                });
                return
            }
            this.codeToken = this.$store.state.userInfo.loginToken;
            uni.request({
                url: this.websiteUrl + '/api/shareupd/code/' + this.code,
                method: 'POST',
                header: {
                    Authorization: this.codeToken
                },
                data: {},
                success: res => {
                    if (res.data.status === 0) {
                        this.disabled = true;
                        this.code = '';
                        this.placeholder = '您已填写，邀请码只能填写一次'
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
    .invite{
        width: 100%;
        padding-top: 30rpx;
    }
    .invite-item{
        width: 88%;
        height: 230rpx;
        margin: 0 auto;
        padding: 32rpx 16rpx;
        background: #FFFFFF;
    }
    .invite-item>textarea{
        width: 100%;
        height: 100%;
        font-size:32upx;
    }
    .placeholder_style{
        font-size:32upx;
        font-weight:400;
        color: #888888;
    }
</style>
