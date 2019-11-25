<template>
	<view class="security">
		<view class="security-item" @tap="toChangePhone">
		    <view class="security-item-text">修改手机号</view>
		    <image class="security-item-image" src="/static/jiantou.png" mode=""></image>
		</view>
        <view class="security-item" @tap="toChangePwd">
            <view class="security-item-text">修改密码</view>
            <image class="security-item-image" src="/static/jiantou.png" mode=""></image>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
            toChangePhone(){
                uni.navigateTo({
                    url:"/pages/changePhone/changePhone",
                    animationType:"slide-in-right"
                });
            },
			toChangePwd(){
                uni.navigateTo({
                    url:"/pages/changePwd/changePwd",
                    animationType:"slide-in-right"
                });
            }
		}
	}
</script>

<style>
    page{
        background: #F5F5F5;
    }
    .security{
        width: 100%;
        padding-top: 20rpx;
    }
    .security-item{
        height: 96rpx;
        margin: 0 auto 1px;
        padding: 0 40rpx 0 30rpx;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
    }
    .security-item-text{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #282828;
    }
    .security-item-image{
        width: 16rpx;
        height: 30rpx;
    }
</style>
