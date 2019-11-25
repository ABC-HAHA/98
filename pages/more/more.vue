<template>
	<view class="more">
		<view class="movies-style">
			<view class="" v-for="(item ,index) in moreMovies" :key="index">
				<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
                    <view class="movie-image-style-remarks">
                        <view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{item.trgRemark}}</view>
                        <view class="movie-image-style-remark" v-show="item.vodRemarks">
                            <text class="text">{{item.vodRemarks}}</text>
                        </view>
                        <image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
                    </view>
					<view class="font-size-30 movie-name-style font-style">{{item.vodName}}</view>
					<view class="font-size-26 movie-content-style font-style">{{item.vodBlurb}}</view>
				</view>
			</view>
		</view>
        <view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moreMovies: [],
                indexTab: 0,
                num: 2,
                modleNum: 0,
                moreFlag: false,
                loadMoreText: "加载中...",
                showLoadMore: false,
                showFalg: true
			}
		},
		methods: {
			moreData() {
				uni.request({
					url: this.websiteUrl + '/api/home/more',
					method: 'GET',
					data: {
                        typeId:this.indexTab,
                        modleId: this.modleNum,
                        currPage:this.num
                    },
					success: res => {
						if (res.data.length > 0) {
							let data = []
							for (var i = 0; i < res.data.length; i++) {
								data.push(res.data[i])
							}
							this.moreMovies = this.moreMovies.concat(data);
							this.moreFlag = true;
                            this.num++;
						} else {
							this.moreFlag = false;
							this.showFalg = false;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
            movieTo(e){
                let movieId = e.currentTarget.dataset.id;
                uni.navigateTo({
                    url: '/pages/playPage/playPage?vodId='+movieId,
                    animationType: 'slide-in-right',
                    animationDuration: 300
                });
            }
		},
		onLoad(option) {
            this.indexTab = option.index;
            this.modleNum = option.id
			uni.setNavigationBarTitle({
				title: option.title
			});
            uni.request({
                url: this.websiteUrl + '/api/home/more',
                method: 'GET',
                data: {
                    typeId: option.index,
                    modleId: option.id,
                    currPage: 1
                },
                success: res => {
                    this.moreMovies = res.data;
                },
                fail: () => {},
                complete: () => {}
            });
		},
        onUnload() {
        	this.data = [],
        	this.showLoadMore = false;
        	this.showFalg= true;
        	this.moreFlag= false;
        },
        onReachBottom() {
        	console.log("onReachBottom");
        	if (!this.showFalg) {
        		this.loadMoreText = "我是有底线的!"
        		return;
        	}
        	this.showLoadMore = true;
        	setTimeout(() => {
        		this.moreData();
        	}, 300);
        }
	}
</script>

<style>
    .more{
        width: 750upx;
        margin-top: 20rpx;
        overflow: hidden;
    }
	.movies-style{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-left: 30upx;
		position: relative;
	}
	.movie-style{
		width:210upx;
		box-sizing: border-box;
		margin-bottom: 40upx;
		margin-right: 22upx;
	}
    .movie-image-style-remarks{
        width:210upx;
        height:280upx;
        position: relative;
        top: 0;
        left: 0;
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
    .movie-image-style-remark{
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
	.movie-image-style{
		width:210upx;
		height:280upx;
		border-radius:20upx;
		background: url(~@/static/210.png) 0upx 0upx/210upx 280upx no-repeat;
	}
	.movie-name-style{
		width:210upx;
		height:30upx;
		line-height: 30upx;
		font-family:MicrosoftYaHei;
		font-weight:400;
		color:rgba(45,45,45,1);
		margin-top: 14upx;
		margin-bottom: 20upx;
	}
	.movie-content-style{
		width:210upx;
		height:26upx;
		line-height: 26upx;
		font-size:26upx;
		font-family:MicrosoftYaHei;
		font-weight:400;
		color:rgba(107,107,107,1);
	}
	.font-size-26{
		font-size: 26upx;
	}
	.font-size-30{
		font-size: 30upx;
	}
	.font-style{
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
