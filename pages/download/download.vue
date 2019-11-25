<template>
	<view>
		<view class="downLoad">
		    <view :class="[isCancel ? ' download':'']">
                <checkbox-group @change="checkboxChange">
                    <label class="checkbox" v-for="(item ,index) in downVideo" :key="index" :data-down="item.down" :data-index="index" :data-name="item.name" :data-str="item.size" :data-url="item.path" @tap="video">
                        <view class="selected" v-if="isCancel">
                            <checkbox :value="item.name" :checked="item.checked"/>
                        </view>
                        <view class="movie-image">
                            <image :src="item.pic" mode=""></image>
                        </view>
                        <view class="movie-info">
                            <view class="movie-info-name">{{item.name}}</view>
                            <view class="movie-info-size" v-if="!item.percent">{{item.size}}</view>
                            <view class="movie-info-size" v-if="item.percent">{{item.percent}}</view>
                        </view>
                    </label>
                </checkbox-group>
            </view>
            <view class="bottom-btn" v-if="isCancel">
                <view class="all-selsct" @tap="all_select">{{allSelect}}</view>
                <view class="line"></view>
                <view class="delete" @tap="deleteItem">删除({{num}})</view>
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCancel: false,
                downVideo: [],
                index: 0,
                timer: null,
                num: 0,
                isSelect: false,
                allSelect: '全选',
                selectedId: 0,
                selectedArr: []
			}
		},
		methods: {
            creatView(){
                // #ifdef APP-PLUS
                let view = null;
                view = new plus.nativeObj.View('control', {
                    top:'0px',left:'0px',height:'44px',width:'100%'
                }, [
                    {
                        tag:'rect',id:'rect',position:{top:'0px',left:'0px',width:'100%',height:'44px'},rectStyles:{color:'rgba(0,0,0,0.5)'}
                    },
                    {
                        tag:'img',id:'img',src:'static/fanhui.png',position:{top:'14px',left:'15px',width:'17px',height:'17px'}
                    }
                ]);
                view.show()
                this.listenerEvent(view);
                // #endif
            },
            listenerEvent(view){
            	view.setTouchEventRect({top:'0',left:'0',width:'87px',height:'44px'});
            	view.addEventListener("click", function(e){
            		console.log("点击原生控件："+JSON.stringify(e));
            	}, false);
            },
            creatVideoPlay(src){
                // #ifdef APP-PLUS
                let player = null;
                player = plus.video.createVideoPlayer('localVideo', {
                    'src': src,
                    'autoplay': 'true',
                    'show-fullscreen-btn': 'false',
                    'position': 'absolute'
                })
                player.requestFullScreen(-90)
                plus.webview.currentWebview().append(player);
                player.addEventListener('fullscreenchange',function(){
                    player.close()
                },false)
                // #endif
            },
            video(e){
                if (!this.isCancel) {
                    // #ifdef APP-PLUS
                    let systemName = plus.os.name.toUpperCase();
                    let videoStr = e.currentTarget.dataset.str;
                    let videoName = e.currentTarget.dataset.name;
                    let videoUrl = e.currentTarget.dataset.url;
                    let videoIndex = parseInt(e.currentTarget.dataset.index);
                    let videoDown = parseInt(e.currentTarget.dataset.down);
                    let that = this;
                    if (videoStr.indexOf('个') != -1) {
                        uni.navigateTo({
                            url: '/pages/download/video/video?name=' + videoName,
                            animationType: 'slide-in-right'
                        });
                    } else if (videoStr.indexOf('%') != -1) {
                        switch ( systemName ){
                            case "ANDROID":
                                if (videoDown == 1) {
                                    let pause = plus.android.newObject('com.tjyz.video.download.DownloadTask');
                                    plus.android.invoke(pause, 'pauseDownload');
                                    clearInterval(this.timer);
                                    this.$set(this.downVideo[videoIndex],'percent','已暂停');
                                    this.$set(this.downVideo[videoIndex],'down','0');
                                } else {
                                    let down = plus.android.newObject('com.tjyz.video.download.TS');
                                    plus.android.invoke(down, 'getTSFile','',videoName,'');
                                    this.timer = setInterval(function (){
                                        that.polling(videoIndex);
                                    },1500);
                                    this.$set(this.downVideo[videoIndex],'down','1');
                                }
                                break;
                            case "IOS":
                                /* uni.navigateTo({
                                    url: '/pages/download/videoPlay/videoPlay',
                                    animationType: 'slide-in-right'
                                }); */
                                break;
                            default:
                                break;
                        }
                    } else {
                        switch ( systemName ){
                            case "ANDROID":
                                // this.creatView();
                                this.creatVideoPlay(videoUrl);
                                break;
                            case "IOS":
                                /* uni.navigateTo({
                                    url: '/pages/download/videoPlay/videoPlay',
                                    animationType: 'slide-in-right'
                                }); */
                                break;
                            default:
                                break;
                        }
                    }
                    // #endif
                }
            },
            polling(i){
                // #ifdef APP-PLUS
                let systemName = plus.os.name.toUpperCase();
                var videoName = this.downVideo[i].name;
                var videoNum = '';
                switch ( systemName ){
                    case "ANDROID":
                        let poll = plus.android.newObject('com.tjyz.video.download.VideoUtils');
                        let percent = plus.android.invoke(poll, 'getProgress', videoName, videoNum);
                        this.$set(this.downVideo[i],'percent',percent);
                        if (percent.indexOf('B') != -1) {
                            clearInterval(this.timer);
                            this.$set(this.downVideo[i],'size',percent);
                        }
                        break;
                    case "IOS":
                        /* uni.navigateTo({
                            url: '/pages/download/videoPlay/videoPlay',
                            animationType: 'slide-in-right'
                        }); */
                        break;
                    default:
                        break;
                }
                // #endif
            },
            checkboxChange(e){
                let downItems = this.downVideo,
                    values = e.detail.value;
                this.num = values.length;
                this.selectedArr = values;
                for (var i = 0, lenI = downItems.length; i < lenI; ++i) {
                    const downItem = downItems[i];
                    const downName = downItem.name;
                    if(values.includes(downName)){
                        this.$set(downItem,'checked',true)
                    }else{
                        this.$set(downItem,'checked',false)
                    }
                }
                if (this.num < downItems.length) {
                    this.allSelect = '全选';
                } else {
                    this.allSelect = '取消全选';
                }
            },
            all_select(){
                let downItems = this.downVideo
                if (this.isSelect) {
                    if (this.num < this.downVideo.length) {
                        this.num = this.downVideo.length;
                        this.selectedArr = [];
                        for (var i = 0, lenI = downItems.length; i < lenI; ++i) {
                            const downItem = downItems[i]
                            this.$set(downItem,'checked',true)
                            this.selectedArr.push(downItem.name)
                        }
                        this.allSelect = '取消全选';
                        return
                    }
                    for (var i = 0, lenI = downItems.length; i < lenI; ++i) {
                        const downItem = downItems[i]
                        this.$set(downItem,'checked',false)
                    }
                    this.num = 0;
                    this.isSelect = false;
                    this.allSelect = '全选';
                    this.selectedArr = [];
                } else {
                    this.selectedArr = [];
                    for (var i = 0, lenI = downItems.length; i < lenI; ++i) {
                        const downItem = downItems[i]
                        this.$set(downItem,'checked',true)
                        this.selectedArr.push(downItem.name)
                    }
                    this.num = downItems.length;
                    this.isSelect = true;
                    this.allSelect = '取消全选';
                }
            },
            deleteItem(){
                let systemName = plus.os.name.toUpperCase();
                let videoArr = JSON.stringify(this.selectedArr);
                let videoIndex = '';
                switch ( systemName ){
                    case "ANDROID":
                        let deleteFun = plus.android.newObject('com.tjyz.video.download.VideoUtils');
                        plus.android.invoke(deleteFun, 'deleteFile', videoArr, videoIndex);
                        var video = plus.android.newObject('com.tjyz.video.download.VideoUtils');
                        var videoList = plus.android.invoke(video,'downloadList');
                        this.downVideo = JSON.parse(videoList);
                        // #ifdef APP-PLUS
                        var webView = this.$mp.page.$getAppWebview();
                        webView.setStyle({titleNView:{autoBackButton: true}});
                        webView.setTitleNViewButtonStyle(0, {  
                            text: '编辑'
                        });
                        this.isCancel = false;
                        // #endif
                        break;
                    case "IOS":
                        /* uni.navigateTo({
                            url: '/pages/download/videoPlay/videoPlay',
                            animationType: 'slide-in-right'
                        }); */
                        break;
                    default:
                        break;
                }
            }
		},
        onNavigationBarButtonTap() {
            // #ifdef APP-PLUS
            var webView = this.$mp.page.$getAppWebview();
            let systemName = plus.os.name.toUpperCase();
            if (this.isCancel) {
                webView.setStyle({titleNView:{autoBackButton: true}});
                webView.setTitleNViewButtonStyle(0, {  
                    text: '编辑'
                });
                this.isCancel = false;
                this.num = 0;
                this.isSelect = false;
                this.allSelect = '全选';
                for (var i = 0, lenI = this.downVideo.length; i < lenI; ++i) {
                    const downItem = this.downVideo[i]
                    this.$set(downItem,'checked',false)
                }
            } else{
                webView.setStyle({titleNView:{autoBackButton: false}});
                webView.setTitleNViewButtonStyle(0, {
                    text: '取消'
                });
                this.isCancel = true;
                switch ( systemName ){
                    case "ANDROID":
                        for (let i = 0; i < this.downVideo.length; i++) {
                            this.downVideo[i]
                            if (this.downVideo[i].down == 1) {
                                let pause = plus.android.newObject('com.tjyz.video.download.DownloadTask');
                                plus.android.invoke(pause, 'pauseDownload');
                                clearInterval(this.timer);
                                this.$set(this.downVideo[i],'percent','已暂停');
                                this.$set(this.downVideo[i],'down','0');
                            }
                        }
                        break;
                    case "IOS":
                        /* uni.navigateTo({
                            url: '/pages/download/videoPlay/videoPlay',
                            animationType: 'slide-in-right'
                        }); */
                        break;
                    default:
                        break;
                }
            }
            // #endif
        },
        onShow() {
            // #ifdef APP-PLUS
            let systemName = plus.os.name.toUpperCase();
            let that = this;
            if (systemName === 'ANDROID') {
                var video = plus.android.newObject('com.tjyz.video.download.VideoUtils');
                var videoList = plus.android.invoke(video,'downloadList');
                /* var video = plus.android.importClass('com.tjyz.download.VideoUtils');
                var down = new video();
                var videoList = down.downloadList(); */
                this.downVideo = JSON.parse(videoList);
                for (let i = 0; i < this.downVideo.length; i++) {
                    if (this.downVideo[i].down == 1) {
                        this.index = i;
                        this.timer = setInterval(function (){
                            that.polling(that.index);
                        },1500);
                        break;
                    }
                }
            } else if (systemName === IOS) {
                
            }
            // #endif
        },
        onUnload() {
            clearInterval(this.timer);
        },
        onHide() {
            clearInterval(this.timer);
        }
	}
