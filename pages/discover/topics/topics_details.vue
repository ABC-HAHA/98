<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true"  :scroll-with-animation="true" :scroll-top="scrollTop">
				<view class="detail_title">{{topic.topicName}}</view>
				<view class="detail_time">{{topic.topicTime}}</view>
				<view class="detail_introduce">{{topic.topicBlurb}}</view>
                
				<view class ="movie-items">
                    <swiper class="movie-item-arr" display-multiple-items="1" next-margin="470rpx" @change="getCurrent">
                        <swiper-item class="movie-item" :class="[current == index ? ' movie-item-current' : '']" v-for="(movieItem, index) in movieArr" :key="index">
                            <image class="movie-item-img" :class="[current == index ? ' movie-item-img-current' : '']" :src="movieItem.vodPic" mode="scaleToFill" :data-id="movieItem.vodId" @tap="toplay"></image>
                        </swiper-item>
                    </swiper>
				</view>
				<view class="movie-content">
                    <view class="movie-content-name">{{film_details.vodName}}</view>
                    <view class="movie-content-some">
                        <view class="movie-content-info">{{film_details.vodYear || unknow}}</view>
                        <view class="movie-content-point">·</view>
                        <view class="movie-content-info">{{film_details.typeName || unknow}}</view>
                        <view class="movie-content-point">·</view>
                        <view class="movie-content-info">{{film_details.vodArea || unknow}}</view>
                    </view>
                    <view class="movie-content-act">
                        <view class="movie-content-title">导演：</view>
                        <view class="movie-content-man">{{film_details.vodDirector}}</view>
                    </view>
                    <view class="movie-content-act">
                        <view class="movie-content-title">主演：</view>
                        <view class="movie-content-man">{{film_details.vodActor}}</view>
                    </view>
                    <view class="movie-content-item">
                        <view class="movie-content-item-name">简介：</view>
                        <view class="movie-content-item-txt">{{film_details.vodContent}}</view>
                    </view>
				</view>
				
				<view class="hot_comment_group">
					<view class="hot_comment_group_Left"></view>
					<view class="detail_introduce_titel">热门评论</view>
				</view>
				<view class="nodata_group" v-if="commentListShow">
					<image  class="nodata" src="../../../static/nosearch.png" ></image>
				</view>
				<view v-if="!commentListShow"  class = "detail_content" v-for="(newsitem,index1) in commentData" :key="index1" @click="checkOtherComment(newsitem)">
					<commItem :options="newsitem" ></commItem>
				</view>
			</scroll-view>
		</view>
		<view class="foot">
			<input_detail  @sendMessage ="toSendMessage" ></input_detail>
		</view>
	</view>
</template>

