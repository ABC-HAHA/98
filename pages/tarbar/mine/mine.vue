<template>
	<view>
		<view class="mine_head">
			<view class="mine_head_content">
				<image :src="msgImg" class="mine_head_news" @tap="toMessage"></image>
				<view class="mine_head_login"  @click="toLogin">
					<image :src="userinfo.userLocalImage" @error="downImg" class="mine_head_portrait"></image>
					<view v-if="userinfo.loginStatus" class="mine_head_login_status">
						<view class="mine_head_name" >{{userinfo.userName}}</view>
						<view class="mine_head_number">{{userinfo.userPhone}}</view>
					</view>
					<view  v-if="!userinfo.loginStatus">
						<view class="mine_head_login_status mine_head_name" style="width:200upx">登录|注册</view>
					</view>
				</view>
			</view>
		</view>
		<view  class="backGroungColor">
			<view class="mine_list">
					<!-- <image class = "mine_image" src="../../../static/jinbi.png"></image> -->
				<view class="mine_item">
					<view class="mine_image_backGround  mine_image_backGround_coin">
						<image class = "mine_image" src="../../../static/jinbi.png" @click="gotoMyCoinList"></image>
					</view>
					<view class="mine_font  coin_font">金币</view>
				</view>
				<view class="mine_item">
					<view class="mine_image_backGround  mine_image_backGround_task">
						<image class = "mine_image" src="../../../static/renwuzhongxin.png" @click="gotoMyTask"></image>
					</view>
					<view class="mine_font"> 任务中心</view>
				</view>
				<view class="mine_item">
					<view class="mine_image_backGround  mine_image_backGround_exchange">
						<image class = "mine_image" src="../../../static/duihuanzhongxin.png" @click="gotoMyExchange"></image>
					</view>
					<view class="mine_font"> 兑换中心</view>
				</view>
				<view class="mine_item">
					<view class="mine_image_backGround  mine_image_backGround_friend">
						<image class = "mine_image" src="../../../static/yaoqinghaoyou.png" @click="gotoMyInvitation"></image>
					</view>
					<view class="mine_font"> 邀请好友</view>
				</view>
				
			</view>
		</view>
		<view class="play_records backGroungColor">
			<view class="play_records_group">
				<view class="play_records_head" @tap="toHistory">
					<view class="records_font">播放记录</view>
					<view class="play_records_more">
						<view class="more_font">更多</view>
						<image class="more_image" src="../../../static/gengduo.png" mode=""></image>
					</view>
				</view>
				<scroll-view scroll-x class="play_records_list_scroll">
					<view class="play_records_list" v-for="item in recordsData" :key="item.id" :id="item.vodId" @tap="toMovie">
						<image class ="play_records_list_image" :src="item.vodPic"></image>
						<view  class = "play_records_list_font">{{item.vodName}} </view>	
					</view>
				</scroll-view>
			</view>	
		</view>
		<view class="mine_other_list">
            <view class="other_list" @tap="toDown">
                <view class="mine_other_list_content">离线缓存</view>
                <image class="mine_other_list_image" src="../../../static/jiantou.png" ></image>
            </view>
            <view class="other_list" @tap="toCollection">
                <view class="mine_other_list_content">我的收藏</view>
                <image class="mine_other_list_image" src="../../../static/jiantou.png" ></image>
            </view>
            <!-- <view class="other_list" @tap="toExchange">
                <view class="mine_other_list_content">兑换码</view>
                <image class="mine_other_list_image" src="../../../static/jiantou.png" ></image>
            </view> -->
            <view class="other_list" @tap="toHelp">
                <view class="mine_other_list_content">帮助与反馈</view>
                <image class="mine_other_list_image" src="../../../static/jiantou.png" ></image>
            </view>
            <view class="other_list" @tap="toSetting">
                <view class="mine_other_list_content">设置</view>
                <image class="mine_other_list_image" src="../../../static/jiantou.png" ></image>
            </view>
		</view>
		<view class="logout" @tap="logout">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                userinfo: {
                    loginStatus: false,
                    userName: '',
                    userPhone: '',
                    userLocalImage: '/static/touxiang.png'
                },
				recordsData:[],
                mineArr: [],
                hasMsg: false,
                msgImg: '/static/xiaoxi.png',
                hasMessage: null
			}
		},
		methods: {
            isOpen(){
                // #ifdef APP-PLUS
                let openflag;
                openflag = plus.sqlite.isOpenDatabase({
                    name: '98TV',
                    path: '_doc/test.db'
                });
                if (openflag) {
                    return true
                } else{
                    return false
                }
                // #endif
            },
            recordsSql(){
                let that = this;
                // #ifdef APP-PLUS
                if (!this.isOpen()) {
                    plus.sqlite.openDatabase({
                        name: '98TV',
                        path: '_doc/test.db',
                        success: function(e){
                            console.log('openDatabase success!');
                        },
                        fail: function(e){
                            console.log('openDatabase failed: '+JSON.stringify(e));
                        }
                    });
                }
                plus.sqlite.selectSql({
                    name: '98TV',
                    sql: 'select * from history',
                    success: function(data){
                        console.log('selectSql success: history');
                        that.recordsData = [];
                        if (data.length > 0) {
                            that.recordsData = data;
                            if (that.recordsData.length > 10) {
                                that.recordsData = that.recordsData.slice(0,10);
                            }
                        }
                        if (that.isOpen()) {
                            plus.sqlite.closeDatabase({
                                name: '98TV',
                                success: function(e){
                                    console.log('closeDatabase success!');
                                },
                                fail: function(e){
                                    console.log('closeDatabase failed: '+JSON.stringify(e));
                                }
                            });
                        }
                    },
                    fail: function(e){
                        console.log('selectSql failed: '+JSON.stringify(e));
                        if (that.isOpen()) {
                            plus.sqlite.closeDatabase({
                                name: '98TV',
                                success: function(e){
                                    console.log('closeDatabase success!');
                                },
                                fail: function(e){
                                    console.log('closeDatabase failed: '+JSON.stringify(e));
                                }
                            });
                        }
                    }
                });
                // #endif
            },
            recordsLogin(){
                let userid = this.$store.state.userInfo.userId;
                let usertoken = this.$store.state.userInfo.loginToken;
                uni.request({
                    url: this.websiteUrl + '/user/get/visit',
                    method: 'GET',
                    header:{
                        Authorization: usertoken
                    },
                    data: {
                        userId: userid
                    },
                    success: res => {
                        if (res.data.status == 1001) {
                            uni.showToast({
                                title: res.data.message,
                                icon: 'none',
                                mask: true
                            });
                            setTimeout(function(){
                                uni.hideToast();
                                uni.navigateTo({
                                    url: '/pages/login/login',
                                    animationType: 'slide-in-bottom'
                                });
                            },800)
                            return
                        }
                        if (res.data.length > 0) {
                            this.mineArr = res.data;
                            for (let i = 0; i < this.mineArr.length; i++) {
                                for (let j = 0; j < this.recordsData.length; j++) {
                                    if (this.recordsData[j].vodId == this.mineArr[i].vodId) {
                                        this.recordsData.splice(j, 1)
                                    }
                                }
                            }
                            this.recordsData = this.recordsData.concat(this.mineArr);
                            if (this.recordsData.length > 10) {
                                this.recordsData = this.recordsData.slice(0,10);
                            }
                        }
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            downImg(){
                let imageInfo = this.$store.state.userImage,
                    networkimg = imageInfo.networkImage;
                uni.downloadFile({
                    url: networkimg,
                    success: function (res) {
                        let tempFilePath = res.tempFilePath;
                        uni.saveFile({
                            tempFilePath: tempFilePath,
                            success: function (res) {
                                let savedFilePath = res.savedFilePath;
                                imageInfo.localImage = savedFilePath;
                                that.$store.commit('storeImage',imageInfo);
                                that.user.userUrl = savedFilePath;
                                uni.showToast({
                                    title: '上传成功',
                                    mask: true
                                });
                                setTimeout(function(){
                                    uni.hideToast();
                                },2000)
                            }
                        })
                    }
                })
            },
			toLogin(){
                if (this.userinfo.loginStatus) {
                    uni.navigateTo({
                    	url: '/pages/editProfile/editProfile',
                        animationType: 'slide-in-right'
                    })
                } else{
                    uni.navigateTo({
                    	url: '/pages/login/login',
                        animationType: 'slide-in-bottom'
                    })
                }
			},
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
			gotoMyTask(){
				uni.switchTab({
					url: '../../../pages/tarbar/task/task'
				})
			},
			toDown(){
				console.log(2222222222222222222222);
                // #ifdef APP-PLUS
                let systemName = plus.os.name.toUpperCase();
				console.log(systemName);
                if (systemName === "ANDROID") {
                    uni.navigateTo({
                        url: "/pages/download/download",
                        animationType: "slide-in-right"
                    })
                } else if (systemName === "IOS") {
                    var downloadView = plus.ios.newObject("downloadViewController");
                    var UIApplicationClass = plus.ios.importClass("UIApplication");
                    var UIAppObj = UIApplicationClass.sharedApplication();
                    var del = plus.ios.invoke(UIAppObj,"delegate");
                    var appWindowObj = plus.ios.invoke(del,"window");
                    var appRootController = plus.ios.invoke(appWindowObj,"rootViewController");
                    plus.ios.invoke(appRootController,"pushViewController:animated:",downloadView,"YES");
                }
                //#endif
            },
            toCollection(){
                if (this.userinfo.loginStatus) {
                    uni.navigateTo({
                    	url: '/pages/collection/collection',
                        animationDuration: 'slide-in-right'
                    })
                } else{
                    uni.navigateTo({
                    	url: '/pages/login/login',
                        animationType: 'slide-in-bottom'
                    })
                }
            },
            /* toExchange(){
                uni.showToast({
                    title: '此功能尚未开发',
                    icon: 'none',
                    mask: true
                })
                setTimeout(function() {
                    uni.hideToast()
                }, 1500);
            }, */
            toHelp(){
                uni.navigateTo({
                	url: '/pages/helpCenter/helpCenter',
                    animationDuration: 'slide-in-right'
                })
            },
            toSetting(){
                uni.navigateTo({
                	url: '/pages/setting/setting',
                    animationDuration: 'slide-in-right'
                })
            },
            toHistory(){
                uni.navigateTo({
                	url: '/pages/playHistory/playHistory',
                    animationDuration: 'slide-in-right'
                })
            },
            toMessage(){
                clearInterval(this.hasMessage)
                uni.navigateTo({
                	url: '/pages/systemMsg/systemMsg',
                    animationDuration: 'slide-in-right'
                })
            },
            logout(){
                let that = this;
                if (!this.userinfo.loginStatus) {
                    return
                }
                uni.showModal({
                    title: '确认退出？',
                    content: '温馨提示：退出后会影响某些功能使用，确认退出？',
                    showCancel: true,
                    cancelText: '取消',
                    confirmText: '确定',
                    success: res => {
                        if (res.confirm) {
                            uni.request({
                                url: that.websiteUrl + '/api/logout',
                                method: 'POST',
                                data: {
                                    userId: that.$store.state.userInfo.userId
                                },
                                success: res => {
                                    if (res.data.status === 0) {
                                        uni.showToast({
                                            title: '退出成功',
                                            mask: true
                                        });
                                        setTimeout(function(){
                                            uni.hideToast();
                                        },2000)
                                        that.$store.commit('logout');
                                        that.$set(that.userinfo,'loginStatus',that.$store.state.isLogin);
                                        that.$set(that.userinfo,'userName',that.$store.state.userInfo.userName);
                                        that.$set(that.userinfo,'userPhone',that.$store.state.userInfo.userPhone);
                                        that.$set(that.userinfo,'userLocalImage','/static/touxiang.png');
                                        that.recordsSql()
                                    }
                                },
                                fail: () => {},
                                complete: () => {}
                            });
                        }
                    }
                });
            },
            toMovie(e){
                let movieId = e.currentTarget.id;
                uni.navigateTo({
                    url: '/pages/playPage/playPage?vodId='+movieId,
                    animationType: 'slide-in-right'
                });
            }
		},
         onShow() {
            let that = this;
            this.$set(this.userinfo,'loginStatus',this.$store.state.isLogin);
            this.$set(this.userinfo,'userName',this.$store.state.userInfo.userName);
            this.$set(this.userinfo,'userPhone',this.$store.state.userInfo.userPhone);
            if (this.userinfo.loginStatus) {
                this.$set(this.userinfo,'userLocalImage',this.$store.state.userImage.localImage);
            } else {
                this.$set(this.userinfo,'userLocalImage','/static/touxiang.png');
            }
            this.recordsSql();
            if (this.userinfo.loginStatus) {
                this.recordsLogin();
            }
            uni.request({
                url: this.websiteUrl + '/api/sysmsg/list',
                method: 'GET',
                data: {
                    deviceId: this.$store.state.deviceId
                },
                success: res => {
                    if (res.data.count > 0) {
                        clearInterval(that.hasMessage);
                        that.hasMessage = setInterval(function () {
                            if (that.hasMsg) {
                                that.hasMsg = false;
                                that.msgImg = '';
                            } else{
                                that.hasMsg = true;
                                that.msgImg = '/static/xiaoxi.png';
                            }
                        },500)
                    } else {
                        that.msgImg = '/static/xiaoxi.png';
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        }
	}
</script>

<style>
	page{
		background:#f5f5f5;
	}
	.backGroungColor{
		background:#FFFFFF;
	}
    .mine_head{
        width: 750upx;
        height: 359upx;
        background:rgba(36,138,223,1);
    }
    .mine_head_content{
        padding-top: 84upx;
    }
    .mine_head_login{
        display: flex;
        flex-direction: row;
        margin-left: 30upx;
        line-height: 50upx;
        align-items: center;
    }
    .mine_head_news{
        width:34upx;
        height:42upx;
        padding-left: 650upx;
    }
    .mine_head_portrait{
        width:142upx;
        height:142upx;
        background:rgba(232,232,232,1);
        border:2px solid rgba(137, 185, 255, 1);
        border-radius:50%;
    }
    .mine_head_login_status{
        margin-left:40upx ;
        margin-top:20upx ;
        
    }
    .mine_head_name{
        font-size:34upx;
        color:rgba(255,255,255,1);
    }
    .mine_head_number{
        font-size:26upx;
        color:rgba(255,255,255,1);
        margin-top:20upx ;
    }
    .mine_list{
        display: flex;
        flex-direction: row;
        width:750upx;
        height:192upx;
       justify-content: center;
       align-items: center;
    }
    .mine_item{
        width :180upx;	
    }
    .mine_image_backGround{
        display: flex;
        width:92upx;
        height:92upx;
        border-radius:50%;
        align-items: center;
        justify-content: center;
        margin:0 auto;
    }
    .mine_image_backGround_coin{
        background:linear-gradient(0deg,rgba(250,209,95,1),rgba(228,143,75,1));
    }
    .mine_image_backGround_task{
        background:linear-gradient(0deg,rgba(126,76,201,1),rgba(168,110,215,1));
    }
    .mine_image_backGround_exchange{
        background:linear-gradient(0deg,rgba(250,71,113,1),rgba(252,102,111,1));
    }
    .mine_image_backGround_friend{
        background:linear-gradient(0deg,rgba(64,118,241,1),rgba(74,156,248,1));
    }

    .mine_image{
        width:42upx;
        height:48upx;
    }
    .mine_font{
        padding-top: 10upx;
        display: flex;
        width:120upx;
        margin:0 auto;
        font-size:30upx;
        color:rgba(45,45,45,1);
        text-align:center;
    }
    .coin_font{
        padding-left: 60upx;
    }

    /* 播放记录*/
    .play_records{
        width: 750upx;
        margin-top: 20upx;
        overflow: hidden;
    }
    .play_records_group{
        margin-left: 30upx; 
    }
    .play_records_head{
        display: flex;
        flex-direction: row;
    }
    .play_records_more{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .records_font{
        width: 616upx;
        height: 80rpx;
        line-height: 80rpx;
        font-size:28upx;
        font-weight:500;
        color:rgba(40,40,40,1);
        
    }
    .more_image{
        margin-left: 10upx;
        width:11upx;
        height:20upx;
    }
    .more_font{
        font-size:24upx;
        color:rgba(153,153,153,1);
    }
    .play_records_list_scroll{
        white-space: nowrap;
		width: 690upx;
    }
    .play_records_list{
        display: inline-flex;
        flex-direction: column;
        width:210upx;
        margin: 0 10upx;
    }
    .play_records_list_image{
        width:210upx;
        height:280upx;
        border-radius:20upx;
        margin-bottom: 16rpx;
        background: url(~@/static/210.png) 0upx 0upx/210upx 280upx no-repeat;
    }
    .play_records_list_font{
		width:210upx;
        font-size:28upx;
        text-align: center;
        color:rgba(45,45,45,1);
        margin-bottom: 16rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    /* 其他列表 */
    .mine_other_list{
        margin-top: 20upx;
    }
    .other_list{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2upx;
        line-height: 100upx;
        background-color: #FFFFFF;
    }
    .other_list:nth-child(3){
        margin-bottom: 20upx;
    }
    .mine_other_list_image{
        width:17upx;
        height:29upx;
    }
    .mine_other_list_content{
        width: 660upx;
        font-size:28upx;
        color:rgba(40,40,40,1);
        margin-left: 30upx;
    }
    .logout{
        display: flex;
        margin-top: 20upx;
        width:750upx;
        height:96upx;
        background:rgba(255,255,255,1);
        font-size:30upx;
        color:rgba(40,40,40,1);
        align-items: center;
        justify-content: center;
    }
</style>
