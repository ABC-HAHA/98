<template>
	<view class="">
		<view class="comment_page">
			<image class="comment_head_image" :src="imageHead"></image>
			<view class="comment_detail" @click="checkOtherContent">
				<view class="comment_name">{{options.commentName}}</view>
				<view class="comment_time">{{options.commentTime}}</view>	
				<view class="comment_text">{{options.commentContent}}</view>
				<view class="comment_other" v-if ="other_coment_status" >
					<view class="comment_other_text">查看全部评论 ></view>
				</view>
			</view>	
		</view>
		<hr class="bottomLine"></hr>
	</view>
	
</template>

<script>
	import uniPopup from '@/pages/playPage/uni-popup.vue';
	export default {
		created:function(){
			if(this.options.commentObject && this.options.commentObject.length >0){
				this.other_coment_status =true;
			}else{
				this.other_coment_status =false;
			}
		},
		components: {
			uniPopup
		},
		methods: {
			checkOtherContent(){
				this.$emit('checkOtherContent');
				
			}
		},
		data() {
			return {
				other_coment_status:false,
				type:'',
				imageHead:"../../../static/140.png"
			}
			},
			created() {
				this.imageHead =this.options.userPortrait;
			},
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		}
	}
</script>

<style>
	.comment_page{
		display: flex;
		flex: 1;
		flex-direction: row;
		margin-left:50upx;
		/* width:750upx; */
		/* border-bottom:1upx solid rgba(227,227,227,1); */
		margin-top: 30upx;
		/* justify-content: center; */
		/* align-items: center; */
	}
	.comment_head_image{
		margin-top: 5upx;
		width:72upx;
		height:72upx;
		/* background:rgba(197,129,129,1); */
		border-radius:50%;
	}
	.comment_detail{
		margin-left:20upx ;
	}
	.comment_name{
		font-size:30upx;
		color:rgba(0,0,0,1);
	}
	.comment_time{
		/* margin-top: 14upx; */
		font-size:24upx;
		color:rgba(153,153,153,1);
	}
	.comment_text{
		width: 600upx;
		margin-top: 28upx;
		font-size:30upx;
		color:rgba(55,55,55,1);
	}
	.comment_other{
		display: flex;
		margin-top: 20upx;
		align-items: center;
		width:598upx;
		height:76upx;
		background:rgba(232,232,232,1);
		font-size:28upx;
		color:rgba(45,45,45,1);
	}
	.comment_other_text{
		margin-left: 20upx;
	}
	.bottomLine{
		margin-top: 30upx;
		border: 1upx solid rgba(227,227,227,1);
	}
</style>
