<template>
	<view class="my_exchange_page">
        <view class="my_exchange_page_head">
            <view class="my_exchange_head">
            	<view class="my_invitation_head_left">
            		<view class="my_invitation_head_left_title"> 当前金币余额</view>
            		<view class="my_invitation_head_left_number">{{exchangeData.points}}</view>
            	</view>
                <view class="my_invitation_head_right">
                	<view class="my_invitation_head_right_title"> 当前下载次数</view>
                	<view class="my_invitation_head_right_number">{{exchangeData.downcount}}</view>
                </view>
            	<!-- <view class="my_invitation_head_right"> 去兑换</view> -->
            </view>
        </view>
		<view class = "my_exchange_list">
		<view  v-if="exchangeListStatus"  class="nodata_group" >
			<image  class="nodata"  src="../../static/nosearch.png"  ></image>
		</view>
		<view v-if="!exchangeListStatus" v-for="(newsitem,index2) in exchangeData.excList" :key="index2">
			<taskItem :options="newsitem" :fromPage ="2" :key="index2" @exchange="toExchange"></taskItem>
		</view>
		</view>
		
	</view>
</template>

<script>
	import taskItem from '@/pages/task/taskItem.vue';
	export default {
		created:function (options){
			 var  uid = '';
			if(this.$store.state.userInfo.userId){
				uid = this.$store.state.userInfo.userId;
			}
            uni.request({
                url: this.websiteUrl +'/api/exchange/list?userId=' + uid, //仅为示例，并非真实接口地址。
                success: (res) => {
                    if(res.data.status == 0){
                            this.exchangeData = res.data; 
                            if(res.data.excList.length >0){
                            this.exchangeListStatus = false;
                            }
                    }
               
                }
            });
        },
		components: {
			taskItem
		},
		data() {
			return {
				exchangeData :{points:0},
				exchangeListStatus:true
				
			}
        },
        methods:{
            toExchange(data){
                if (data.status == 0) {
                    uni.showToast({
                        title: "兑换成功",
                        mask: true,
                        duration: 1000
                    })
                    setTimeout(function(){
                        uni.hideToast()
                    }, 1000)
                    uni.request({
                        url: this.websiteUrl +'/api/exchange/list', //仅为示例，并非真实接口地址。
                        method: 'GET',
                        data: {
                            userId: this.$store.state.userInfo.userId
                        },
                        success: (res) => {
                            if(res.data.status == 0){
                                this.exchangeData = res.data;
                                if(res.data.excList.length >0){
                                    this.exchangeListStatus = false;
                                }
                            }
                        }
                    });
                } else if (data.status == 3) {
                    // #ifdef APP-PLUS
                    const subNVue = uni.getSubNVueById('exchangeRule');
                    subNVue.show('slide-in-top', 200)
                    // #endif
                }
            }
        }
	}
</script>

<style>
	.my_exchange_page{
		width:750upx;
		height: 100%;
		/* display: flex;
		justify-content: center; */
	}
    .my_exchange_page_head{
        width: 750rpx;
        height: 310rpx;
        position: fixed;
        z-index: 50;
        background: #FFFFFF;
    }
	.my_exchange_head{
		background-image:url(../../static/duihuanbeijing.png) ;
		background-size: 690upx 310upx;
		width:690upx;
		height:310upx;
		margin: 0upx auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 30upx;
	}
	.my_invitation_head_left,
    .my_invitation_head_right{
		line-height: 50upx;
	}
    .my_invitation_head_right{
        margin-left: 200rpx;
    }
	.my_invitation_head_left_title,
    .my_invitation_head_right_title{
		font-size:24upx;
		color:rgba(255,255,255,1)
	}
	.my_invitation_head_left_number,
    .my_invitation_head_right_number{
		margin-top: 20upx;
		font-size:50upx;
		color:rgba(255,255,255,1);
	}
	/* .my_invitation_head_right{
		display: flex;
		width:140upx;
		height:60upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		font-size:32upx;
		color:rgba(36,138,223,1);
		justify-content: center;
		align-items: center; 
	} */
	.my_exchange_list{
		padding-top: 300upx;
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
