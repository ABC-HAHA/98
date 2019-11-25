<template>
	<view class="filerank-tab-bar">
		<scroll-view id="tab-bar" class="filerank-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="filerank-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.typeId" :data-current="index" @click="tapTab">{{tab.typeName}}
			 <hr class = "filerank-swiper-border" :class="tabIndex==index ? 'active' : ''" />
			 </view>
		</scroll-view>
			<view class ="listMovie">
				<view v-for="(opts,index) in newsitemData[tabIndex].data" :key="index">
					<filmList :options="opts"></filmList>
				</view>
				<view v-if="baseline" class="uni-tab-bar-loading">我是有底线的</view>
			</view>
	</view>
</template>

<script>
	import filmList from '@/pages/discover/filmRanking/filmList.vue';
	const tpl = {
		data0: {
			"datetime": "你看见方式登记反馈时代科技股票",
			"article_type": 1,
			"title": "DCloud完成B2轮融资，uni-app震撼发布!",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 11395
		},
		}
	export default {
			components: {
				filmList
			},
			data() {
				return {
					scrollLeft: 0,
					tabIndex: 0,
					pageNumberArry:[],
					newsitems: [],
				}
			},
			props: {
			newsitemData: {
				type: Array,
				default: function(e) {
					return {
					}
				}
			},
			tabBars: {
				type: Array,
				default: function(e) {
					return {
					}
				}
			},
			baseline:{
				type: Boolean
			}
		},
		created() {
				this.tempList = this.tabBars;
			},
		
		methods: {
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				// if (this.newsitems[tabIndex].data.length === 0) {
				// 	this.addData(tabIndex)
				// }
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					this.tabIndex = tabIndex;
				}
			},
				async changeTab(e) {
				let index = e.target.current;
				// if (this.newsitems[index].data.length === 0) {
				// 	this.addData(index)
				// }
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
			
				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			}
		}
	}
</script>

<style>
/* tab bar */
	.filerank-tab-bar{
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}
	.filerank-swiper-tab {
		padding-top: -20upx;
		width: 100%;
		position: fixed;
		white-space: nowrap;
		/* line-height: 100upx; */
		height: 88upx;
		z-index: 10;
		background-color: #FFFFFF;
		/* border-bottom: 1px solid #c8c7cc; */
	}
	.filerank-swiper-border{
		/* flex: 1; */
		border-radius:5px;
		width:38upx;
		margin:10upx auto;
		border:10upx;
		size:10upx;
		 noshade:true;
		/* height: 0; */
		border-top: 2px solid #FFFFFF;
		border-bottom: 2px solid #FFFFFF;
	}
	
	.filerank-tab-list {
		font-size: 30upx;
		/* width: 120upx; */
		font-weight:bold;
		display: inline-block;
		text-align: center;
		color: #555;
		margin-left: 50upx;
		/* border-left: 1px solid #555; */
	}

	.uni-tab-bar .active {
		color: #248ADF;
		font-size: 36upx;
	}
	.filerank-swiper-border.active {
		border-top: 3px solid #248ADF;
		border-bottom: 3px solid #248ADF;
	}
	.listMovie{
		margin-top: 100upx;
		z-index: 5;
	}
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 35upx;
		color: #999;
	}
	
swiper{
height:5000px
}
/* swiper-item{
height:200px //这里可以设置比上面高度小（留出大标语位置）或者设置一样大
} */
</style>
