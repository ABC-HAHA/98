<template>
	<view class="edit">
		<view class="edit-item" @tap="upload">
            <view class="edit-item-text">修改头像</view>
            <image :src="user.userUrl" mode=""></image>
        </view>
        <view class="edit-item" @tap="toChangeName">
            <view class="edit-item-text">昵称</view>
            <view class="edit-item-text">{{user.userName}}</view>
        </view>
        <view class="edit-item">
            <view class="edit-item-text">手机号</view>
            <view class="edit-item-text">{{user.userPhone}}</view>
        </view>
        <view class="edit-item" @tap="toSign">
            <view class="edit-item-text">签名</view>
            <view class="edit-item-content">{{user.userContent}}</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                user: {
                    userName: '',
                    userPhone: '',
                    userContent: '',
                    userUrl: '/static/touxiang.png'
                }
                
			}
		},
		methods: {
            upload(){
                let that = this;
                let imageInfo = {};
                let userToken = this.$store.state.userInfo.loginToken;
                let userId = this.$store.state.userInfo.userId;
                uni.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    success(res) {
                        const tempFilePaths = res.tempFilePaths;
                        uni.uploadFile({
                            url: that.websiteUrl + '/api/user/uploadImage',
                            header:{
                                "Authorization": userToken
                            },
                            filePath: tempFilePaths[0],
                            name: 'file',
                            formData: {
                                'userId': userId
                            },
                            success: (res) => {
                                let data = JSON.parse(res.data);
                                let imageUrl = data.user.userPortrait;
                                imageInfo.networkImage = that.websiteUrl + '/' + imageUrl;
                                if (data.status == 0) {
                                    uni.downloadFile({
                                        url: that.websiteUrl + '/' + imageUrl,
                                        success: function (res) {
                                            let tempFilePath = res.tempFilePath;
                                            uni.saveFile({
                                                tempFilePath: tempFilePath,
                                                success: function (res) {
                                                    let savedFilePath = res.savedFilePath;
                                                    imageInfo.localImage = savedFilePath;
                                                    that.$store.commit('storeImage',imageInfo);
                                                    that.user.userUrl = savedFilePath;
                                                    uni.showToast({
                                                        title: '上传成功',
                                                        mask: true
                                                    });
                                                    setTimeout(function(){
                                                        uni.hideToast();
                                                    },2000)
                                                }
                                            })
                                        }
                                    })
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
                                        title: data.message,
                                        icon: 'none',
                                        mask: true
                                    });
                                    setTimeout(function(){
                                        uni.hideToast();
                                    },2000)
                                }
                            }
                        })
                    }
                })
            },
            toChangeName(){
                uni.navigateTo({
                    url: '/pages/changeName/changeName',
                    animationType: 'slide-in-right'
                });
            },
            toSign(){
                uni.navigateTo({
                    url: '/pages/autograph/autograph',
                    animationType: 'slide-in-right'
                });
            }
		},
        onShow() {
            this.$set(this.user,'userUrl',this.$store.state.userImage.localImage);
            this.$set(this.user,'userName',this.$store.state.userInfo.userName);
            this.$set(this.user,'userPhone',this.$store.state.userInfo.userPhone);
            this.$set(this.user,'userContent',this.$store.state.userInfo.userText);
            this.$set(this.user,'userContent',this.$store.state.userInfo.userText);
        }
	}
</script>

<style>
    page{
        background: #F5F5F5;
    }
    .edit{
        width: 100%;
        padding-top: 20rpx;
    }
    .edit-item{
        height: 104rpx;
        margin: 0 auto;
        padding: 0 80rpx 0 30rpx;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
    }
    .edit-item>image{
        width: 84rpx;
        height: 84rpx;
        border-radius: 50%;
    }
    .edit-item:nth-child(3){
        margin-bottom: 18rpx;
    }
    .edit-item-text{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .edit-item:last-child{
        height: 192rpx;
        align-items: flex-start;
        padding-top: 40rpx;
    }
    .edit-item:last-child>.edit-item-text{
        height: 40rpx;
        width: 112rpx;
    }
    .edit-item-content{
        margin-left: 116rpx;
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
</style>
