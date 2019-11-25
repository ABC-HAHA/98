<template>
	<view>
        <uni-nav-bar :title="title" :fixed="false" :shadow="'false'" :barFalg="barFalg" :barIndex="TabCur"></uni-nav-bar>
		<view class="sort">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" tab-class="text-center bg-white wuc-tab fixed" tab-style="" select-class="text-blue text-xl"></wuc-tab>
			<!-- <swiper :current="TabCur" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)" @change="swiperChange">
				<swiper-item v-for="(item,index) in tabList" :key="index">
					<div class="bg-white padding margin text-center text-black">{{item.name}}</div>
				</swiper-item>
			</swiper> -->
            <navigator url="/pages/classify/classify" animation-type="slide-in-right" hover-class="none">
                <div class="sort-button">
                	<image src="/static/fenlei.png" mode=""></image>
                </div>
            </navigator>
		</view>
		<view class="nothing"></view>
		<home-module :autoplay="autoplay" :hot="hotMovie" :info="info" :module="module" :more="moreArray" :flag="moreFlag" :isOne="barFalg" @star="starChange" :star="star" :indexTab="TabCur" :actor="actor"></home-module>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'
	import uniNavBar from "@/components/uni-nav-bar-diy/uni-nav-bar-diy.vue"
	import homeModule from "@/pages/home/home/home-module.vue"
	export default {
		data() {
			return {
                autoplay: false,
				tabList: [],
				info: [],
                nums: 0,
				module: [],
				moreArray: [],
				star: [],
                actor: [],
                hotMovie: [],
				moreFlag: false,
				placeholder: "",
				loadMoreText: "加载中...",
				showLoadMore: false,
				showFalg: true,
                title: "",
                barFalg: false
			}
		},
		methods: {
			tabChange(index) {
                if (index === 0) {
                    this.barFalg = false;
                } else {
                    this.barFalg = true;
                }
                this.$store.commit('changeTar',index);
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                })
				uni.request({
					url: this.websiteUrl + '/api/home/title',
					method: 'GET',
					data: {
                        typeId:index
                    },
					success: res => {
						this.selectArray = res.data
						this.info = this.selectArray.image;
						this.module = this.selectArray.modle;
                        this.title = this.selectArray.searchTitle;
                        if (this.selectArray.starMovie) {
                            this.star = this.selectArray.starMovie;
                        } else {
                            this.star = [];
                        }
                        if (this.selectArray.star) {
                            this.actor = this.selectArray.star;
                        } else {
                            this.actor = [];
                        }
                        if (this.selectArray.hotMovie) {
                            this.hotMovie = this.selectArray.hotMovie;
                        } else {
                            this.hotMovie = [];
                        }
                        this.nums = 0;
                        this.moreArray = [];
                        this.moreFlag = false;
                        this.showFalg = true;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			/* swiperChange(e) {
			    let { current } = e.target;
			    this.TabCur = current;
				this.info = this.tabList[this.TabCur].image;
				this.module = this.tabList[this.TabCur].module;
			}, */
			/* initData(){
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 10;
					for (var i = this.max - 9; i < this.max + 1; i++) {
						data.push(i)
					}
					this.data = this.data.concat(data);
					uni.request({
						url: '../../../static/more.json',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
						}
					});
					uni.stopPullDownRefresh();
				}, 300);
			}, */
			setDate() {
                let deviceId = this.$store.state.deviceId;
				uni.request({
					url: this.websiteUrl + '/api/home',
					method: 'GET',
					data: {
                        typeId: 0,
                        equipmentId: deviceId
                    },
					success: res => {
						this.tabList = res.data.tablist;
						this.info = this.tabList[this.TabCur].image;
						this.module = this.tabList[this.TabCur].module;
                        this.title = this.tabList[this.TabCur].searchTitle;
                        if (this.tabList[this.TabCur].star) {
                        	this.actor = this.tabList[this.TabCur].star;
                        } else {
                            this.actor = [];
                        }
						if (this.tabList[this.TabCur].starMovie) {
							this.star = this.tabList[this.TabCur].starMovie;
						} else {
                            this.star = [];
                        }
                        if (this.tabList[this.TabCur].hotMovie) {
                        	this.hotMovie = this.tabList[this.TabCur].hotMovie;
                        } else {
                            this.hotMovie = [];
                        }
					},
					fail: () => {},
					complete: () => {}
				});
			},
			moreData() {
				uni.request({
					url: this.websiteUrl + '/api/home/reflesh',
					method: 'GET',
					data: {
                        typeId:this.$store.state.TarCur,
                        currPage:this.nums
                    },
					success: res => {
						if (res.data.length > 0) {
							let data = []
							for (var i = 0; i < res.data.length; i++) {
								data.push(res.data[i])
							}
							this.moreArray = this.moreArray.concat(data);
							this.moreFlag = true;
                            this.nums++;
						} else {
							this.showFalg = false;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			starChange(object){
				uni.request({
					url: this.websiteUrl + '/api/home/star',
					method: 'GET',
					data: {
                        actorId:object.id,
                        currPage:object.index
                    },
					success: res => {
                        this.star = res.data
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		components: {
			WucTab,
			uniNavBar,
			homeModule
		},
        watch: {
            TabCur: function (newValue, oldValue) {
                this.tabChange(newValue);
            }
        },
        computed: {
            TabCur: {
                // getter
                get: function () {
                    return this.$store.state.TarCur
                },
                // setter
                set: function (newValue) {
                    this.$store.commit('changeTar',newValue);
                }
            }
       },
		onLoad() {
			this.setDate();
		},
		onUnload() {
			this.data = [],
			this.showLoadMore = false;
			this.showFalg= true;
			this.moreFlag= false;
            this.nums = 0;
            this.autoplay = false;
		},
        onShow() {
            this.autoplay = true;
        },
        onHide() {
            this.autoplay = false;
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
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		}
	}
</script>

<style>
	page {
		background-color: #fff
	}
	.nothing{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 202upx;
		background: #FFFFFF;
		z-index: 994;
	}
	.sort-button{
		width: 128upx;
		height: 74upx;
		position: fixed;
		top: 120upx;
		right: 0upx;
		z-index: 1025;
	}
	.sort-button image{
		width: 128upx;
		height: 74upx;
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
