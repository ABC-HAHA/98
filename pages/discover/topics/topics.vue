<template>
	<view>
		<view class="topicsPage">
			<view v-for="(newsitem,index2) in newsitemData" :key="index2">
				<media-list :options="newsitem"></media-list>
			</view>
			<view v-if="baseline" class="uni-tab-bar-loading">我是有底线的</view>
		</view>
	</view>
</template>

<script>
	import mediaList from '@/pages/discover/topics/mediaList.vue';
	export default {
		components: {
			mediaList
		},
		data() {
			return {
				pageNumber:1
			}
		},
		props: {
			newsitemData: {
				type: Array,
				default: function(e) {
					return {}
				}
			},
			baseline:{
				type: Boolean
			}
		},
		methods: {
			
			}
	}
</script>

<style>
.uni-tab-bar-loading {
		text-align: center;
		font-size: 35upx;
		color: #999;
	}

</style>
