<template>
	<view class="changeUser">
		<view class="userName">
		    <input type="text" v-model="username" maxlength="10" focus="true" placeholder-class="placeholder_style" placeholder="昵称最多十个字"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                username: ''
			}
		},
        methods:{
            checkName(){
                if (this.username === '') {
                    uni.showToast({
                        title: '昵称不能为空',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                } else{
                    return true
                }
            }
        },
        onLoad() {
            this.username = this.$store.state.userInfo.userName;
        },
        onNavigationBarButtonTap() {
            if (!this.checkName()) {
                return
            }
            let userinfo = this.$store.state.userInfo;
            let userid = userinfo.userId;
            let usertoken = userinfo.loginToken;
            uni.request({
                url: this.websiteUrl + '/api/user/updUnick',
                method: 'POST',
                header: {
                    Authorization: usertoken
                },
                data: {
                    userId: userid,
                    userNickName: this.username
                },
                success: res => {
                    if (res.data.status == 0) {
                        userinfo.userName = res.data.user.userNickName;
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
	}
</script>

<style>
    page{
        background: #F5F5F5;
    }
    .changeUser{
        padding: 30rpx 0 0;
    }
    .userName{
        width: 100%;
        background: #FFFFFF;
        height: 100rpx;
        padding-left: 30rpx;
        display: flex;
        align-items: center;
    }
    .userName>input{
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