<script>
	import input_detail from '@/pages/discover/topics/input_detail.vue';
	import commItem from '@/pages/playPage/commentItem.vue';
    import share from "@/common/share.js";
	var util = require('../../../common/util.js');
	export default {
		data() {
			return {
				scrollTop: 0,
				commentListShow:true,
				style: {
					pageHeight: 0,
					contentViewHeight: 0
				},
				vodId:'',
				topic:{},
				film_details : {},
				commentData: [],
                movieArr: [],
                current: 0,
                unknow: '未知'
			}
		},
		components: {
			input_detail,
			commItem
		},
		onNavigationBarButtonTap(e) {
            let isLogin = this.$store.state.isLogin;
            if (!isLogin) {
                uni.navigateTo({
                    url: '/pages/login/login',
                    animationType:"slide-in-top"
                });
                return
            }
            // #ifdef APP-PLUS
             let shareInfo={
                 href: "http://47.98.171.179:8080/download_page/download.html",
                 title: '98影院，随时随地抢"鲜"看！',
                 desc: "精彩大片抢先看",
                 imgUrl:"/static/98Code.png"
             };
             let that = this;
             let loginToken = this.$store.state.userInfo.loginToken;
             this.shareObj=share(shareInfo,function(index){
                console.log("点击按钮的序号: " + index);
                let shareObj={
                    href:shareInfo.href||"",
                    title:shareInfo.title||"",
                    summary:shareInfo.desc||"",
                    success:(res)=>{
                        console.log("success:" + JSON.stringify(res));
                        that.$nextTick(()=>{
                            that.shareObj.alphaBg.hide();
                            that.shareObj.shareMenu.hide();
                        })
                        uni.request({
                            url: that.websiteUrl + '/api/share/point',
                            method: 'GET',
                            header:{
                                Authorization:loginToken
                            },
                            data: {},
                            success: res => {
                                if (res.data.status == 0) {
                                    console.log(res);
                                } else if (res.data.status == 1001) {
                                    uni.showToast({
                                        title: res.data.message,
                                        icon: 'none',
                                        mask: true
                                    });
                                    setTimeout(function () {
                                        uni.hideToast();
                                        uni.navigateTo({
                                            url:"/pages/login/login",
                                            animationType:"slide-in-top"
                                        });
                                    }, 300)
                                }
                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    },
                    fail:(err)=>{
                        console.log("fail:" + JSON.stringify(err));
                        that.$nextTick(()=>{
                            that.shareObj.alphaBg.hide();
                            that.shareObj.shareMenu.hide();
                        })
                        uni.request({
                            url: that.websiteUrl + '/api/share/point',
                            method: 'GET',
                            header:{
                                Authorization:loginToken
                            },
                            data: {},
                            success: res => {
                                if (res.data.status == 0) {
                                    console.log(res);
                                } else if (res.data.status == 1001) {
                                    uni.showToast({
                                        title: res.data.message,
                                        icon: 'none',
                                        mask: true
                                    });
                                    setTimeout(function () {
                                        uni.hideToast();
                                        uni.navigateTo({
                                            url:"/pages/login/login",
                                            animationType:"slide-in-top"
                                        });
                                    }, 300)
                                }
                            },
                            fail: () => {},
                            complete: () => {}
                        });
                    }
                };
                switch (index) {
                    case 0:
                        shareObj.provider="weixin";
                        shareObj.scene="WXSceneSession";
                        shareObj.type=0;
                        shareObj.imageUrl=shareInfo.imgUrl||"";
                        uni.share(shareObj);
                        break;
                    case 1:
                        shareObj.provider="weixin";
                        shareObj.scene="WXSenceTimeline";
                        shareObj.type=0;
                        shareObj.imageUrl=shareInfo.imgUrl||"";
                        uni.share(shareObj);
                        break;
                    /* case 2:
                        shareObj.provider="sinaweibo";
                        shareObj.type=0;
                        shareObj.imageUrl=shareInfo.imgUrl||"";
                        uni.share(shareObj);
                        break; */
                    case 2:
                        shareObj.provider="qq";
                        shareObj.type=1;
                        shareObj.imageUrl=shareInfo.imgUrl||"";
                        uni.share(shareObj);
                        break;
                    case 3:
                        uni.setClipboardData({
                            data:shareInfo.href,
                            complete() {
                                uni.showToast({
                                    title: "已复制到剪贴板"
                                })
                            }
                        })
                        break;
                    case 4:
                        plus.share.sendWithSystem({
                            type:"web",
                            title:shareInfo.title||"",
                            thumbs:[shareInfo.imgUrl||""],
                            href:shareInfo.href||"",
                            content: shareInfo.desc||"",
                        })
                        break;
                };
            });
            this.$nextTick(()=>{
                this.shareObj.alphaBg.show();
                this.shareObj.shareMenu.show();
            })
            // #endif
		},
		onLoad(options) {
			this.vodId = options.topicId;
			uni.request({
				url: this.websiteUrl + '/api/discover/getRotTopicDesc?topicId=' + this.vodId, //仅为示例，并非真实接口地址。
				success: (res) => {
					if(res.data.status == 0){
						this.task_basic_data = res.data;
						this.topic = res.data.topic;
						this.movieArr = res.data.movie;
                        this.film_details = this.movieArr[this.current];
					}
				}
			});
			uni.request({
				url: this.websiteUrl + '/api/discover/comment/list?topicId=' + this.vodId,
				success: (res) => {
					if(res.data.status == 0){
						if(res.data.list.length>0){
							this.commentData = res.data.list;
							this.commentListShow = false;
						}else{
							this.commentData = [];
							this.commentListShow = true;
						}
					}
				}
			});
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (110); //像素
		},
		methods: {
            getCurrent(e){
                this.current = e.detail.current;
                this.film_details = this.movieArr[this.current];
            },
            toplay(e){
                let movieId = e.target.dataset.id;
                uni.navigateTo({
                    url: '/pages/playPage/playPage?vodId='+movieId,
                    animationType: 'slide-in-right',
                    animationDuration: 300
                });
            },
			checkOtherComment(newsitem){
				var otherComment ={data:[],commentId:newsitem.commentId ,vodId:this.vodId};
				if(newsitem.commentObject){
					otherComment.data= newsitem.commentObject;
				}
				var   data =JSON.stringify(otherComment)
				uni.navigateTo({
					url: '../../../pages/discover/topics/topics_details_comment?commentList='+JSON.stringify(otherComment),
				})
			},
			toSendMessage(data){
				let  self  = this;
				if(this.currentCommentType == 1){
						this.currentCommentId = 0;
					}
				let  requestData = {
							"commentId":'',
							"userId":this.$store.state.userInfo.userId,
							"commentName":this.$store.state.userInfo.userName,
							"commentRid":Number(this.vodId),
							"commentContent":data.inputValue
							}
				uni.request({
					url: this.websiteUrl +'/api/discover/inscomment', //仅为示例，并非真实接口地址。
					method:"POST",
					data:requestData,
                    success: (res) => {
                        var  newData = { commentContent: data.inputValue,
                                            commentId: res.data.commentId,
                                            commentMid: 200,
                                            commentName: this.$store.state.userInfo.userName,
                                            commentObject:[],
                                            commentPid:this.currentCommentId,
                                            commentTime:util.getNowTime('yyyy-MM-dd hh:mm:ss'),
                                            userId: this.$store.state.userInfo.userId,
                                            userPortrait:this.$store.state.userImage.localImage
                                        };
                        self.commentData.push(newData);	
                        self.commentListShow = false;
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
		padding-left: 30upx;
		position: fixed;
		width: 100%;
		height: 100upx;
		min-height: 100upx;
		left: 0upx;
		/* top:10upx; */
		bottom:-5upx;
        background: #FFFFFF;
	}
	.detail_title{
		width:691upx;
		font-size:30upx;
		font-weight:bold;
		color:rgba(45,45,45,1);
		line-height:46upx;
		display: flex;
		/* justify-content: center; */
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
    
	.movie-items{
        width: 100%;
        height: 280rpx;
		margin-top: 40upx;
	}
    .movie-item-arr{
        width: 690rpx;
        height: 280rpx;
        padding-left: 30rpx;
        padding-right: 30px;
    }
    .movie-item{
        top: 14rpx;
        transition: top 0.5s;
    }
    .movie-item-img{
        width: 180rpx;
        height: 252rpx;
        border-radius: 20rpx;
        background: url(~@/static/210.png) 0upx 0upx/180upx 252upx no-repeat;
        transition: width 0.5s, height 0.5s;
    }
    .movie-item-current{
        top: 0rpx;
    }
    .movie-item-img-current{
        width: 200rpx;
        height: 280rpx;
        border-radius: 20rpx;
        background: url(~@/static/210.png) 0upx 0upx/200upx 280upx no-repeat;
    }
    .movie-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 40rpx;
    }
    .movie-content-name{
        font-size: 30rpx;
        line-height: 30rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #222222;
        margin-left: 30rpx;
    }
    .movie-content-some{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 30rpx;
        margin-top: 20rpx;
        margin-bottom: 30rpx;
    }
    .movie-content-info{
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
    }
    .movie-content-point{
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
    }
    .movie-content-act,
    .movie-content-item{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 30rpx;
    }
    .movie-content-title,
    .movie-content-item-name{
        font-size: 24rpx;
        line-height: 40rpx;
        color: #222222;
        font-weight: bold;
        font-family: PingFang-SC-Medium;
    }
    .movie-content-man,
    .movie-content-item-txt{
        width: 600rpx;
        font-size: 24rpx;
        line-height: 40rpx;
        color: #666666;
        font-weight: 500;
        font-family: PingFang-SC-Medium;
    }
    
	.hot_comment_group{
		margin-top: 40upx;
		margin-left: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.hot_comment_group_Left{
		height: 30upx;
		width:6upx;
		background-color:rgba(36,138,223,1) ;
		border-radius:3upx;	
	}
	
	.detail_introduce_titel{
		width: 180upx;
		text-align: center;
		/* border-left: 10upx solid rgba(36,138,223,1) ;
		border-bottom-left-radius: 3upx; */
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
