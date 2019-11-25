<template>
	<view class="my_invitation">
		<view class="my_invitation_head">
			<view class="my_invitation_head_left">
				<view class="my_invitation_head_left_title"> 已邀请</view>
				<view class="my_invitation_head_left_number">{{invitationData.count}}人</view>
			</view>
			<view class="my_invitation_head_right" @click="inviteGoodFriends" > 邀请好友	</view>
		</view>
		<view class="my_invitation_list_title">
			<view class="my_invitation_list_title_left">用户昵称</view>
			<view class="my_invitation_list_title_right">注册时间</view>
		</view>
		
		<view  class="my_invitation_list">
			<view  v-if="invitationListStatus"  class="nodata_group" >
				<image  class="nodata"  src="../../static/nosearch.png"  ></image>
			</view>
			<view   v-if="!invitationListStatus"  v-for="(newsitem,index2) in invitationData" :key="index2">
				<view class="my_invitation_list_item">
					<view class="my_invitation_list_item_name">{{newsitem.userNickName}}</view>
					<view class="my_invitation_list_item_time">{{newsitem.userRegTime}}</view>
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
						url: this.websiteUrl +'/api/share/code?userId='+uid, //仅为示例，并非真实接口地址。
						success: (res) => {
							if(res.data.status == 0){
								if(res.data.list.length >0){
									this.invitationData = res.data.list; 
									this.invitationListStatus = false;
								}
							}
						}
					});
				},
		data() {
			return {
				invitationData:{count:0},
				invitationListStatus:true
			}
		},
		methods:{
			inviteGoodFriends(){
				uni.switchTab({
					url: '../../pages/tarbar/share/share'
				})
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
		margin-top: 30upx;
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
	.my_invitation_list_title{
		width: 690upx;
		font-size:32upx;
		color:rgba(45,45,45,1);
		display: flex;
		flex-direction: row;
	    justify-content: center;
		margin-bottom: 20upx;
		position: fixed;
		margin-top:280upx;
		background-color: #FFFFFF;
		line-height: 80upx;
	}
	.my_invitation_list_title_left{
		width: 330upx;
	}
	.my_invitation_list_title_right{
		width: 270upx;
	}
	.my_invitation_list{
		padding-top: 360upx;
	}
	.my_invitation_list_item{
		display: flex;
		flex-direction: row;
		justify-content: center;
		line-height: 90upx;
		/* padding-top: 320upx; */
	}
	.my_invitation_list_item_name{
		width: 320upx;
		font-size:26upx;
		color:rgba(45,45,45,1);
	}
	.my_invitation_list_item_time{
		width: 330upx;
		font-size:26upx;
		color:rgba(136,136,136,1);
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
