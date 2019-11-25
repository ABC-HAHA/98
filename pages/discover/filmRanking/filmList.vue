<template>
		<view class="total_list" @click="watchTV(options.vodId)">
			<view >
				<image class="film_img"  :src="options.vodPic"></image>
			</view>
			<view class="film_detail">
				<view class="film_detail_head">
					<view><text class="film_detail_num">{{options.vodScore}}</text></view>
					<view class="film_detail_title">
						<view class="film_detail_name">{{options.vodName}}</view>	
						<view class="film_detail_from">{{options.vodYear}}·{{options.typeName}}·{{options.vodArea}}</view>						
					</view>
				</view>
				<view class="film_detail_content">
                    <view ><image class= "flag" src="/static/right.png"></image></view>
					<view >导演 ：{{options.vodDirector}}</view>
					<view class="vod_actor"><text >主演 ：{{options.vodActor}}</text></view>	
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
			watchTV(data){
				uni.navigateTo({
				url: '../../../pages/playPage/playPage?vodId='+data
			});
			}
			// close(e) {
			// 	this.$emit('close');
			// },
			// bindClick() {
			// 	this.$emit('click');
			// }
		}
	}
</script>

<style>
.total_list{
	padding: 0upx 30upx;
	display: flex;
	flex: 1;
	flex-direction: row;
	overflow: hidden;
	height: 100%;
}
.film_detail{
	padding-left: 20upx;
}
.film_detail_head{
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
}
.film_img{
   width: 210upx;
   height: 280upx;
   border-radius: 20upx;
   background: url(~@/static/210.png) 0upx 0upx/210upx 280upx no-repeat;
}
.film_detail_title{
	padding-top: 20upx;
	padding-left: 30upx;
}
.film_detail_num{
    font-size:40upx;
    font-weight:bold;
    color:#8F8F94;
}
.film_detail_name{
    width:350upx;
    font-size:30upx;
    font-weight:bold;
    color:#2D2D2D;
    white-space: nowrap;
    overflow: hidden;
}
.film_detail_from{
    font-size:28upx;
    color:#6B6B6B;
}
.film_detail_content{
	font-size:24upx;
	color:#6B6B6B;
}
.flag{
    width: 11rpx;
    height: 20rpx;
	position: relative;
	left:440upx;
}
.vod_actor{
	margin-top:13upx ;
	width:440upx;
	height: 10upx;
	word-break:break-all;
	letter-spacing:3upx;
	line-height: 50upx;
}
</style>
