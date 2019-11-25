<template>
	<view class="totalItem">
		<view class="big_item">
			<view class="itemList">
				<image class = "item_image" :src="image_src" ></image>
				<view class="item_describe">
					<text class="title">{{options.taskName}}</text><span class="title_span" v-if="options.taskPointDesc">{{options.taskPointDesc}}</span>
					<view class="task_reword">
                        <text>{{options.taskDesc}}</text>
                        <text v-if="options.luckNum" class="luckNum">{{options.luckNum}}</text>
                        <text v-if="options.luckNum" class="luckNum" @tap="copyLucknum" :data-num="options.luckNum">复制</text>
                    </view>
				</view>
			</view>
			<view class="item_btn" v-bind:class="[isActive ? 'item_btn_complete' : 'item_btn_incomplete']" @tap="tapTab(options.taskOper)">{{taskOperDesc}}</view>
		</view>
	</view>
	
</template><strong></strong>

<script>
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			},
			fromPage:{
				type:Number
			}
		},
		methods: {
			 tapTab(data){ //点击tab-bar
				 if(data===1){
					 if(this.options.complete ==1){
						 return;
					 }else{
						 var  uid = '';
						 if(this.$store.state.userInfo.userId){
						 	uid = this.$store.state.userInfo.userId;
						 }
						 if(this.$store.state.isLogin){
							  uni.request({
							 	url: this.websiteUrl +'/api/task/everydayTask/'+this.options.taskId, //去签到。
							 	method:"POST",
								header:{Authorization:this.$store.state.userInfo.loginToken},
							 	data:{userId:uid},
							 	success: (res) => {
									if(res.data.status == 0){
										if(res.data.sign == 1 ){
											this.isActive = true;
										}else{
											this.isActive = false;
										}
										this.options.complete = res.data.sign;
										this.taskOperDesc = res.data.taskOperDesc;
										this.$emit("changeData",{userPoints:res.data.userPoints,coutinueMark:res.data.coutinueMark});
									}else if (res.data.status == 1001){
										 uni.navigateTo({
											url: '../../../pages/login/login'
										})
									}
							 	}
							 });
						 }else{
							 uni.navigateTo({
							 	url: '../../../pages/login/login'
							 })
						 }
					 }
				 }else if(data===2){
				 	uni.switchTab({
				 		url: '../../../pages/tarbar/share/share'
				 	})
				 }else if(data===3){
                    if (this.options.complete == 1) {
                        return
                    } else {
                        uni.switchTab({
                         	url: '../../../pages/tarbar/discover/discover'
                        })
                    }
				 }else if(data===0){
                    if (this.options.complete == 1) {
                        return
                    } else {
                        if (!this.$store.state.isLogin) {
                            uni.navigateTo({
                                url:"/pages/login/login",
                                animationType:"slide-in-bottom"
                            });
                            return
                        }
                        let taskid = this.options.taskId;
                        let luckflag = this.options.luck.toString();
                        let userid = this.$store.state.userInfo.userId;
                        let token = this.$store.state.userInfo.loginToken;
                        if (this.options.type == 3) {
                            this.$emit('exchange', {status: this.options.type});
                        } else {
                            uni.request({
                                url: this.websiteUrl + '/api/exchange/download',
                                header: {
                                    Authorization: token
                                },
                                method: 'POST',
                                data: {
                                    userId: userid,
                                    exchangeId: taskid,
                                    luck: luckflag
                                },
                                success: res => {
                                    let exchangeStatus = res.data.status;
                                    this.$emit('exchange', {status: exchangeStatus});
                                },
                                fail: () => {},
                                complete: () => {}
                            });
                        }
                    }
				}
			},
            copyLucknum(e){
                let num = e.target.dataset.num;
                // #ifdef APP-PLUS
                uni.setClipboardData({
                    data: num,
                    success: function () {
                        uni.showToast({
                            title: '复制成功',
                            mask: true
                        });
                        setTimeout(function(){
                            uni.hideToast();
                        },2000)
                    }
                });
                // #endif
            }
        },
        watch:{
            options(newValue, oldValue){
                if (newValue.taskOperDesc != oldValue.taskOperDesc) {
                    this.taskOperDesc = newValue.taskOperDesc;
                }
                if (newValue.complete == 1) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
                if(this.fromPage == 1){
                    this.image_src ="../../../static/taskItem"+newValue.taskId+".png";
                }else{
                    if (newValue.luck) {
                        this.image_src ="../../static/taskItem1"+newValue.taskId+".png";
                    } else {
                        this.image_src ="../../static/taskItem2"+newValue.type+".png";
                    }
                }
            }
        },
		data() {
				return {
					image_src:"",
					isActive:true,
					taskOperDesc:''
				}
			},
		created() {
            if(this.fromPage == 1){
                this.image_src ="../../../static/taskItem"+this.options.taskId+".png";
            }else{
                if (this.options.luck) {
                    this.image_src ="../../static/taskItem1"+this.options.taskId+".png";
                } else {
                    this.image_src ="../../static/taskItem2"+this.options.type+".png";
                }
            }
            if(this.options.complete == 1 ){
                this.isActive = true;
            }else{
                this.isActive = false;
            }
            this.taskOperDesc = this.options.taskOperDesc;
        }
	}
</script>

<style>
	.totalItem{
		width: 750upx;
		border-bottom: 1upx solid rgba(227,227,227,1);
	}
	.big_item{
		height: 150upx;
		margin-left: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center; 
	}
	.item_describe{
		margin-left: 20upx;
	}
	.item_image{
		width:40upx;
		height:42upx;
	}
	.itemList{
		width:550upx;
		display: flex;
		flex-direction: row;
		align-items: center;
        margin-left: 10rpx;
	}
	.title{
		margin-left: 20upx;
		font-size:28upx;
		color:#333333;
	}
	.title_span{
		margin-left: 20upx;
		font-size:28upx;
		color:#DFA44D;
	}
	.task_reword{
		margin-left: 20upx;
		font-size:22upx;
	}
    .luckNum{
        font-size:22upx;
        color: #248ADF;
    }
    .luckNum:nth-of-type(2){
        margin-right: 38rpx;
    }
	.item_btn{
		display: flex;
		justify-content: center;
		align-items: center; 
		width:125upx;
		height:46upx;
		background-color:#248ADF ;
		color: #FFFFFF;
		border-radius:40upx ;
		font-size:24upx;
	}
	.item_btn_complete{
		border: 1upx solid #248ADF;
		background-color:#FFFFFF ;
		color: #248ADF;
	}
	.item_btn_incomplete{
		background-color:#248ADF ;
		color:#FFFFFF ;
		}
</style>
