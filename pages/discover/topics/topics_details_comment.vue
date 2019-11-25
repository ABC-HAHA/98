<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true"  :scroll-with-animation="true" :scroll-top="scrollTop">
				<view class="nodata_group" v-if="commentListShow">
					<image  class="nodata"  src="../../../static/nosearch.png"  ></image>
				</view>
				<view  v-if="!commentListShow" class = "detail_content" v-for="(newsitem,index1) in commentData" :key="index1">
					<commItem :options="newsitem"></commItem>
				</view>
			</scroll-view>
		</view>
		<view class="foot">
			<input_detail  @sendMessage ="toSendMessage"></input_detail>
		</view>
	</view>
</template>

<script>
	import input_detail from '@/pages/discover/topics/input_detail.vue';
	import commItem from '@/pages/playPage/commentItem.vue';
	 var util = require('../../../common/util.js');
	export default {
		data() {
			return {
				commentListShow:false,
				commentId:0,
				vodId:0,
				scrollTop: 0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0
				},
				commentData: []
			}
		},
		components: {
			input_detail,commItem
		},
		onLoad(options) {
		 var optionData =JSON.parse(options.commentList) ; // 字符串转对象 
		 this.commentId = optionData.commentId;
		 this.commentMid = optionData.commentMid;
		 this.vodId = optionData.vodId; 
		if(optionData.data.length > 0 ){
			this.commentListShow = false;
			this.commentData = optionData.data;
		}else{
			// this.commentData = [];
			this.commentListShow = true;
		}
			// 
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (110); //像素
		},
		methods: {
			toSendMessage(data){
				let  self  = this;
				let  requestData = {
							"commentId":this.commentId,
							"userId":this.$store.state.userInfo.userId,
							"commentName":this.$store.state.userInfo.userName,
							 commentPid:this.commentId,
							"commentRid":Number(this.vodId),
							"commentContent":data.inputValue
							}
				uni.request({
					url: this.websiteUrl +'/api/discover/inscomment', //仅为示例，并非真实接口地址。
					method:"POST",
					data:requestData,
						success: (res) => {
							if(res.data.status == 0){
								var  newData = {commentContent: data.inputValue,
												commentId: res.data.commentId,
												commentName: this.$store.state.userInfo.userName,
												commentObject:[],
												commentPid:this.commentId,
												commentTime:util.getNowTime('yyyy-MM-dd hh:mm:ss'),
												userId: this.$store.state.userInfo.userId,
												userPortrait:this.$store.state.userImage.localImage
												};
								self.commentData.push(newData);	
								self.commentListShow = false;
							}
					}
				});
			}
		}
	}
</script>

<style>
	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {
		width:750upx ;
		display: flex;
		flex: 1;
		margin-bottom: 100upx;
	}

	.foot {
		margin-left: 30upx;
		position: fixed;
		width: 100%;
		height: 100upx;
		min-height: 100upx;
		left: 0upx;
		/* top:10upx; */
	
		bottom:-5upx;
	}
	.detail_title{
		width:691upx;
		font-size:30upx;
		font-weight:bold;
		color:rgba(45,45,45,1);
		line-height:46upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0upx auto;
		margin-top: 20upx;
	}
	.detail_time{
		width:690upx;
		height:21upx;
		font-size:26upx;
		color:rgba(102,102,102,1);
		margin: 0upx auto;
		margin-top: 40upx;
	}
	.detail_introduce{
		width:682upx;
		font-size:28upx;
		color:rgba(102,102,102,1);
		margin: 0upx auto;
		margin-top: 40upx;
	}
	.detail_film_details{
		/* margin-top: 30upx; */
	}
	
	.detail_introduce_titel{
		margin-top: 20upx;
		margin-left: 30upx;
		width: 180upx;
		text-align: center;
		border-left: 10upx solid rgba(36,138,223,1) ;
		border-bottom-left-radius: 3upx;
		font-size:30upx;
		color:rgba(45,45,45,1);
		
	}
	.detail_introduce_content{
		width:680upx;
		font-size:28upx;
		color:rgba(102,102,102,1);
		margin: 0upx auto;
		margin-top:30upx;
	}
	.detail_content{
		width:750upx;
		margin: 0upx auto;
	}
	
	.nodata_group{
		margin-top: 300upx;
		height: 500upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nodata{
		width: 374upx;
		height: 390upx;
		margin: 0upx auto;
	}
</style>
