<template>
	<view class="uni-navbar" :class="{'uni-navbar-fixed':isFixed,'uni-navbar-shadow':hasShadow}" :style="{'background-color':backgroundColor}">
		<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
		<view class="uni-navbar-header" :style="{color:color}">
			<view class="uni-navbar-header-btns" @tap="onClickLeft">
				<!-- <view v-if="leftIcon.length">
					<uni-icon :type="leftIcon" :color="color" size="24"></uni-icon>
				</view>
				<view v-if="leftText.length" class="uni-navbar-btn-text" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}">{{leftText}}</view>
				<slot name="left"></slot> -->
                <view class="uni-card-media-logo">
                	<image src="/static/logo.png" mode=""></image>
                </view>
			</view>
			<view class="uni-navbar-container">
				<view class="uni-navbar-container-title" @tap="toSearch">
					<!-- <uni-icon type="search" color="#248ADF" size="20"></uni-icon> -->
                    <image src="/static/sousuo.png" mode=""></image>
					<text>{{title}}</text>
				</view>
				<!-- 标题插槽 -->
				<slot></slot>
			</view>
			<view class="uni-navbar-header-btns" @tap="onClickRight"  v-if="!barFalg">
				<view class="" @tap="downLoad">
					<image src="/static/xiazai.png" mode="" class="image"></image>
				</view>
				<view class="" @tap="playHistory">
					<image src="/static/lishijilu.png" mode="" class="image"></image>
				</view>
                <!-- <view v-if="rightIcon.length">
                    <uni-icon :type="rightIcon" :color="color" size="24"></uni-icon>
                </view>
                优先显示图标 
                <view v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text">{{rightText}}</view>
                <slot name="right"></slot> -->
            </view>
            <view class="uni-navbar-btns" v-if="barFalg" @tap="toAll">
                <image src="/static/shaixuan.png" mode=""></image>
                <view class="btns-text">筛选</view>
            </view>
		</view>
	</view>
</template>

<script>
    import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
    import uniIcon from '../uni-icon/uni-icon.vue'

    export default {
        components: {
            uniStatusBar,
            uniIcon
        },
        props: {
            /**
             * 标题文字
             */
            title: {
                type: String,
                default: ''
            },
            /**
             * 左侧按钮文本
             */
            leftText: {
                type: String,
                default: ''
            },
            /**
             * 右侧按钮文本
             */
            rightText: {
                type: String,
                default: ''
            },
            /**
             * 左侧按钮图标
             */
            leftIcon: {
                type: String,
                default: ''
            },
            /**
             * 右侧按钮图标
             */
            rightIcon: {
                type: String,
                default: ''
            },
            /**
             * 是否固定在顶部
             */
            fixed: {
                type: [Boolean, String],
                default: false
            },
            /**
             * 按钮图标和文字颜色
             */
            color: {
                type: String,
                default: '#000000'
            },
            /**
             * 背景颜色
             */
            backgroundColor: {
                type: String,
                default: '#FFFFFF'
            },
            /**
             * 是否包含状态栏，默认固定在顶部时包含
             */
            statusBar: {
                type: [Boolean, String],
                default: ''
            },
            /**
             * 是否使用阴影，默认根据背景色判断
             */
            shadow: {
                type: String,
                default: ''
            },
            barFalg: {
                type: Boolean,
                default: false
            },
            barIndex: {
                type: Number,
                default: 1
            }
        },
        computed: {
            isFixed() {
                return String(this.fixed) === 'true'
            },
            insertStatusBar() {
                switch (String(this.statusBar)) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    default:
                        return this.isFixed
                }
            },
            hasShadow() {
                var backgroundColor = this.backgroundColor
                switch (String(this.shadow)) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    default:
                        return backgroundColor !== 'transparent' && backgroundColor.indexOf('rgba') < 0
                }
            }
        },
        methods: {
            /**
             * 左侧按钮点击事件
             */
            onClickLeft() {
                this.$emit('clickLeft')
                this.$emit('click-left')
            },
            /**
             * 右侧按钮点击事件
             */
            onClickRight() {
                this.$emit('clickRight')
                this.$emit('click-right')
            },
            downLoad(){
                // #ifdef APP-PLUS
                let systemName = plus.os.name.toUpperCase();
                if (systemName === "ANDROID") {
                    uni.navigateTo({
                        url: "/pages/download/download",
                        animationType: "slide-in-right"
                    })
                } else if (systemName === "IOS") {
                    var downloadView = plus.ios.newObject("downloadViewController");
                    var UIApplicationClass = plus.ios.importClass("UIApplication");
                    var UIAppObj = UIApplicationClass.sharedApplication();
                    var del = plus.ios.invoke(UIAppObj,"delegate");
                    var appWindowObj = plus.ios.invoke(del,"window");
                    var appRootController = plus.ios.invoke(appWindowObj,"rootViewController");
                    plus.ios.invoke(appRootController,"pushViewController:animated:",downloadView,"YES");
                }
                //#endif
            },
            toSearch(){
                uni.navigateTo({
                    url: "/pages/search/search",
                    animationType: "slide-out-bottom"
                })
            },
            playHistory(){
                uni.navigateTo({
                    url: "/pages/playHistory/playHistory",
                    animationType: "slide-in-right"
                })
            },
            toAll(){
                uni.navigateTo({
                    url: "/pages/allClass/allClass?id=" + this.barIndex,
                    animationType: "slide-in-right"
                })
            }
        }
    }
