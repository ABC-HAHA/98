<template>
	<view class="uni-swiper__warp">
		<slot></slot>
		<view v-if="mode === 'default'" class="uni-swiper__dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="uni-swiper__dots-item" v-for="(item,index) in info" :style="{
				 'width': dots.width + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index"></view>
		</view>
		<view v-if="mode === 'long'" class="uni-swiper__dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="uni-swiper__dots-item" v-for="(item,index) in info" :class="[index === current&&'uni-swiper__dots-long']"
			 :style="{
				 'width':(index === current? dots.width*3:dots.width ) + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index"></view>
		</view>
		<view v-if="mode === 'nav'" class="uni-swiper__dots-box uni-swiper__dots-nav" :style="{'background-color':dotsStyles.backgroundColor}">
			<view class="uni-swiper__dots-nav-item" :style="{'color':dotsStyles.color}">{{(current+1)+"/"+info.length}}
				{{info[current][field]}}</view>
		</view>
		<view v-if="mode === 'indexes'" class="uni-swiper__dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="uni-swiper__dots-item uni-swiper__dots-indexes" v-for="(item,index) in info" :style="{
				 'width':dots.width + 'px','height':dots.height +'px' ,'color':index === current?dots.selectedColor:dots.color,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index">{{index+1}}</view>
		</view>
		<view v-if="mode === 'long&nav'" class="uuni-swiper__long-nav">
			<view class="uuni-swiper__dots-long-nav" :style="{'background-color':dotsStyles.backgroundColor}">
				<view class="uni-swiper__dots-nav-item" :style="{'color':dotsStyles.color}">
					{{info[current][field]}}</view>
			</view>
			
			<view class="uni-swiper__dots-long-box" :style="{'bottom':dots.bottom + 'px'}">
				<view class="uni-swiper__dots-item" v-for="(item,index) in info" :class="[index === current&&'uni-swiper__dots-long']"
					 :style="{
						 'width':(index === current? dots.width*3:dots.width ) + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor}"
					 :key="index"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-swiper-dot',
		props: {
			info: {
				type: Array,
				default () {
					return []
				}
			},
			current: {
				type: Number,
				default () {
					return 0
				}
			},
			dotsStyles: {
				type: Object,
				default () {
					return {}
				}
			},
			// 类型 ：default(默认) indexes long nav
			mode: {
				type: String,
				default: 'default'
			},
			// 只在 nav 模式下生效，变量名称
			field: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				dots: {
					width: 4,
					height: 4,
					bottom: 6,
					color: '#fff',
					backgroundColor: 'rgba(255, 255, 255, .3)',
					selectedBackgroundColor: '#FFF',
				}
			};
		},
		created() {
			if (this.mode === 'indexes') {
				this.dots.width = 20
				this.dots.height = 20
			}
			this.dots = Object.assign(this.dots, this.dotsStyles)
		},
		watch: {
			dotsStyles(newVal) {
				this.dots = Object.assign(this.dots, this.dotsStyles)
			},
			mode(newVal) {
				if (newVal === 'indexes') {
					this.dots.width = 20
					this.dots.height = 20
				} else {
					this.dots.width = 8
					this.dots.height = 8
				}
			}

		}
	}
</script>

<style>
	.uni-swiper__warp {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}

	.uni-swiper__dots-box {
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		display: flex;
		align-items: center;
		box-sizing: box-sizing;
		width: 100%;
	}

	.uuni-swiper__long-nav{
		position: relative;
		bottom: 0upx;
		left: 0upx;
	}
	
	.uuni-swiper__dots-long-nav{
		position: absolute;
		width: 690upx;
		display: flex;
		margin-left: 30upx;
		bottom: 0;
		height: 105upx;
		justify-content: flex-start;
		align-items: center;
		background: rgba(0, 0, 0, 0.2);
		box-sizing: box-sizing;
		overflow: hidden;
		border-radius: 0 0 20upx 20upx;
	}
	
	.uni-swiper__dots-long-box{
		position: absolute;
		bottom: 20upx;
		display: flex;
		align-items: center;
		box-sizing: box-sizing;
		width: 690upx;
		justify-content: flex-end;
	}

	.uni-swiper__dots-item {
		flex-shrink: 0;
		width: 16upx;
		border-radius: 50%;
		margin-left: 12upx;
		background: rgba(0, 0, 0, .3);
		transition: all 0.2s linear;
	}

	.uni-swiper__dots-item:first-child {
		margin: 0;
	}

	.uni-swiper__dots-default {
		border-radius: 50%;
	}

	.uni-swiper__dots-long {
		border-radius: 100upx;
	}

	.uni-swiper__dots-nav {
		bottom: 0;
		height: 80upx;
		justify-content: flex-start;
		background: rgba(0, 0, 0, 0.2);
		box-sizing: box-sizing;
		overflow: hidden;
	}

	.uni-swiper__dots-nav-item {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 36upx;
		font-weight: bold;
		color: #fff;
		box-sizing: box-sizing;
		margin: 0 30upx;
	}

	.uni-swiper__dots-indexes {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 24upx;
	}
</style>
