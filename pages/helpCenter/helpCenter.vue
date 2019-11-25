<template>
	<view>
		<view class="help" data-id="1" @tap="showMore" :class="[tapId == '1' ? ' tapOne' : '']">
            <view class="help-item">
                <view class="help-item-text">1.无法播放视频</view>
                <image src="/static/xiajiantou.png" mode=""></image>
            </view>
            <view class="help-content">
                <view class="help-content-text">如果出现某些视频无法播放，包含一直缓冲、闪退、网络异常,请尝试多打开几次，如果还是无法播放，请点击“我要反馈”把问题告诉我们，我们会尽快解决，谢谢！</view>
            </view>
        </view>
        <view class="help" data-id="2" @tap="showMore" :class="[tapId == '2' ? ' tapOne' : '']">
            <view class="help-item">
                <view class="help-item-text">2.无法下载视频</view>
                <image src="/static/xiajiantou.png" mode=""></image>
            </view>
            <view class="help-content">
                <view class="help-content-text">如果出现某些视频无法下载，请检查当前是否处于联网状态，如果网络状态良好仍然无法下载，请点击“我要反馈”把问题告诉我们，我们会尽快解决，谢谢！</view>
            </view>
        </view>
        <view class="help" data-id="3" @tap="showMore" :class="[tapId == '3' ? ' tapOne' : '']">
            <view class="help-item">
                <view class="help-item-text">3.搜不到想看的视频</view>
                <image src="/static/xiajiantou.png" mode=""></image>
            </view>
            <view class="help-content">
                <view class="help-content-text">由于视频资源有限，当前的搜不到的资源会在后续慢慢添加，请耐心等待，如果还有其他问题，请点击“我要反馈”把问题告诉我们，我们会尽快解决，谢谢！</view>
            </view>
        </view>
        <view class="toFeed" @tap="toFeed">我要反馈</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tapId: 1
			}
		},
		methods: {
            showMore(e){
                this.tapId = e.currentTarget.dataset.id;
            },
			toFeed(){
                uni.navigateTo({
                    url: '/pages/feedback/feedback',
                    animationType: 'slide-in-right'
                });
            }
		}
	}
</script>

<style>
    .help{
        width: 100%;
        height: 100rpx;
        border-bottom: 1px solid #E3E3E3;
        transition: height 0.5s;
        overflow: hidden;
    }
    .help.tapOne{
        height: 310rpx
    }
    .help-item{
        width: 690rpx;
        height: 100rpx;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .help-item-text{
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
    }
    .help-item>image{
        width: 30rpx;
        height: 16rpx;
        transition: transform 0.3s;
    }
    .help.tapOne image{
        transform: rotate(-180deg);
    }
    .help-content{
        width: 100%;
        height: 208rpx;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .help-content-text{
        width: 675rpx;
        font-size: 26rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #666666;
        line-height: 36rpx;
    }
    .toFeed{
        width: 100%;
        height: 80rpx;
        background: #248ADF;
        color: #FFFFFF;
        line-height: 80rpx;
        text-align: center;
        font-size: 30rpx;
        position: fixed;
        z-index: 3;
        left: 0;
        bottom: 0;
    }
</style>
