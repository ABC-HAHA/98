<template>
	<view class="view">
		<view class="list-cell view" hover-class="uni-list-cell-hover" @click="bindClick">
			<view class="media-list">
				<view class="media-list-item">
                    <text class="description">{{options.topicName}}</text>
                </view>
				<image class="image-list" v-if="options.topicPic" :src="options.topicPic"></image>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			close(e) {
				this.$emit('close');
			},
			bindClick() {
				uni.navigateTo({
					url: '../../../pages/discover/topics/topics_details?topicId='+this.options.topicId
				})
				// this.$emit('click');
			},
			loadMore(e) {
				// setTimeout(() => {
				// 	this.addData(e);
				// }, 1200);
			}
		}
	}
</script>

<style>
	.list-cell {
		width: 750upx;
		padding: 0 30upx;
	}

	.uni-list-cell-hover {
		background-color: #eeeeee;
		
	}

	.media-list {
        width: 690upx;
        height:400upx;
        border-radius: 20upx;
        display: flex;
		flex: 1;
		flex-direction: column;
		padding: 15upx 0;
        position: relative;
	}
    
    .media-list-item{
        width: 690rpx;
        height: 104rpx;
        background: url(~@/static/zhuanti.png) 0rpx 0rpx/690rpx 104rpx no-repeat;
        border-radius: 0 0 20rpx 20rpx;
        position: absolute;
        left: 0rpx;
        bottom: 15rpx;
        z-index: 10;
        display: inline-flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
    }

	.image-section {
		margin-top: 10upx;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.image-list {
		width: 690upx;
		height:400upx;
		border-radius: 20upx;
        background: url(~@/static/690.png) 0rpx 0rpx/690rpx 400rpx no-repeat;
	}
	.description{
		width:670upx;
        margin-left: 20rpx;
        margin-bottom: 20rpx;
        font-size: 36rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
	}
</style>
