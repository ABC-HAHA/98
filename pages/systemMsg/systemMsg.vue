<template>
	<view class="system">
        <view class="" v-if="msgArr.length > 0">
            <view class="system-item" v-for="(item ,index) in msgArr" :key="index">
                <view class="system-item-title">{{item.msgTitle}}</view>
                <view class="system-item-time">{{item.timeDesc}}</view>
                <view class="system-item-content">{{item.msgContent}}</view>
            </view>
        </view>
		<view class="noMessage" v-if="hasMsg" :style="{height:style.contentViewHeight+'px'}">
		    <image src="/static/nosearch.png" mode=""></image>
		</view>
        <view class="noNetwork" v-if="hasNet" :style="{height:style.contentViewHeight+'px'}">
            <image src="/static/wangluo.png" mode=""></image>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deviceid: '',
                msgArr: [],
                hasMsg: true,
                hasNet: false,
                style: {
                	pageHeight: 0,
                	contentViewHeight: 0
                }
			}
		},
        onShow() {
            let deviceid = this.$store.state.deviceId;
            const res = uni.getSystemInfoSync();
            this.style.pageHeight = res.windowHeight;
            this.style.contentViewHeight = res.windowHeight; //像素
            uni.request({
                url: this.websiteUrl + '/api/sysmsg/list',
                method: 'GET',
                data: {
                    deviceId: deviceid
                },
                success: res => {
                    this.msgArr = res.data.list;
                    if (this.msgArr.length > 0) {
                        this.hasMsg = false;
                        this.hasNet = false;
                    } else{
                        this.hasMsg = true;
                        this.hasNet = false;
                    }
                },
                fail: () => {
                    this.hasMsg = false;
                    this.hasNet = true;
                },
                complete: (res) => {
                    if (res.data.count > 0) {
                        uni.request({
                            url: this.websiteUrl + '/api/sysmsg/upd',
                            method: 'POST',
                            data: {
                                deviceId: deviceid
                            },
                            success: res => {
                                console.log(res.data.message);
                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    }
                }
            });
        }
	}
</script>

<style>
    .system-item{
        padding: 30rpx 0 32rpx 0;
        border-bottom: 1px solid #E3E3E3;
    }
    .system-item-title{
        font-size: 30rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #2D2D2D;
        margin-bottom: 30rpx;
        margin-left: 48rpx;
    }
    .system-item-time{
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #666666;
        line-height: 36rpx;
        margin-bottom: 20rpx;
        margin-left: 30rpx;
    }
    .system-item-content{
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #666666;
        line-height: 36rpx;
        margin-left: 30rpx;
    }
    .noMessage{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .noMessage>image{
        width: 374rpx;
        height: 390rpx;
    }
    .noNetwork{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .noNetwork>image{
        width: 588rpx;
        height: 476rpx;
    }
</style>
