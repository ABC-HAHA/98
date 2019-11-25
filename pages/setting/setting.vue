<template>
	<view class="setting">
		<view class="setting-item" @tap="toSecurity">
            <view class="setting-item-text">账户与安全</view>
            <image class="setting-item-image" src="/static/jiantou.png" mode=""></image>
        </view>
        <view class="setting-item">
            <view class="setting-item-text">当前版本</view>
            <view class="setting-item-ctn">{{version}}</view>
        </view>
        <view class="setting-item" @tap="clearStorage">
            <view class="setting-item-text">清除缓存</view>
            <view class="setting-item-ctn">{{storageSize}}{{sizeClass}}</view>
        </view>
        <view class="setting-item">
            <view class="setting-item-text">允许非WiFi网络下缓存视频</view>
            <view class="">
                <switch :checked="isNetDown.checked" @change="network" color="#248ADF" style="transform: scale(0.7,0.7)"/>
            </view>
        </view>
        <view class="setting-item">
            <view class="setting-item-text">消息推送</view>
            <view class="">
                <switch :checked="isInfoPush.checked" @change="infoPush" color="#248ADF" style="transform: scale(0.7,0.7)"/>
            </view>
        </view>
        <view class="setting-item" @tap="toCode">
            <view class="setting-item-text">填写好友邀请码</view>
            <image class="setting-item-image" src="/static/jiantou.png" mode=""></image>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '1.0.0',
                storageSize: 0.3,
                sizeClass: 'KB',
                isNetDown: {checked:false},
                isInfoPush: {checked:true},
                allowObj: {},
                pushtObj: {}
			}
		},
		methods: {
			network(e){
                let value = e.target.value;
                let that = this;
                this.$set(this.isNetDown, 'checked', value);
                if (e.detail.value) {
                    uni.showModal({
                        title: '',
                        content: '温馨提示：开启后，运营商网络缓存可能会产生超额流量，确认开启？',
                        showCancel: true,
                        cancelText: '取消',
                        confirmText: '开启',
                        success: res => {
                            if (res.confirm) {
                                this.allowObj.status = 1;
                                that.$set(that.isNetDown, 'checked', true)
                                this.$store.commit('allowDown',this.allowObj)
                            } else {
                                this.allowObj.status = 0;
                                that.$set(that.isNetDown, 'checked', false)
                                this.$store.commit('allowDown',this.allowObj)
                            }
                        }
                    });
                } else {
                    this.allowObj.status = 0;
                    this.$store.commit('allowDown',this.allowObj)
                }
            },
            infoPush(e){
                let value = e.target.value;
                let that = this;
                this.$set(this.isInfoPush, 'checked', value);
                if (e.detail.value) {
                    this.pushtObj.status = 1;
                    this.$store.commit('allowPush',this.pushtObj)
                } else {
                    uni.showModal({
                        title: '',
                        content: '温馨提示：关闭后将无法及时接收到新消息推送，确认关闭？',
                        showCancel: true,
                        cancelText: '取消',
                        confirmText: '确定',
                        success: res => {
                            if (res.confirm) {
                                this.pushtObj.status = 0;
                                that.$set(that.isInfoPush, 'checked', false)
                                this.$store.commit('allowPush',this.pushtObj)
                            } else {
                                this.pushtObj.status = 1;
                                that.$set(that.isInfoPush, 'checked', true)
                                this.$store.commit('allowPush',this.pushtObj)
                            }
                        }
                    });
                }
            },
            toCode(){
                uni.navigateTo({
                    url:"/pages/inviteCode/inviteCode",
                    animationType:"slide-in-right"
                });
            },
            toSecurity(){
                if (!this.$store.state.isLogin) {
                    uni.navigateTo({
                        url:"/pages/login/login",
                        animationType:"slide-in-right"
                    });
                    return
                }
                uni.navigateTo({
                    url:"/pages/security/security",
                    animationType:"slide-in-right"
                });
            },
            clearStorage(){
                this.storageSize = '缓存已清除';
                this.sizeClass = '';
                uni.showToast({
                    title: '清除成功'
                })
                setTimeout(function() {
                    uni.hideToast()
                }, 600);
            }
		},
        onShow() {
            // #ifdef APP-PLUS
            this.version = plus.storage.getItem("app-id")
			Console.log(this.version)
            // #endif
            const storge = uni.getStorageInfoSync();
            this.storageSize = storge.currentSize;
            this.$set(this.isNetDown, 'checked', this.$store.state.isDown);
            this.$set(this.isInfoPush, 'checked', this.$store.state.isPush);
        }
	}
</script>

<style>
    page{
        background: #F5F5F5;
    }
    .setting{
        width: 100%;
    }
    .setting-item{
        height: 96rpx;
        margin: 0 auto 1px;
        padding: 0 40rpx 0 30rpx;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
    }
    .setting-item:nth-child(2){
        margin-bottom: 18rpx;
    }
    .setting-item:nth-child(5){
        margin-bottom: 18rpx;
    }
    .setting-item-text{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .setting-item-image{
        width: 16rpx;
        height: 30rpx;
    }
    .setting-item-ctn{
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #616161;
    }
</style>
