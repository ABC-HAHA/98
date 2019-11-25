<template>
	<view  tatal_page>
		<view class ="page_head">
			<image  class = "head_background" src="../../../static/duihuanbeijing.png"></image>
			<view class="head_content">
				<view  class = "head_butt">
					<view class = "head_butt_btn" @click="gotoMyInvitation">
						<view class="head_butt_btn_group">
							<image class = "head_butt_btn_icon" src="../../../static/taskyaoqinghaoyou.png"></image>
							<text class = "head_butt_btn_text">我的邀请码</text>
						</view>
					</view>
					<view class = "head_butt_btn  btn_yaoqing" @click="gotoMyExchange">
						<view class="head_butt_btn_group">
							<image class = "head_butt_btn_icon" src="../../../static/duihuanzhongxin_pre.png"></image>
							<view class = "head_butt_btn_text"><text >兑换中心</text></view>
						</view>
					</view>
				</view>
				<view class ="head_content_bottom">
					<view class="text_detail" @click="gotoMyInvitation">
						<view class="calcul_text"><text>已邀请</text></view>
						<view class="calcul_group">
							<view class="big_font">{{task_basic_data.shareCount}}</view><span>人</span>
						</view>
							
					</view>
					<view class="text_detail" @click="gotoMyCoinList">
						<view class="calcul_text"><text>金币</text></view>
						<view class="calcul_group">
							<view class="big_font">{{task_basic_data.point}}</view><span>个</span>
						</view>
					</view>
					<view class="text_detail">
						<view class="calcul_text"><text>连续签到</text></view>
						<view class="calcul_group">
							<view class="big_font">{{task_basic_data.continueMark}}</view><span>天</span>
						</view>	
					</view>
				</view>
			</view>
		</view>
        <view class="guanggao_item">
            <image src="/static/guanggao.png" mode="" class="guanggao" @tap="toPrize"></image>
        </view>
	    <view v-if="taskShow" class = "page_list">
		<view   v-for="(newsitem,index2) in task_basic_data.taskList" :key="index2">
			<taskItem :options="newsitem" :fromPage ="1" @changeData="toChangData" ></taskItem>
		</view>
		</view>
	</view>
</template>

<script>
	import taskItem from '@/pages/task/taskItem.vue';
	export default {
		components: {
			taskItem
		},
		data() {
			return {
				taskShow:true,
				task_basic_data:{
					"msg": "success",
					"shareCount": 0,
					"userPoints": "10",
					"code": 0,
					"sign": "0  ",
					"coutinueMark": "0"
				},
				task_list :[{list_title:"今日签到",
								list_award:"+10金币/个",
								content:"每次点击签到奖励10个",
								btn:"去签到",
								id:0
								},{list_title:"邀请用户注册",
								list_award:"+100金币/个",
								content:"邀请一位好友注册奖励100个",
								btn:"去完成",
								id:1
								},{list_title:"分享专题",
								list_award:"+5金币/个",
								content:"每次首次分享专题奖励5个",
								btn:"去分享",
								id:5
								}],
				
			}
		},
		onShow:function (options){
			var  uid = '';
			if(this.$store.state.userInfo.userId){
				uid = this.$store.state.userInfo.userId;
			}
			uni.request({
				url: this.websiteUrl +'/api/task/list?userId=' + uid, //仅为示例，并非真实接口地址。
				success: (res) => {
					if(res.data.status == 0){
						this.task_basic_data = res.data;
						this.taskShow = false;
						this.$nextTick(()=>{
						 this.taskShow = true;
						})
					}
				}
			});
				},
		methods: {
			gotoMyInvitation(){
				uni.navigateTo({
					url: '../../../pages/task/my_invitation'
				})
			},
			gotoMyExchange(){
				uni.navigateTo({
					url: '../../../pages/task/my_exchange'
				})
			},
			gotoMyCoinList(){
				uni.navigateTo({
					url: '../../../pages/task/my_coin'
				})
			},
			toChangData(data){
				this.task_basic_data.continueMark = data.coutinueMark;
				this.task_basic_data.point = data.userPoints;
			},
            toPrize(){
                uni.navigateTo({
                    url: '/pages/luckDraw/luckDraw',
                    animationType: 'slide-in-right',
                    animationDuration: 300
                });
            }
		}
	}
</script>

<style>
	page {
		/* background-color: #F4F5F6;
		height: 100%; */
		font-size: 28upx;
		line-height: 1.8;
	}
    .guanggao_item{
        width: 100%;
        display: flex;
        padding-top: 340rpx;
        justify-content: center;
        align-items: center;
    }
    .guanggao{
        width: 708rpx;
        height: 119rpx;
    }
	.tatal_page{
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}
	.page_head{
		background-color: #FFFFFF;
		position: fixed;
		z-index: 10;
		/* top:0; */
		/* width: 750upx;
		height: 100%; */
	}
	.head_background{
		width: 690upx;
		margin:0 30upx;
		height: 310upx;
	}
	.head_content{
		position: absolute;
		top: 0upx;
		left: 30upx;
	}
	
	.head_butt{
		display: flex;
		flex: 1;
		flex-direction: row;
		margin-left: 55upx;
		margin-top:50upx ;
	}
	.head_butt_btn{
		background-color: #FFFFFF;
		height: 80upx;
		width: 270upx;
		border-radius: 10upx;
/* 		display: flex;
		justify-content: center;
		align-items: center; */
	}
	.head_butt_btn_group{
		display: flex;
		justify-content: center;
		align-items: center; 
		flex: 1;
		flex-direction: row;
		width: 230upx;
		margin: 0upx auto;
		padding-top:25upx ;
	}
	.head_butt_btn_icon{
		margin-top: -10upx;
		width: 32upx;
		height: 34upx;
	}
	.head_butt_btn_text{
		margin-top:-10upx ;
		padding-left: 20upx;
		font-size:32upx;
		color:#248ADF;
	}
	.btn_yaoqing{
		margin-left: 40upx;
	}
	.head_content_bottom{
		display: flex;
		flex: 1;
		flex-direction: row;
		margin-top: 50upx;
		margin-left: 40upx;
	}
	.text_detail{
		width:200upx;
		color: #FFFFFF;
		font-size:24upx ;
	}
	.calcul_group{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.calcul_text{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.big_font{
		font-size:36upx;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.page_list{
		z-index: 5;
		padding-top: 45upx;
	}
	
</style>