</script>

<style>
    .uni-navbar {
        position: fixed;
        top: 10upx;
        left: 18upx;
        width: 100%;
        background-color: #FFFFFF;
        z-index: 1025;
    }

    .uni-navbar-shadow {
        box-shadow: 0 1px 6px #ccc;
    }

    .uni-navbar.uni-navbar-fixed {
        position: fixed;
		top: 10upx;
        z-index: 998;
    }

    .uni-navbar-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height:62upx;
        font-size: 16upx;
    }
	
	.uni-navbar-header .uni-navbar-header-btns{
		display:inline-flex;
		flex-wrap:nowrap;
		flex-shrink:0;
        align-items: center;
		width: 66upx;
        height: 62upx;
		padding:0 12upx;
	}
    
    .uni-navbar-btns{
        display:inline-flex;
        flex-wrap:nowrap;
        flex-shrink:0;
        align-items: center;
        justify-content: center;
        width: 94upx;
        height: 26upx;
        padding: 16rpx;
        background: #F8F9FB;
        border-radius: 30rpx;
    }
    .uni-navbar-btns>image{
        width: 22rpx;
        height: 24rpx;
    }
    .btns-text{
        width: 72rpx;
        height: 26rpx;
        line-height: 26rpx;
        text-align: center;
        font-size: 26rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #505050;
    }
	
	.uni-navbar-header .uni-navbar-header-btns:first-child{
		padding-right:30upx;
	}
	.uni-navbar-header .uni-navbar-header-btns:last-child{
		/* width: 60upx; */
	}
	.uni-navbar-header .uni-navbar-header-btns .image{
		width: 40upx;
		height: 40upx;
		vertical-align: middle;
	}
	.uni-navbar-header .uni-navbar-header-btns image:first-child{
		margin-right:30upx;
	}
	.uni-navbar-container{
		margin-right:20upx;
	}
	.uni-navbar-container-title{
		width:460upx;
		height:54upx;
		line-height:54upx;
		font-size:30upx;
		text-align:center;
		background: #F8F9FB;
		border-radius:27upx;
		color:rgba(80,80,80,1);
	}
	.uni-navbar-container-title>text{
		margin-left: 22upx;
	}
	.uni-navbar-container-title>image{
		vertical-align: -6upx;
		width: 30upx;
		height: 30upx;
	}
    .uni-card-media-logo {
    	width: 61upx;
    	height: 66upx;
    }
    .uni-card-media-logo>image {
    	width: 61upx;
    	height: 66upx;
    }
</style>
