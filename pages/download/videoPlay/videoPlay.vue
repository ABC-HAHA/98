<template>
	<view class="video">
        <view class="videoBox" @tap="showBack">
            <view class="goBack" @tap="quit" :class="[showflag ? ' show' : '']">
                <image src="/static/fanhui.png" mode=""></image>
            </view>
            <video id="localVideo" class="playVideo" :src="videoUrl" autoplay="true">
                <!-- <cover-image class="goBack" @tap="quit" src="/static/fanhui.png"></cover-image> -->
            </video>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// videoSrc: 'file:///storage/emulated/0/com.tjyz.98video/download/video/龙凤斗.ts',
                videoUrl: 'http://47.98.171.179:8080/test1/kEzXGr5591023.mp4',
                showflag: false
			}
		},
		methods: {
			quit(){
                //#ifdef APP-PLUS
                plus.screen.lockOrientation('portrait-primary');
                //#endif
                uni.navigateBack();
            },
            showBack(){
                this.showflag = this.showflag ? false : true;
            }
		},
        onReady() {
            // #ifdef APP-PLUS
            let videoPlayer = plus.video.getVideoPlayerById('localVideo');
            videoPlayer.setStyles({
                'show-fullscreen-btn': false
            })
            // #endif
        },
        onShow: function (res) {
            //#ifdef APP-PLUS
            plus.screen.lockOrientation('landscape-primary');
            //#endif
        },
        onBackPress() {
            //#ifdef APP-PLUS
            plus.screen.lockOrientation('portrait-primary');
            //#endif
        }
	}
</script>

<style>
    page, .video{
        width: 100%;
        height: 100%;
    }
    .videoBox{
        width: 100%;
        height: 100%;
    }
    .goBack{
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        position: absolute;
        top: -44px;
        left: 0;
        z-index: 2048;
        background: rgba(0, 0, 0, 0.5);
        transition: top 0.5s;
    }
    .goBack.show{
        top: 0;
    }
    .goBack>image{
        width: 20px;
        height: 20px;
        margin-left: 15px;
    }
    .playVideo{
        width: 100%;
        height: 100%;
    }
</style>