</script>

<style>
    
	checkbox .wx-checkbox-input {
		border-radius: 50%;
		/* 圆角 */
		width: 40upx;
		/* 背景的宽 */
		height: 40upx;
		/* 背景的高 */
		border: 1px solid #ccc;
		background: #FFFFFF;
	}

	.checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #248ADF;
		border: 1px solid #248ADF;
	}
	
	/*checkbox选中后图标样式  */
	
	.checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		font-size: 30upx;
		color: #fff;
		background: transparent;
		transform: translate(-50%, -50%) scale(1);
		-webkit-transform: translate(-50%, -50%) scale(1);
	}   
    
    .checkbox{
        width: 94%;
        display: flex;
        align-items: center;
        margin: 40rpx 0 40rpx 30rpx;
    }
    
    .download{
        margin-bottom: 120upx;
    }
    .movie-image{
        width: 260rpx;
        height: 164rpx;
        margin: 0 20upx;
        border-radius: 20rpx;
        background: url(~@/static/334.png) 0upx 0upx/260upx 164upx no-repeat;
    }
    .movie-image>image{
        width: 260rpx;
        height: 164rpx;
        border-radius: 20rpx;
    }
    .movie-info{
        height: 140rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .movie-info-name{
        font-size: 30rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #2D2D2D;
    }
    .movie-info-size{
        font-size: 26rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color:#999999;
    }
    .bottom-btn{
        width: 100%;
        height: 100upx;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #C1C1C1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        background: #FFFFFF;
    }
    .all-selsct{
        width: 50%;
        height: 100%;
        line-height: 100upx;
        text-align: center;
        font-size:28upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#1C1D1D;
    }
    .line{
        width: 2px;
        height: 20upx;
        background: #C1C1C1;
    }
    .delete{
        width: 50%;
        height: 100%;
        line-height: 100upx;
        text-align: center;
        font-size:28upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#D8255D;
    }
</style>
