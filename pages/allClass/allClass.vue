<template>
	<view>
        <view class="kongbai"></view>
		<view class="allClass">
		    <view class="allClass-item" v-if="areaArr.length > 0">
                <view class="allClass-item-type" :class="[areaText === areaArr[0].columnName ? ' select-item':'']" :id="areaArr[0].columnName" @tap="selectArea">{{areaArr[0].columnType}}</view>
                <view class="">
                    <scroll-view class="allClass-item-scroll" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[areaText === item.columnDesc ? ' select-item':'']" v-for="(item ,index) in areaArr[0].columnValueList" :key="index" :id="item.columnDesc" @tap="selectArea">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="allClass-item" v-if="sortArr.length > 0">
                <view class="allClass-item-type" :class="[sortText === sortArr[0].columnName ? ' select-item':'']" :id="sortArr[0].columnName" @tap="selectSort">{{sortArr[0].columnType}}</view>
                <view class="">
                    <scroll-view class="allClass-item-scroll" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[sortText === item.columnDesc ? ' select-item':'']" v-for="(item ,index) in sortArr[0].columnValueList" :key="index" :id="item.columnDesc" @tap="selectSort">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="allClass-item" v-if="yearArr.length > 0">
                <view class="allClass-item-type" :class="[yearText === yearArr[0].columnName ? ' select-item':'']" :id="yearArr[0].columnName" @tap="selectYear">{{yearArr[0].columnType}}</view>
                <view class="">
                    <scroll-view class="allClass-item-scroll" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[yearText === item.columnDesc ? ' select-item':'']" v-for="(item ,index) in yearArr[0].columnValueList" :key="index" :id="item.columnDesc" @tap="selectYear">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="allClass-item" v-if="langArr.length > 0">
                <view class="allClass-item-type" :class="[langText === langArr[0].columnName ? ' select-item':'']" :id="langArr[0].columnName" @tap="selectLang">{{langArr[0].columnType}}</view>
                <view class="">
                    <scroll-view class="allClass-item-scroll" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[langText === item.columnDesc ? ' select-item':'']" v-for="(item ,index) in langArr[0].columnValueList" :key="index" :id="item.columnDesc" @tap="selectLang">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="allClass-item" v-if="overArr.length > 0">
                <view class="allClass-item-type" :class="[overText === overArr[0].columnName ? ' select-item':'']" :id="overArr[0].columnName" @tap="selectOver">{{overArr[0].columnType}}</view>
                <view class="">
                    <scroll-view class="allClass-item-scroll" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[overText === item.column ? ' select-item':'']" v-for="(item ,index) in overArr[0].columnValueList" :key="index" :id="item.column" @tap="selectOver">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="allClass-item" v-if="rankArr.length > 0">
                <view class="">
                    <scroll-view class="allClass-item-scroll allClass-item-scroll-last" scroll-x="true">
                        <view class="allClass-item-scroll-item" :class="[rankText === item.column ? ' select-item':'']" v-for="(item ,index) in rankArr[0].columnValueList" :key="index" :id="item.column" @tap="selectRank">
                            {{item.columnDesc}}
                        </view>
                    </scroll-view>
                </view>
            </view>
		</view>
        <view class="allMovie">
            <view class="allMovie-item" v-for="(item ,index) in movieArr" :key="index" :id="item.vodId" @tap="toMovie">
                <view class="allMovie-item-img">
                    <view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{item.trgRemark}}</view>
                    <view class="allMovie-item-img-remark" v-show="item.vodRemarks">
                        <text class="text">{{item.vodRemarks}}</text>
                    </view>
                    <image :src="item.vodPic" mode=""></image>
                </view>
                <view class="allMovie-item-name">{{item.vodName}}</view>
                <view class="allMovie-item-text">{{item.vodBlurb}}</view>
            </view>
        </view>
        <view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                classId: 1,
				classArr: [],
                movieArr: [],
                titleArr: [],
                areaArr: [],
                sortArr: [],
                yearArr: [],
                langArr: [],
                overArr: [],
                rankArr: [],
                areaText: '',
                sortText: '',
                yearText: '',
                langText: '',
                overText: '',
                rankText: '',
                nums: 2,
                loadMoreText: "加载中...",
                showLoadMore: false,
                showFalg: true,
			}
		},
        onReachBottom() {
			console.log("onReachBottom");
			if (!this.showFalg) {
				this.loadMoreText = "我是有底线的!";
				return;
			}
			this.showLoadMore = true;
            this.loadMoreText = "加载中...";
			setTimeout(() => {
				this.moreData();
			}, 300);
		},
		methods: {
			selectArea(e){
                this.areaText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            selectSort(e){
                this.sortText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            selectYear(e){
                this.yearText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            selectLang(e){
                this.langText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            selectOver(e){
                this.overText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            selectRank(e){
                this.rankText = e.currentTarget.id;
                uni.request({
                    url: this.websiteUrl + '/api/home/classinfo',
                    method: 'POST',
                    data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: 1
                    },
                    success: res => {
                        if (res.data.length <= 0) {
                            this.movieArr = res.data;
                            this.showLoadMore = true;
                            this.loadMoreText = "暂无数据！";
                            return
                        }
                        this.loadMoreText = "";
                        this.movieArr = res.data;
                        this.nums = 2;
                        this.showFalg = true;
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            moreData() {
            	uni.request({
            		url: this.websiteUrl + '/api/home/classinfo',
            		method: 'POST',
            		data: {
                        typeId: this.classId,
                        vodArea: this.areaText,
                        vodClass: this.sortText,
                        vodYear: this.yearText,
                        vodLang: this.langText,
                        vodIsend: this.overText,
                        otherColumn: this.rankText,
                        pageCount: this.nums
                    },
            		success: res => {
            			if (res.data.length > 0) {
            				let data = []
            				for (var i = 0; i < res.data.length; i++) {
            					data.push(res.data[i])
            				}
            				this.movieArr = this.movieArr.concat(data);
                            this.nums++;
            			} else {
            				this.showFalg = false;
            			}
            		},
            		fail: () => {},
            		complete: () => {}
            	});
            },
            toMovie(e){
                let movieId = e.currentTarget.id;
                uni.navigateTo({
                    url: '/pages/playPage/playPage?vodId=' + movieId,
                    animationType: 'slide-in-right',
                    animationDuration: 300
                });
            }
		},
        onLoad(option) {
            this.classId = option.id;
            uni.setNavigationBarTitle({
            	title: ''
            });
            let titleNum = parseInt(this.classId-1);
            uni.request({
                url: this.websiteUrl + '/api/home/classtype',
                method: 'GET',
                data: {
                    typeId:this.classId
                },
                success: res => {
                    this.classArr = res.data.classType;
                    for (let i = 0; i < this.classArr.length; i++) {
                        switch (this.classArr[i].columnType){
                            case "全部地区":
                            this.areaArr.push(this.classArr[i]);
                            this.areaText = this.areaArr[0].columnName
                                break;
                            case "全部分类":
                            this.sortArr.push(this.classArr[i]);
                            this.sortText = this.sortArr[0].columnName
                                break;
                            case "全部年份":
                            this.yearArr.push(this.classArr[i]);
                            this.yearText = this.yearArr[0].columnName
                                break;
                            case "全部语言":
                            this.langArr.push(this.classArr[i]);
                            this.langText = this.langArr[0].columnName
                                break;
                            case "是否完结":
                            this.overArr.push(this.classArr[i]);
                            this.overText = this.overArr[0].columnName
                                break;
                            default:
                            this.rankArr.push(this.classArr[i]);
                            this.rankText = this.rankArr[0].columnValueList[0].column
                                break;
                        }
                    }
                    if (this.areaArr.length > 0 && this.areaArr[0].columnValueList.length > 14) {
                        this.areaArr[0].columnValueList = this.areaArr[0].columnValueList.slice(0, 12)
                    }
                    if (this.sortArr.length > 0 && this.sortArr[0].columnValueList.length > 14) {
                        this.sortArr[0].columnValueList = this.sortArr[0].columnValueList.slice(0, 12)
                    }
                    if (this.yearArr.length > 0 && this.yearArr[0].columnValueList.length > 14) {
                        this.yearArr[0].columnValueList = this.yearArr[0].columnValueList.slice(0, 12)
                    }
                    if (this.langArr.length > 0 && this.langArr[0].columnValueList.length > 14) {
                        this.langArr[0].columnValueList = this.langArr[0].columnValueList.slice(0, 12)
                    }
                    if (this.overArr.length > 0 && this.overArr[0].columnValueList.length > 14) {
                        this.overArr[0].columnValueList = this.overArr[0].columnValueList.slice(0, 12)
                    }
                    if (this.rankArr.length > 0 && this.rankArr[0].columnValueList.length > 14) {
                        this.rankArr[0].columnValueList = this.rankArr[0].columnValueList.slice(0, 12)
                    }
                    if (res.data.movie.length > 0) {
                        this.movieArr = res.data.movie[0].modle;
                    }
                    this.titleArr = res.data.titleList;
                    uni.setNavigationBarTitle({
                    	title: this.titleArr[titleNum].name
                    });
                },
                fail: () => {},
                complete: () => {}
            });
        },
        onUnload() {
        	this.data = [],
        	this.showLoadMore = false;
        	this.showFalg= true;
            this.nums = 2;
        }
	}
</script>

<style>
    .kongbai{
        width: 100%;
        height: 150px;
        position: fixed;
        left: 0;
        top: 0;
        background: #FFFFFF;
        z-index: 5
    }
    .allClass{
        width: 100%;
        height: 200px;
        padding: 10px 0;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        z-index: 6;
        background: #FFFFFF;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .allClass-item{
        margin-left: 30rpx;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
    }
    .allClass-item-type{
        flex-shrink: 0;
        margin-right: 20rpx;
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
        text-align: center;
        padding: 4px 12px;
    }
    .allClass-item-scroll{
        width: 528rpx;
        white-space: nowrap;
        overflow: hidden;
    }
    .allClass-item-scroll-last{
        width: 660rpx;
    }
    .allClass-item-scroll-item{
        margin-right: 20rpx;
        display: inline-block;
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
        text-align: center;
        padding: 4px 12px;
    }
    .select-item{
        color: #248ADF;
        border-radius: 13px;
        background: #F8F9FB;
    }
    .allMovie{
        margin: 220px auto 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; 
        align-items: flex-start;
        align-content: space-between;
    }
    .allMovie-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 30rpx;
        margin-bottom: 30rpx;
    }
    .allMovie-item-img{
        width: 210rpx;
        height: 280rpx;
        position: relative;
        top: 0;
        left: 0;
        margin-bottom: 14rpx;
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
    .allMovie-item-img-remark{
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
    .allMovie-item-img>image{
        width: 210rpx;
        height: 280rpx;
        border-radius: 20rpx;
    }
    .allMovie-item-name{
        width: 210rpx;
        height: 34rpx;
        line-height: 34rpx;
        margin-bottom: 20rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2D2D2D;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .allMovie-item-text{
        width: 210rpx;
        height: 30rpx;
        line-height: 30rpx;
        font-size: 26rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #6B6B6B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .uni-loadmore{
    	width: 100%;
    	height: 20upx;
    	background: #FFFFFF;
    	line-height: 20upx;
    	font-weight:400;
    	color:rgba(107,107,107,1);
    	text-align: center;
    	font-size: 20upx;
    	margin-bottom: 40upx;
    }
</style>
