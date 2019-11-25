<template>
	<view>
		<view class="search-content" v-if="searchFalg">
		    <view class="search-content-item" v-for="(item ,index) in searchArr" :key="index" :id="item.vodId" @tap="toMovieItem">
		        <view class="search-item-image">
                    <view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{item.trgRemark}}</view>
                    <view class="search-item-image-remark" v-show="item.vodRemarks">
                        <text class="text">{{item.vodRemarks}}</text>
                    </view>
                    <image :src="item.vodPic" mode=""></image>
                </view>
                <view class="search-item-content">
                    <view class="search-item-name">{{item.vodName}}</view>
                    <view class="search-item-con">{{item.vodYear || unknow}}·{{item.typeName || unknow}}·{{item.vodArea || unknow}}</view>
                    <view class="search-item-dir">导演：{{item.vodDirector || unknow}}</view>
                    <view class="search-item-act">主演：{{item.vodActor || unknow}}</view>
                </view>
		    </view>
		</view>
        <view class="unsearch-content" :style="{height:style.contentViewHeight+'px'}" v-if="hasSearch">
            <image src="/static/nosearch.png" mode=""></image>
        </view>
        <view class="" v-if="itemFalg">
            <scroll-view class="seach-scroll" scroll-x="true" :scroll-left="scrollLeft">
                <view class="seach-scroll-item" :class="[tabNum === index ? ' select':'']" v-for="(item ,index) in initArr" :key="index" @tap="numChanged(index)">
                    {{item.name}}
                    <view class="line"></view>
                </view>
            </scroll-view>
            <swiper class="seach-swiper" duration="300" :current="tabNum" :style="{height:style.contentViewHeight+'px'}" @change="tabChange">
                <swiper-item v-for="(item ,index) in initArr" :key="index">
                    <view class="seach-swiper-item" v-for="(item ,index) in item.dataList" :key="index">
                        <view class="swiper-item-num">{{index+1}}</view>
                        <view class="swiper-item-text" @tap="seachText">{{item.vodName}}</view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                style: {
                	pageHeight: 0,
                	contentViewHeight: 0
                },
				searchArr: [],
                hasSearch: false,
                searchFalg: false,
                initArr: [],
                tabNum: 0,
                itemFalg: true,
                unknow: '未知'
			}
		},
		methods: {
			numChanged(index){
                this.tabNum = index
            },
            tabChange(e){
                this.tabNum = e.detail.current
            },
            seachText(e){
                // #ifdef APP-PLUS
                var str = e._relatedInfo.anchorTargetText;
                var webView = this.$mp.page.$getAppWebview();
                webView.setTitleNViewSearchInputText(str)
                // #endif
            },
            toMovieItem(e){
                let movieId = e.currentTarget.id;
                uni.navigateTo({
                    url: '/pages/playPage/playPage?vodId='+movieId,
                    animationType: 'slide-in-right',
                    animationDuration: 300
                });
            }
		},
        computed: {
            scrollLeft() {
                return (this.tabNum - 1) * 60;
            }
        },
        onLoad() {
            const res = uni.getSystemInfoSync();
            this.style.pageHeight = res.windowHeight;
            this.style.contentViewHeight = res.windowHeight; //像素
            uni.request({
                url: this.websiteUrl + '/api/home/searchInit',
                method: 'GET',
                data: {},
                success: res => {
                    this.initArr = res.data;
                },
                fail: () => {},
                complete: () => {}
            });
        },
        onNavigationBarSearchInputConfirmed(e){
            uni.request({
                url: this.websiteUrl + '/api/home/search',
                method: 'GET',
                data: {
                    vodName: e.text
                },
                success: res => {
                    if (res.data.data != null) {
                        this.searchArr = res.data.data;
                        this.hasSearch = false;
                        this.searchFalg = true;
                        this.itemFalg = false;
                    } else{
                        this.hasSearch = true;
                        this.searchFalg = false;
                        this.itemFalg = false;
                    }
                    this.searchArr = res.data.data;
                },
                fail: () => {},
                complete: () => {}
            });
        },
        onNavigationBarButtonTap(){
            uni.navigateBack();
        },
        onNavigationBarSearchInputChanged(e){
            uni.request({
                url: this.websiteUrl + '/api/home/search',
                method: 'GET',
                data: {
                    vodName: e.text
                },
                success: res => {
                    if (res.data.data != null && e.text !== '') {
                        this.searchArr = res.data.data;
                        this.hasSearch = false;
                        this.searchFalg = true;
                        this.itemFalg = false;
                        return
                    } else if (res.data.data == null && e.text !== '') {
                        this.searchArr = [];
                        this.hasSearch = true;
                        this.searchFalg = false;
                        this.itemFalg = false;
                        return
                    } else {
                        this.searchArr = [];
                        this.hasSearch = false;
                        this.searchFalg = false;
                        this.itemFalg = true;
                        return
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        }
	}
</script>

<style>
    .seach-scroll{
        position: fixed;
        top: 0px;
        left: 0;
        white-space: nowrap;
        background: #FFFFFF;
        z-index: 1;
        margin-left: 30rpx;
    }
    .seach-scroll-item{
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
        margin: 0 40rpx 0 0;
    }
    .seach-scroll-item.select{
        font-size: 18px;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: #248ADF;
    }
    .seach-scroll-item.select>.line{
        position: absolute;
        width: 19px;
        height: 6px;
        background: rgba(36,138,223,1);
        border-radius: 3px;
        bottom: 0;
        left: 50%;
        margin-left: -9px;
    }
    .seach-swiper{
        margin-top: 45px;
        margin-left: 30rpx; 
    }
    .seach-swiper-item{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        /* margin-bottom: 72rpx; */
    }
    .swiper-item-num{
        width: 72rpx;
        text-align: center;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: bold;
        color: #999999;
    }
    .seach-swiper-item:nth-child(1)>.swiper-item-num{
        color: #E52B00;
    }
    .seach-swiper-item:nth-child(2)>.swiper-item-num{
        color: #FF7E00;
    }
    .seach-swiper-item:nth-child(3)>.swiper-item-num{
        color: #FFC302;
    }
    .swiper-item-text{
        width: 650rpx;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
    }
    .search-content{
        width: 100%;
        margin-top: 30rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .search-content-item{
        width: 686rpx;
        margin-bottom: 30rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .search-item-image{
        width: 210rpx;
        height: 280rpx;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 20rpx;
        background: url(~@/static/210.png) 0px 0px/210rpx 280rpx no-repeat;
    }
    .module-movie-remark{
        width: 62rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        border-radius: 5rpx;
        position: absolute;
        top: 10rpx;
        right: 10rpx;
        font-size: 20rpx;
        font-weight: bold;
        color: #FFFFFF;
        z-index: 2;
    }
    .module-movie-remark-1{
        background: #fd750c;
    }
    .module-movie-remark-2{
        background: #e7392e;
    }
     .module-movie-remark-3{
        background: #ffcf28;
    }
    .search-item-image-remark{
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: right;
        border-radius:0 0 20rpx 20rpx;
        position: absolute;
        bottom: 0rpx;
        right: 0rpx;
        color: #FFFFFF;
        font-size: 12px;
        z-index: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: rgba(0, 0, 0, 0.5);
    }
    .text{
        margin-right: 5px;
    }
    .search-item-image>image{
        width: 210rpx;
        height: 280rpx;
        border-radius: 20rpx;
    }
    .search-item-content{
        width: 436rpx;
        height: 214rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .search-item-name{
        font-size: 30rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #2D2D2D;
    }
    .search-item-con{
        font-size: 28rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #6B6B6B;
    }
    .search-item-dir{
        width: 436rpx;
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #6B6B6B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .search-item-act{
        width: 436rpx;
        font-size: 24rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #6B6B6B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .unsearch-content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .unsearch-content>image{
        width: 374rpx;
        height: 390rpx;
    }
</style>
