<template>
	<view class="modules">
		<view class="uni-padding-wrap uni-common-mt">
			<uni-swiper-dot v-if="info.length" :info="info" :current="currentDot" field="vodName" :mode="mode" :dots-styles="dotsStyles">
				<swiper class="swiper-box" @animationfinish="swiperChange" @change="dotChange" :current="currentSwiper" :autoplay="autoplay" circular="true">
					<swiper-item v-for="(item, index) in info" :key="index" class="swiper-items">
						<view :class="item.colorClass" class="swiper-item" :data-id="item.vodId" :data-url="item.advertUrl" @tap="movieTo">
							<image :src="item.vodPic" mode="scaleToFill" v-if="!item.vodPicThumb" />
							<image :src="item.vodPicThumb" mode="scaleToFill" v-if="item.vodPicThumb" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="" v-show="hot.length > 0">
			<view v-for="(hotItem, index) in hot" :key="index">
				<view class="module-title">
					<view class="module-border"></view>
					<view class="font-size-30 module-name font-style">{{ hotItem.name }}</view>
					<!-- <view class="font-size-24 module-more" @tap="navigateTo(item.name,item.modleId)">
                        更多
                        <image src="/static/right.png" mode=""></image>
                    </view> -->
				</view>
				<view class="movies-style">
					<view class="" v-for="(item, index) in hotItem.movie" :key="index">
						<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
							<view class="module-star-people-movie-remarks">
								<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
								<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
									<text class="text">{{ item.vodRemarks }}</text>
								</view>
								<image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
							</view>
							<view class="font-size-30 movie-name-style font-style">{{ item.vodName }}</view>
							<view class="font-size-26 movie-content-style font-style">{{ item.vodBlurb }}</view>
						</view>
					</view>
					<!-- <view class="movies-style-change" v-if="itemId === item.modleId">
                        <view class="" v-for="(item ,index) in changeList" :key="index">
                            <view class="movie-style" :data-id="item.vodId" @tap="movieTo">
                                <view class="module-star-people-movie-remarks">
                                    <view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{item.trgRemark}}</view>
                                    <view class="module-star-people-movie-remark">{{item.vodRemarks}}</view>
                                    <image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
                                </view>
                                <view class="font-size-30 movie-name-style font-style">{{item.vodName}}</view>
                                <view class="font-size-26 movie-content-style font-style">{{item.vodBlurb}}</view>
                            </view>
                        </view>
                    </view> -->
				</view>
				<!-- <view class="module-fun">
                    <view class="font-size-24 module-fun-more" @tap="navigateTo(item.name,item.modleId)">
                        <image src="/static/tuijian.png" mode="scaleToFill"></image>
                        更多推荐
                    </view>
                    <view class="font-size-24 module-fun-change" @tap="changeItems(item.modleId)">
                        <image src="/static/huanyihuan.png" mode="scaleToFill"></image>
                        换一换
                    </view>
                </view> -->
			</view>
		</view>
		<view class="module">
			<view class="" v-for="(item, index) in module" :key="index">
				<view class="module-title">
					<view class="module-border"></view>
					<view class="font-size-30 module-name font-style">{{ item.name }}</view>
					<view class="font-size-24 module-more" v-if="!(item.name === '明星专区')" @tap="navigateTo(item.name, item.modleId)">
						更多
						<image src="/static/right.png" mode=""></image>
					</view>
				</view>

				<view v-if="item.name === '明星专区'" class="module-stars" v-show="actor.length > 0">
					<view class="module-star">
						<view v-for="(item, index) in actor" :key="index" @tap="changeStar(index, item.actorId)">
							<view class="module-star-every">
								<image :src="item.actorPic" mode="scaleToFill"></image>
								<view class="font-size-24 module-star-name font-style" :class="[index === tabIndex ? ' selsctClass' : '']">{{ item.actorName }}</view>
							</view>
						</view>
					</view>
					<view class="module-star-movies" v-show="star.length > 0">
						<view class="module-star-people">
							<view class="" v-for="(item, index) in star" :key="index">
								<view class="module-star-people-movie" :data-id="item.vodId" @tap="movieTo">
									<view class="module-star-people-movie-remarks">
										<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
										<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
											<text class="text">{{ item.vodRemarks }}</text>
										</view>
										<image :src="item.vodPic" mode="scaleToFill" class="module-star-movie-image"></image>
									</view>
									<view class="font-size-30 module-star-movie-name font-style">{{ item.vodName }}</view>
									<view class="font-size-26 module-star-movie-content font-style">{{ item.vodBlurb }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="movies-style" v-if="item.movie">
					<view class="" v-for="(item, index) in item.movie" :key="index">
						<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
							<view class="module-star-people-movie-remarks">
								<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
								<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
									<text class="text">{{ item.vodRemarks }}</text>
								</view>
								<image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
							</view>
							<view class="font-size-30 movie-name-style font-style">{{ item.vodName }}</view>
							<view class="font-size-26 movie-content-style font-style">{{ item.vodBlurb }}</view>
						</view>
					</view>
					<view class="movies-style-change" v-if="itemId === item.modleId && changeList.length > 0">
						<view class="" v-for="(item, index) in changeList" :key="index">
							<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
								<view class="module-star-people-movie-remarks">
									<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
									<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
										<text class="text">{{ item.vodRemarks }}</text>
									</view>
									<image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
								</view>
								<view class="font-size-30 movie-name-style font-style">{{ item.vodName }}</view>
								<view class="font-size-26 movie-content-style font-style">{{ item.vodBlurb }}</view>
							</view>
						</view>
					</view>
				</view>

				<view class="module-fun" v-if="!(item.name === '明星专区')">
					<view class="font-size-24 module-fun-more" @tap="navigateTo(item.name, item.modleId)">
						<image src="/static/tuijian.png" mode="scaleToFill"></image>
						更多推荐
					</view>
					<view class="font-size-24 module-fun-change" @tap="changeItems(item.modleId)">
						<image src="/static/huanyihuan.png" mode="scaleToFill"></image>
						换一换
					</view>
				</view>
			</view>
		</view>
		<view class="" v-if="flag">
			<view v-for="(item, index) in more" :key="index">
				<view class="module-title">
					<view class="module-border"></view>
					<view class="font-size-30 module-name font-style">{{ item.name }}</view>
					<view class="font-size-24 module-more" @tap="navigateTo(item.name, item.modleId)">
						更多
						<image src="/static/right.png" mode=""></image>
					</view>
				</view>
				<view class="movies-style">
					<view class="" v-for="(item, index) in item.modle" :key="index">
						<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
							<view class="module-star-people-movie-remarks">
								<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
								<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
									<text class="text">{{ item.vodRemarks }}</text>
								</view>
								<image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
							</view>
							<view class="font-size-30 movie-name-style font-style">{{ item.vodName }}</view>
							<view class="font-size-26 movie-content-style font-style">{{ item.vodBlurb }}</view>
						</view>
					</view>
					<view class="movies-style-change" v-if="itemId === item.modleId">
						<view class="" v-for="(item, index) in changeList" :key="index">
							<view class="movie-style" :data-id="item.vodId" @tap="movieTo">
								<view class="module-star-people-movie-remarks">
									<view class="module-movie-remark" :class="' module-movie-remark-' + item.trgRemarkId" v-if="item.trgRemark">{{ item.trgRemark }}</view>
									<view class="module-star-people-movie-remark" v-show="item.vodRemarks">
										<text class="text">{{ item.vodRemarks }}</text>
									</view>
									<image :src="item.vodPic" mode="scaleToFill" class="movie-image-style"></image>
								</view>
								<view class="font-size-30 movie-name-style font-style">{{ item.vodName }}</view>
								<view class="font-size-26 movie-content-style font-style">{{ item.vodBlurb }}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="module-fun">
					<view class="font-size-24 module-fun-more" @tap="navigateTo(item.name, item.modleId)">
						<image src="/static/tuijian.png" mode="scaleToFill"></image>
						更多推荐
					</view>
					<view class="font-size-24 module-fun-change" @tap="changeItems(item.modleId)">
						<image src="/static/huanyihuan.png" mode="scaleToFill"></image>
						换一换
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
export default {
	data() {
		return {
			currentDot: 0,
			currentSwiper: 0,
			tabIndex: 0,
			changeIndex: 1,
			mode: 'long&nav',
			itemId: null,
			changeList: [],
			dotsStyles: {
				backgroundColor: 'rgba(0, 0, 0,.3)',
				color: '#fff',
				selectedBackgroundColor: 'rgba(255, 255, 255, .9)'
			}
		};
	},
	props: {
		autoplay: {
			type: Boolean,
			default() {
				return true;
			}
		},
		hot: {
			type: Array,
			default() {
				return [];
			}
		},
		info: {
			type: Array,
			default() {
				return [];
			}
		},
		module: {
			type: Array,
			default() {
				return [];
			}
		},
		more: {
			type: Array,
			default() {
				return [];
			}
		},
		flag: {
			type: Boolean,
			default() {
				return false;
			}
		},
		star: {
			type: Array,
			default() {
				return [];
			}
		},
		actor: {
			type: Array,
			default() {
				return [];
			}
		},
		indexTab: {
			type: Number,
			default() {
				return 0;
			}
		},
		isOne: {
			type: Boolean,
			default() {
				return true;
			}
		}
	},
	watch: {
		info(newValue, oldValue) {
			if (newValue.length < oldValue.length) {
				if (this.currentDot > newValue.length - 1) {
					this.currentDot = newValue.length - 1;
					this.currentSwiper = newValue.length - 1;
				}
			}
		},
		isOne(newValue, oldValue) {
			if (!newValue) {
				this.tabIndex = 0;
			}
		}
	},
	components: {
		uniSwiperDot
	},
	methods: {
		swiperChange(e) {
			this.currentSwiper = e.detail.current;
		},
		dotChange(e) {
			this.currentDot = e.detail.current;
		},
		changeStar(index, id) {
			this.tabIndex = index;
			this.$emit('star', { index, id });
		},
		changeItems(id) {
			this.changeIndex++;
			if (this.changeIndex <= 3) {
				this.itemId = id;
			} else {
				this.itemId = null;
				this.changeIndex = 1;
				this.changeList = [];
				return;
			}
			uni.request({
				url: this.websiteUrl + '/api/home/exchange',
				method: 'GET',
				data: {
					typeId: this.indexTab,
					modleId: id,
					currPage: this.changeIndex
				},
				success: res => {
					this.changeList = res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		navigateTo(name, id) {
			uni.navigateTo({
				url: '/pages/more/more?title=' + name + '&index=' + this.indexTab + '&id=' + id,
				animationType: 'slide-in-right',
				animationDuration: 300
			});
		},
		movieTo(e) {
			let adverUrl = e.currentTarget.dataset.url;//广告跳转地址
			let movieId = e.currentTarget.dataset.id;

			if (adverUrl) {
				// #ifdef APP-PLUS
				plus.runtime.openWeb(adverUrl);
				// #endif
			} else {
				uni.navigateTo({
					url: '/pages/playPage/playPage?vodId=' + movieId,
					animationType: 'slide-in-right',
					animationDuration: 300
				});
			}

			console.log(e);
		}
	}
};
</script>

<style>
page {
	background-color: #fff;
}

view {
	font-size: 28upx;
	line-height: inherit;
}
.modules {
	width: 750upx;
	margin-top: 204upx;
	overflow: hidden;
}
.swiper-box {
	width: 690upx;
	height: 400upx;
	margin-left: 30upx;
	border-radius: 20upx;
	overflow: hidden;
}
.swiper-items {
	border-radius: 20upx;
	width: 690upx;
	height: 100%;
	overflow: hidden;
}
.swiper-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 690upx;
	height: 100%;
	background: url(~@/static/690.png) 0upx 0upx/690upx 400upx no-repeat;
	color: #fff;
	border-radius: 20upx;
}

.swiper-item image {
	width: 100%;
	height: 100%;
	border-radius: 20upx;
}

.font-size-24 {
	font-size: 24upx;
}
.font-size-26 {
	font-size: 26upx;
}
.font-size-30 {
	font-size: 30upx;
}
.module-stars {
	width: 100%;
	margin-left: 30upx;
	margin-bottom: 42upx;
}
.module-star {
	width: 100%;
	height: 160upx;
	display: flex;
	overflow: auto;
}
.module-star-every {
	position: relative;
	left: 0;
	top: 0;
	width: 140upx;
	height: 140upx;
	margin-right: 43upx;
	border-radius: 50%;
	background: url(~@/static/140.png) 0upx 0upx/140upx 140upx no-repeat;
}
.module-star-every > image {
	width: 140upx;
	height: 140upx;
	border-radius: 50%;
}
.module-star-every > .module-star-name {
	position: absolute;
	top: 112upx;
	left: 16upx;
	width: 108upx;
	height: 38upx;
	line-height: 38upx;
	text-align: center;
	font-family: PingFang-SC-Medium;
	font-weight: 500;
	color: rgba(45, 45, 45, 1);
	background: #f8f9fb;
	border-radius: 19px;
}
.module-star-name.selsctClass {
	color: rgba(255, 255, 255, 1);
	background-image: url(~@/static/bluexuanzhong.png);
	background-repeat: no-repeat;
	background-size: cover;
}
.module-star-movies {
	width: 100%;
	position: relative;
	margin-top: 40upx;
}
.module-star-movie {
	width: 100%;
	height: 836upx;
	background-color: #ffffff;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	transition: opacity 1s;
}
.module-star-movie.selsctClass {
	opacity: 1;
}
.module-star-people {
	display: flex;
	width: 100%;
	flex-wrap: wrap;
}
.module-star-people-movie {
	width: 210upx;
	box-sizing: border-box;
	margin-bottom: 40upx;
	margin-right: 30upx;
}
.module-star-people-movie-remarks {
	width: 210upx;
	height: 280upx;
	position: relative;
	top: 0;
	left: 0;
}
.module-movie-remark {
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
	color: #ffffff;
	z-index: 2;
}
.module-movie-remark-1 {
	background: #fd750c;
}
.module-movie-remark-2 {
	background: #e7392e;
}
.module-movie-remark-3 {
	background: #ffcf28;
}
.module-star-people-movie-remark {
	width: 100%;
	height: 20px;
	line-height: 20px;
	text-align: right;
	border-radius: 0 0 20rpx 20rpx;
	position: absolute;
	bottom: 0rpx;
	right: 0rpx;
	color: #ffffff;
	font-size: 12px;
	z-index: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	background: rgba(0, 0, 0, 0.5);
}
.text {
	margin-right: 5px;
}
.module-star-movie-image {
	width: 210upx;
	height: 280upx;
	border-radius: 20upx;
	background: url(~@/static/210.png) 0upx 0upx/210upx 280upx no-repeat;
}
.module-star-movie-name {
	width: 210upx;
	height: 30upx;
	line-height: 30upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(45, 45, 45, 1);
	margin-top: 14upx;
	margin-bottom: 20upx;
}
.module-star-movie-content {
	width: 210upx;
	height: 26upx;
	line-height: 26upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(107, 107, 107, 1);
}
.module-title {
	display: flex;
	width: 100%;
	height: 30upx;
	line-height: 30upx;
	margin-bottom: 35upx;
	margin-top: 40upx;
}
.module-border {
	width: 6upx;
	height: 30upx;
	background: #248adf;
	border-radius: 3upx;
}
.module-name {
	width: 626upx;
	height: 30upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(45, 45, 45, 1);
	margin-left: 24upx;
}
.module-more {
	width: 90upx;
	height: 30upx;
	line-height: 30upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(153, 153, 153, 1);
}
.module-more > image {
	width: 11upx;
	height: 20upx;
	margin-left: 9upx;
}
.movies-style {
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	margin-left: 30upx;
	position: relative;
}
.movies-style-change {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	background: #ffffff;
	z-index: 10;
}
.movie-style {
	width: 210upx;
	box-sizing: border-box;
	margin-bottom: 40upx;
	margin-right: 22upx;
}
.movie-image-style {
	width: 210upx;
	height: 280upx;
	border-radius: 20upx;
	background: url(~@/static/210.png) 0upx 0upx/210upx 280upx no-repeat;
}
.movie-name-style {
	width: 210upx;
	height: 30upx;
	line-height: 30upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(45, 45, 45, 1);
	margin-top: 14upx;
	margin-bottom: 20upx;
}
.movie-content-style {
	width: 210upx;
	height: 26upx;
	line-height: 26upx;
	font-size: 26upx;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	color: rgba(107, 107, 107, 1);
}
.font-style {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.module-fun {
	display: flex;
	width: 100%;
	margin-left: 30upx;
	margin-bottom: 60upx;
}
.module-fun-change {
	width: 334upx;
	height: 74upx;
	line-height: 74upx;
	background: #f8f9fb;
	text-align: center;
	border-radius: 4upx;
}
.module-fun-more {
	width: 334upx;
	height: 74upx;
	line-height: 74upx;
	margin-right: 22upx;
	background: #f8f9fb;
	text-align: center;
	border-radius: 4upx;
}
.module-fun-change > image,
.module-fun-more > image {
	width: 30upx;
	height: 30upx;
	vertical-align: middle;
	margin-right: 10upx;
}
</style>
