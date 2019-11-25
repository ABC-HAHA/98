<template>
	<view class="my_invitation">
		<view class="my_invitation_head">
			<view class="my_invitation_head_left">
				<view class="my_invitation_head_left_title">当前金币余额</view>
				<view class="coin_group">
					<view class="my_invitation_head_left_number">{{myCoinData.points}}</view>
					<image src="../../static/huode_jinbi.png" class ="coinImage"></image>
				</view>
			</view>
			<view class="my_invitation_head_right" @click="toEarnMoney">去赚钱</view>
		</view>
		<view class="my_coin">
			<view class="my_invitation_list_title">
				<view class="my_invitation_list_title_left">金币明细</view>
			</view>
			<view  v-if="myCoinListStatus"  class="nodata_group" >
				<image  class="nodata"  src="../../static/nosearch.png"  ></image>
			</view>
			 <view v-if="!myCoinListStatus" class="my_coin_list">
				<view  v-for="(newsitem,index2) in myCoinData.growth" :key="index2">
					<view class="my_coin_list_item">
						<view class="my_coin_list_item_group">
							<view class="my_coin_list_item_time_ad">
								<view class="item_ad">{{newsitem.taskName}}</view>
								<view class="item_time">{{newsitem.time}}</view>
							</view>
							<view class="item_number_coin">
								<view class="item_number">{{newsitem.taskPoint}}</view>
								<image src="../../static/huode_jinbi.png" class ="coinImage"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	   
		
	</view>
</template>

<script>
	export default {
		created:function (options){
			 var  uid = '';
			if(this.$store.state.userInfo.userId){
				uid = this.$store.state.userInfo.userId;
			}
				uni.request({
					url: this.websiteUrl +'/api/growth/list?userId=' + uid , //仅为示例，并非真实接口地址。
					success: (res) => {
						if(res.data.status == 0){
								this.myCoinData = res.data;
								if(res.data.growth.length >0){
								this.myCoinListStatus = false;
								}
						}
					}
			});
		},
		methods: {
			toEarnMoney(){
				uni.switchTab({
					url: '../../pages/tarbar/task/task'
				})
			}
		},
		data() {
			return {
				myCoinData:{},
				myCoinListStatus:true
			}
		}
	}
	
</script>

<style>
	.my_invitation_head{
		width:750upx;
		height:280upx;
		background:rgba(36,138,223,1);
		display: flex;
		flex-direction: row;
		align-items: center; 
		justify-content: center;
		position: fixed;
	}
	.my_invitation_head_left{
		width: 450upx;
	}
	.my_invitation_head_left_title{
		font-size:24upx;
		color:rgba(255,255,255,1)
	}
	.my_invitation_head_left_number{
		font-size:50upx;
		color:rgba(255,255,255,1);
	}
	.my_invitation_head_right{
		display: flex;
		width:140upx;
		height:60upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		font-size:32upx;
		color:rgba(36,138,223,1);
		justify-content: center;
		align-items: center; 
	}
	.my_coin{
		padding-top: 300upx;
		margin-left: 30upx;
	}
	.my_coin_list{
		margin-top: 30upx;
		
	}
	.my_coin_list_item{
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 50upx;
		width:750upx;
		border-bottom: 1upx solid rgba(210,210,210,1);;
	}
	.my_coin_list_item_time_ad{
		width:530upx;
		/* line-height: 40upx; */
	}
	.my_coin_list_item_group{
		display: flex;
		flex-direction: row;
		align-items: center;
		/* border-bottom: 1upx solid rgba(210,210,210,1); */
		
	}
	.item_ad{
		font-size:28upx;
		color:rgba(45,45,45,1);
	}
	.item_time{
		font-size:22upx;
		color:rgba(136,136,136,1);
	}
	.item_number{
		font-size:40upx;
		color:rgba(254,171,3,1);
	}
	.coinImage{
		margin-left:30upx;
		width: 42upx;
		height: 48upx;
	}
	.coin_group{
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center; 
	}
	.item_number_coin{
		display: flex;
		flex-direction: row;
		align-items: center; 
	}
	.nodata_group{
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
