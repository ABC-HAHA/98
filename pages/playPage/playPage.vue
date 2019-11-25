<template>
	<view class="playVideoPage">
		<view class="playHead">
			<video id="myVideo" autoplay v-bind:initial-time="initialTime" v-bind:src="playTvSrc" @ended="videoEnd" @error="videoErrorCallback"
			 @fullscreenchange="fullscreenchangeback" @play="videoPlayBack" @timeupdate="timeUpdateToshare" controls>
				<cover-view v-show="videoToShareStatus" class="mask_background"></cover-view>
				<!-- <cover-image  v-if = "beginPlay" class="go_back_img" src ="../../static/fanhui.png" @tap="goBack"></cover-image> -->
			</video>
		</view>
		<view class="conten_group" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
			 :scroll-top="scrollTop">
				<view class="movie_detial">
					<view class="selected_works_all">
						<view class="movie_titel">{{allsuccessData.vodName}}</view>
						<view class="all_font movie_title_detail" @tap="togglePopup('detail')">
							<view class="">简介</view>
							<image class="selected_more" src="../../static/gengduo.png"></image>
						</view>
					</view>
					<view class="movie_from_titel">{{allsuccessData.typeName}}</view>
					<view class="movie_from all_font">影片来源:{{allsuccessData.vodArea}}</view>
					<view class="movie_detial_feedback all_font">
						<view class="comment_feedback_total">
							<image class="comment_feedback_image" src="../../static/pinglun.png"></image>
							<view class="comment_titel">{{allsuccessData.commentNum}}条评论</view>
						</view>
						<view class="comment_feedback_total" @tap="gotoFeedback">
							<image class="comment_feedback_image" src="../../static/fankui.png"></image>
							<view class="feedback_title">意见反馈</view>
						</view>
					</view>
				</view>
				<hr class="HengLine" />
				<view class="selected_works" v-if="select_status">
					<view class="selected_works_all">
						<view class="selected_works_titel">选集</view>
						<view class="selected_works_more" @tap="togglePopup('selected_works')">
							<view class="">更多</view>
							<image class="selected_more" src="../../static/gengduo.png"></image>
						</view>
					</view>
					<scroll-view id="tab-bar" class="selected_works_list" scroll-x :scroll-left="scrollLeft">
						<view class="select_works_item" v-for="(tab,index) in allsuccessData.vodPlayUrl" :key="tab.id" :class="tabIndex==index ? 'active' : ''"
						 :id="index" :data-current="index" @tap="toXuanji">
							{{tab.playName}}</view>
					</scroll-view>
				</view>
				<view class="video-guanggao">
					<swiper class="video-guanggao-swiper" :autoplay="autoPlay" circular="true" vertical="true">
						<swiper-item class="video-guanggao-item" v-for="(adverItem, index) in advertArr" :key="index">
							<image class="video-guanggao-item" :src="adverItem.advertPath" mode="scaleToFill" :data-url="adverItem.advertUrl"
							 @tap="gotoWeb"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="comment_area">
					<view class="hot_comment_group">
						<view class="hot_comment_group_Left"></view>
						<view class="hot_comment">热门评论</view>
					</view>
					<view class="nodata_group" v-if="commentListShow">
						<image class="nodata" src="../../static/nosearch.png"></image>
					</view>
					<view v-if="!commentListShow" v-for="(newsitem,index1) in commentData" :key="index1">
						<commItem :options="newsitem" @checkOtherContent="checkOtherContent(index1 ,newsitem,'content')"></commItem>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="foot">
			<chatinput v-if="loadSurvey" ref="chatinput" @sendComent="toSendComent" @inputFocusEvent="bigInputFocus"
			 :imageStatus="loadComplent" @inputBlurEvent="bigInputBlur" @addMyLikeEvent="toAddLike" @toDownLoadEvent="toDownLoad"
			 @toShareEvent="toShare" @toLoginEvent="toLogin"></chatinput>
		</view>
		<uni-popup :show="type === 'detail'" position="bottom">
			<scroll-view scroll-y class="detail_infor film_detail_infor" :style="{height:style.detailViewHeight+'px'}">
				<view class="detail_group">
					<view class="all_detail_title">
						<view class="movie_titel">{{allsuccessData.vodName}}</view>
						<image class="content_detail_close" src="../../static/guanbi.png" mode="" @tap="togglePopup('')"></image>
					</view>
					<hr>
					</hr>
					<view class="movie_titel_center">
						<view>评分: </view>
						<view>分类: {{allsuccessData.typeName}}</view>
						<view>导演: {{allsuccessData.vodDirector}}</view>
						<view>演员: {{allsuccessData.vodActor}}</view>
					</view>
					<view class="movie_titel_bottom">
						<view>简介</view>
						<view class="movie_titel_bottom_detail">{{allsuccessData.vodBlurb}}</view>
					</view>
				</view>
			</scroll-view>
		</uni-popup>
		<uni-popup :show="type === 'content'" position="bottom">
			<view class="all_content" :style="{height:style.allConment+'px'}">
				<view class="content_detail_infor">
					<view class="content_detail_title">全部评论</view>
					<image class="content_detail_close" src="../../static/guanbi.png" mode="" @tap="togglePopup('')"></image>
				</view>
				<scroll-view scroll-y class="detail_infor" :style="{height:style.commentViewHeight+'px'}">
					<view v-if='!otherCommentListShow' v-for="(newsitem,index1) in otherContentList" :key="index1">
						<commItem :options="newsitem"></commItem>
					</view>
					<view class="nodata_group">
						<image v-if="otherCommentListShow" class="nodata" src="../../static/nosearch.png"></image>
					</view>
				</scroll-view>
				<view class="foot">
					<chatinput v-if="loadSurvey" ref="chatinput" :imageStatus="loadComplent" @sendComent="toSendComent"
					 @inputFocusEvent="bigInputFocus" @inputBlurEvent="bigInputBlur" @addMyLikeEvent="toAddLike" @toDownLoadEvent="toDownLoad"
					 @toShareEvent="toShare" @toLoginEvent="toLogin"></chatinput>
				</view>
			</view>
		</uni-popup>
		<uni-popup :show="type === 'selected_works'" position="bottom">
			<scroll-view scroll-y class="detail_infor" v-bind:style="{height:style.detailViewHeight+'px'}">
				<view class="popup_select">
					<view class="content_detail_infor">
						<view class="content_detail_title">选集</view>
						<image class="content_detail_close" src="../../static/guanbi.png" mode="" @tap="togglePopup('')"></image>
					</view>
					<view>
						<view class="select_works_item" style=";" v-for="(tab,index) in allsuccessData.vodPlayUrl" :key="tab.id" :class="tabIndex==index ? 'active' : ''"
						 :id="index" :data-current="index" @tap="toXuanji">
							{{tab.playName}}</view>
					</view>
				</view>
			</scroll-view>
		</uni-popup>
		<uni-popup :show="type === 'downLoad_selected_works'" position="bottom">
			<scroll-view scroll-y class="detail_infor" v-bind:style="{height:style.detailViewHeight+'px'}">
				<view class="popup_select">
					<view class="content_detail_infor">
						<view class="content_detail_title">下载</view>
						<image class="content_detail_close" src="../../static/guanbi.png" mode="" @tap="togglePopup('')"></image>
					</view>
					<view>
						<view class="select_works_item" style=";" v-for="(tab,index) in allsuccessData.vodPlayUrl" :key="tab.id" :class="downIndex==index ? 'active' : ''"
						 :id="index" :data-current="index" @tap="toAddDownLoad">
							{{tab.playName}}</view>
					</view>
				</view>
			</scroll-view>
		</uni-popup>
		<uni-popup :show="type === 'bottom_share'" position="bottom" :shareStatus=true @hidePopup="togglePopup('close_bottom_share')">
			<view class="shareGroup">
				<view v-if="videoToShareStatus" class="share_text">分享可继续观看</view>
				<share-page class="share_popup" @failShareEvent="failShare" @successShareEvent="successShare" @togglePopupEvent="togglePopup('close_bottom_share')"></share-page>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import commItem from '@/pages/playPage/commentItem.vue';
	import chatinput from '@/pages/playPage/chatinput.vue';
	import uniPopup from '@/pages/playPage/uni-popup.vue';
	import sharePage from '@/pages/playPage/share.vue';
	var util = require('../../common/util.js');
	import share from "@/common/share.js";
	export default {
		components: {
			commItem,
			chatinput,
			uniPopup,
			sharePage
		},
		//大小发生改变
		onResize() {
			if (this.pageChangeBig) {
				this.pageChangeBig = false;
			} else {
				this.bigInputBlur();
			}
		},
		onHide() {
			this.videoContext.pause();
			this.autoPlay = false;
		},
		onShow() {
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (660); //像素
			this.style.detailViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (540); //像素
			this.style.commentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (750); //像素
			this.style.allConment = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (540); //像素
			this.$nextTick(function() {
				this.videoContext = uni.createVideoContext('myVideo', this);
				this.videoContext.play();
			})
			this.autoPlay = true;
		},
		onUnload() {
			this.autoPlay = false;
		},
		data() {
			return {
				scrollLeft: 0,
				baseDateName: "98TV",
				baseDataSrc: '_doc/test.db',
				type: '',
				select_status: false,
				playTvSrc: "",
				playTvImg: "",
				beginPlay: false,
				videoToShareStatus: false,
				vodId: 0,
				allsuccessData: {},
				tabIndex: 0,
				downIndex: 0,
				collectionNum: '',
				pageChangeBig: true,
				otherContentList: [],
				otherCommentListShow: false,
				commentListShow: false, // 是否有评论
				currentCommentType: 1,
				currentCommentId: 0,
				currentCommentMid: 0,
				currentCommentIndex: 0,
				loadSurvey: true, // 是否改变组件的值
				loadComplent: false,
				danmuList: [],
				commentData: [],
				name: 'xcecd@qq.com',
				style: {
					pageHeight: 0,
					detailViewHeight: 0,
					contentViewHeight: 0,
					commentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
					allConment: 0
				},
				scrollTop: 0,
				messages: [{
					user: 'home',
					type: 'head', //input,content 
					content: '你好!'
				}],
				initialTime: 0,
				currentPlayTime: 0,
				sharingStatus: false,
				isFullscreen: false,
				autoPlay: false,
				advertArr: []
			}
		},
		onLoad(options) {
			var self = this;
			self.vodId = options.vodId;
			if (self.$store.state.userInfo.userId) {
				var uid = self.$store.state.userInfo.userId;
			} else {
				var uid = '';
			}
			self.checkIShareStatus((data) => {
				if (data) {
					var data1 = JSON.parse(data);
				} else {
					var data1 = [];
				}
				if (data1.length > 0) {
					self.initialTime = Number(data1[0].playTime);
					self.sharingStatus = Boolean(data1[0].isShare);
					if (data1[0].partsNo) {
						self.tabIndex = data1[0].partsNo;
					}
				}
				uni.request({
					url: self.websiteUrl + '/api/home/play?vodId=' + self.vodId + '&userId=' + uid,
					success: (res) => {
						self.allsuccessData = res.data;
						console.log(self.allsuccessData);
						if (self.allsuccessData) {
							if (self.allsuccessData.trgRemark == 'VIP' && !this.$store.state.isLogin) {
								uni.navigateBack({
									delta: 1
								});
								// uni.switchTab({
								// 	url: '../../pages/tarbar/home/home'
								// })
								uni.navigateTo({
									url: '../../pages/login/login'
								})
								return;
							}
							if (self.allsuccessData.visitInfo) {
								self.initialTime = self.allsuccessData.visitInfo.playTime;
								self.tabIndex = self.allsuccessData.visitInfo.partsNo;
								self.scrollLeft = 6.5 * (self.tabIndex + 3);
							}
							if ((self.allsuccessData.shareStatus && self.allsuccessData.shareStatus == "Y") && ((self.allsuccessData.vodIsShare &&
									self.allsuccessData.vodIsShare == "N") || (self.allsuccessData.visitInfo && self.allsuccessData.visitInfo
									.isShare && self.allsuccessData.visitInfo.isShare == "Y"))) {
								self.sharingStatus = true;
							}
							if (self.allsuccessData.vodPicThumb == '') {
								self.playTvImg = self.allsuccessData.vodPic;
							} else {
								self.playTvImg = self.allsuccessData.vodPicThumb;
							}
							self.playTvSrc = self.allsuccessData.vodPlayUrl[self.tabIndex].playUrl;
							self.currentCommentMid = self.allsuccessData.typeId1;
							if (self.allsuccessData.vodPlayUrl && self.allsuccessData.vodPlayUrl.length > 1) {
								self.select_status = true;
							} else {
								self.select_status = false;
							}
							if (self.allsuccessData.commentList) {
								self.commentData = self.allsuccessData.commentList;
							} else {
								self.commentData = [];
							}
							if (self.commentData.length > 0) {
								self.commentListShow = false;
							} else {
								self.commentListShow = true;
							}
							if (self.allsuccessData.commentNum) {
								self.loadComplent = true;
							} else {
								self.loadComplent = false;
							}
							if (self.allsuccessData.advertInfo) {
								self.advertArr = self.allsuccessData.advertInfo;
							}
						}
					}
				});
			})
		},

		// 退出该页面
		onBackPress() {
			this.backPress();
		},
		methods: {
			gotoWeb(e) {
				let url = e.target.dataset.url;
				// #ifdef APP-PLUS
				plus.runtime.openWeb(url);
				this.videoContext.pause();
				// #endif
			},
			backPress() {
				var self = this;
				if (this.$store.state.isLogin) {
					var isSharing = self.sharingStatus ? "Y" : "N";
					uni.request({
						url: this.websiteUrl + '/user/add/visit',
						method: "POST",
						header: {
							Authorization: this.$store.state.userInfo.loginToken
						},
						data: {
							"userId": Number(this.$store.state.userInfo.userId),
							"vodId": Number(this.vodId),
							"vodType": this.allsuccessData.typeId1,
							"partsNo": Number(this.tabIndex),
							"partsUrl": this.allsuccessData.vodPlayUrl[self.tabIndex].playUrl,
							"playTime": String(self.currentPlayTime),
							"isShare": isSharing,
						},
						success: (res) => {}
					});
				} else {
					// #ifdef APP-PLUS
					if (!plus.sqlite.isOpenDatabase({
							name: self.baseDateName,
							path: self.baseDataSrc
						})) {
						plus.sqlite.openDatabase({
							name: self.baseDateName,
							path: self.baseDataSrc,
							success: function(e) {
								console.log('openDatabase success!');
								self.executeSQL();
							},
							fail: function(e) {
								console.log('openDatabase failed: ' + JSON.stringify(e));
							}
						});
					} else {
						self.executeSQL();
					}
					// #endif
				}
			},
			async toXuanji(e) { //点击tab-bar
				let tabIndex = e.currentTarget.id;
				this.playTvSrc = this.allsuccessData.vodPlayUrl[tabIndex].playUrl;
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					this.tabIndex = tabIndex;
					if (this.tabIndex >= 5 && this.type === 'selected_works') {
						this.scrollLeft = 6.5 * (this.tabIndex + 3)
					}
				}
				this.togglePopup('')
			},
			// 播放结束
			videoEnd() {
				if (this.select_status) {
					this.tabIndex++;
					this.playTvSrc = this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl;
					this.videoContext.play();
				}
			},
			fullscreenchangeback(e) {
				this.isFullscreen = e.detail.fullScreen;
			},
			//视频开始播放
			videoPlayBack() {
				this.beginPlay = true;
				uni.getNetworkType({
					success: function(res) {
						if (res.networkType != 'wifi') {
							// #ifdef APP-PLUS
							plus.nativeUI.toast("当前非WiFi环境注意流量消耗!");
							// #endif
						}
					}
				});
			},
			//意见反馈
			gotoFeedback() {
				uni.navigateTo({
					url: '../../pages/feedback/feedback'
				})
			},
			//点击视频
			togglePopup(type) {
				if (type == "close_bottom_share") {
					this.type = '';
					this.videoToShareStatus = false;
				}
				this.type = type;
				this.currentCommentType = 1;
				this.currentCommentMid = this.allsuccessData.typeId1;

			},
			// 显示其他评论
			checkOtherContent(index, comment, type) {
				this.currentCommentIndex = index;
				this.type = type;
				this.currentCommentType = 2;
				this.currentCommentId = comment.commentId;
				this.currentCommentMid = comment.commentMid;
				this.otherContentList = [];
				var otherCommentItem = {
					commentContent: '',
					commentId: '',
					commentMid: '',
					commentName: '',
					commentObject: [],
					commentPid: '',
					commentTime: '',
					userId: '',
					userPortrait: ''
				};
				otherCommentItem.commentContent = this.allsuccessData.commentList[index].commentContent;
				otherCommentItem.commentId = this.allsuccessData.commentList[index].commentId;
				otherCommentItem.commentMid = this.allsuccessData.commentList[index].commentMid;
				otherCommentItem.commentName = this.allsuccessData.commentList[index].commentName;
				otherCommentItem.commentPid = this.allsuccessData.commentList[index].commentPid;
				otherCommentItem.commentTime = this.allsuccessData.commentList[index].commentTime;
				otherCommentItem.userId = this.allsuccessData.commentList[index].userId;
				otherCommentItem.userPortrait = this.allsuccessData.commentList[index].userPortrait;
				this.otherContentList.push(otherCommentItem);
				if (this.allsuccessData.commentList[index].commentObject) {
					for (var i = 0; i < this.allsuccessData.commentList[index].commentObject.length; i++) {
						this.otherContentList.push(this.allsuccessData.commentList[index].commentObject[i]);
					}
				}
				if (this.otherContentList.length > 0) {
					this.otherCommentListShow = false;
				} else {
					this.otherCommentListShow = true;
				}
			},
			toSendComent(data) { // 添加评论
				let self = this;
				if (this.currentCommentType == 1) {
					this.currentCommentId = 0;
				}
				// self.commentData =[];
				uni.request({
					url: this.websiteUrl + '/api/comment/save', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						"commentId": Number(this.currentCommentId),
						"userId": Number(this.$store.state.userInfo.userId),
						"commentName": this.$store.state.userInfo.userName,
						"commentMid": Number(this.currentCommentMid),
						"commentRid": Number(this.vodId),
						"commentContent": data.inputValue
					},
					success: (res) => {
						// #ifdef APP-PLUS
						plus.nativeUI.toast("发表成功!");
						// #endif
						var requesData = {
							commentContent: data.inputValue,
							commentId: res.data,
							commentMid: Number(this.currentCommentMid),
							commentName: this.$store.state.userInfo.userName,
							commentObject: [],
							commentPid: this.currentCommentId,
							commentTime: util.getNowTime('yyyy-MM-dd hh:mm:ss'),
							userId: Number(this.$store.state.userInfo.userId),
							userPortrait: this.$store.state.userImage.localImage
						};
						this.allsuccessData.commentNum++;
						if (self.currentCommentType == 1) {
							self.commentData.push(requesData);
							self.commentListShow = false;
						} else {
							self.commentData[this.currentCommentIndex].commentObject.push(requesData);
							this.commentListShow = true;
							this.$nextTick(() => {
								this.commentListShow = false;
							})
							this.otherCommentListShow = false;
						}
					}
				});
			},
			videoErrorCallback(e) {
				this.beginPlay = true;
			},

			failShare() {
				this.sharingStatus = true;
				this.togglePopup('close_bottom_share')
			},
			successShare() {
				this.sharingStatus = true;
				this.togglePopup('close_bottom_share')
			},
			timeUpdateToshare(e) {
				this.currentPlayTime = e.detail.currentTime;
				if (e.detail.currentTime > 600 && !this.sharingStatus) {
					this.videoToShareStatus = true;
					this.videoContext.pause();
					if (this.isFullscreen) {
						this.videoContext.exitFullScreen();
					}
					this.togglePopup('bottom_share')
				}
			},
			goBack() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
			//聚焦
			bigInputFocus() {
				this.pageChangeBig = true;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
				const res = uni.getSystemInfoSync();
				var plat = res.platform;
				if (plat != 'ios') {
					this.style.allConment = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (1120); //像素
				}
				this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (1220); //像素
				this.style.detailViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (1210); //像素
				this.style.commentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (1300); //像素 1250
			},
			//失交
			bigInputBlur() {
				this.pageChangeBig = false;
				if (this.$refs.chatinput) {
					this.$refs.chatinput.inputFocusStatus = false;
				}
				this.loadSurvey = false;
				this.$nextTick(() => {
					this.loadSurvey = true
				})
				const res = uni.getSystemInfoSync();
				var plat = res.platform;
				this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (660); //像素
				this.style.detailViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (540); //像素
				this.style.commentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (750); //像素
				this.style.allConment = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (540); //像素
			},
			//收藏
			toAddLike() {
				if (this.collectionNum == '') {
					uni.request({
						url: this.websiteUrl + '/user/add/collect',
						method: "POST",
						header: {
							Authorization: this.$store.state.userInfo.loginToken
						},
						data: {
							"userId": this.$store.state.userInfo.userId,
							"vodId": Number(this.vodId),
							"vodType": this.allsuccessData.typeId1,
							"partsNo": Number(this.tabIndex),
							"partsUrl": this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl,
							"playTime": "10:25"
						},
						success: (res) => {
							if (res.data.status == 1001) {
								uni.navigateTo({
									url: '../../pages/login/login'
								})
							} else {
								this.collectionNum = res.data;
								if (this.collectionNum) {
									this.loadComplent = true;
									this.loadSurvey = false;
									this.$nextTick(() => {
										this.loadSurvey = true
									})
									// #ifdef APP-PLUS
									plus.nativeUI.toast("收藏成功!");
									// #endif
								} else {
									// #ifdef APP-PLUS
									plus.nativeUI.toast("收藏失败!");
									// #endif
								}
							}
						}
					});
				} else {
					uni.request({
						url: this.websiteUrl + '/user/del/collect',
						method: "POST",
						data: [Number(this.collectionNum)],
						success: (res) => {
							this.collectionNum = '';
							this.loadComplent = false;
							// this.$refs.chatinput.collectImage = false;
							this.loadSurvey = false;
							this.$nextTick(() => {
								this.loadSurvey = true
							})
							// #ifdef APP-PLUS
							plus.nativeUI.toast("收藏取消!");
							// #endif
						}
					});
				}
			},
			//点击下载按钮
			toDownLoad() {
				if (!this.$store.state.isLogin) {
					uni.navigateTo({
						url: "/pages/login/login",
						animationType: "slide-in-bottom"
					});
					return
				}
				let userId = this.$store.state.userInfo.userId;
				let token = this.$store.state.userInfo.loginToken;
				let that = this;
				uni.request({
					url: this.websiteUrl + '/api/exchange/permission',
					header: {
						Authorization: token
					},
					method: 'GET',
					data: {
						userId: userId
					},
					success: res => {
						let data = res.data;
						if (data.status == 0) {
							if (data.userDownload > 0) {
								if (that.select_status) {
									that.togglePopup('downLoad_selected_works');
								} else {
									that.toSendDownLoadData();
								}
							} else {
								uni.showToast({
									title: '请到兑换中心兑换下载次数',
									icon: 'none',
									mask: true
								});
								setTimeout(function() {
									uni.hideToast();
								}, 2000)
							}
						} else if (data.status == 1001) {
							uni.showToast({
								title: data.message,
								icon: 'none',
								mask: true
							});
							setTimeout(function() {
								uni.hideToast();
								uni.navigateTo({
									url: "/pages/login/login",
									animationType: "slide-in-bottom"
								});
							}, 300)
						} else {
							uni.showToast({
								title: data.message,
								icon: 'none',
								mask: true
							});
							setTimeout(function() {
								uni.hideToast();
							}, 2000)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//选集添加下载
			toAddDownLoad(e) {
				this.downIndex = e.currentTarget.id;
				this.toSendDownLoadData()
			},
			toSendDownLoadData() {
				// #ifdef APP-PLUS
				var self = this;
				let systemName = plus.os.name.toUpperCase();
				if (!self.$store.state.isDown) {
					uni.getNetworkType({
						success: function(res) {
							if (res.networkType != 'wifi') {
								plus.nativeUI.confirm("确定非WiFi下载?", function(e) {
									if (e.index == 0) {
										switch (systemName) {
											case "ANDROID":
												self.sendDownLoadToAndroid();
												break;
											case "IOS":
												self.sendDownLoadToIOS();
												break;
										}
									}
								}, {
									"title": "提示",
									"buttons": ["Yes", "No"],
									"verticalAlign": "center"
								});
							} else {
								switch (systemName) {
									case "ANDROID":
										self.sendDownLoadToAndroid();
										break;
									case "IOS":
										self.sendDownLoadToIOS();
										break;
								}
							}
						}
					});
				} else {
					switch (systemName) {
						case "ANDROID":
							self.sendDownLoadToAndroid();
							break;
						case "IOS":
							self.sendDownLoadToIOS();
							break;
					}
				}
				// #endif
			},
			// 发送数据到安卓
			sendDownLoadToAndroid() {
				let userId = this.$store.state.userInfo.userId;
				let token = this.$store.state.userInfo.loginToken;
				// #ifdef APP-PLUS
				var videoDown = plus.android.importClass('com.tjyz.video.download.TS');
				var down = new videoDown();
				if (down.getDownload()) {
					plus.nativeUI.toast("当前已有下载任务 请稍后!");
					return;
				}
				var partNumber = '';
				var partUrl = this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl;
				if (this.select_status) {
					partNumber = this.allsuccessData.vodPlayUrl[this.downIndex].playName;
					partUrl = this.allsuccessData.vodPlayUrl[this.downIndex].playUrl;
				}
				down.getTSFile(partUrl, this.allsuccessData.vodName, partNumber);
				plus.nativeUI.toast("已添加下载队列!");
				uni.request({
					url: this.websiteUrl + '/api/download/upd',
					header: {
						Authorization: token
					},
					method: 'POST',
					data: {
						userId: userId
					},
					complete: (res) => {
						console.log(res);
					}
				});
				// #endif
			},
			//发送数据到iOS
			sendDownLoadToIOS() {
				let userId = this.$store.state.userInfo.userId;
				let token = this.$store.state.userInfo.loginToken;
				// #ifdef APP-PLUS
				var downloadViewController = plus.ios.importClass('downloadViewController');
				var ddVC = new downloadViewController();
				//var MCDownloader = plus.ios.importClass('MCDownloader');
				//var MCD = new MCDownloader();

				var partNumber = '';
				var partUrl = this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl;
				// console.log(MCD.ifdownwithurl(partUrl));
				if (ddVC.ifdown() == "NO") {
					console.log("22222222");
					plus.nativeUI.toast("当前已有下载任务 请稍后!");
					return;
				}
				if (this.select_status) {
					partNumber = this.allsuccessData.vodPlayUrl[this.downIndex].playName;
					partUrl = this.allsuccessData.vodPlayUrl[this.downIndex].playUrl;
				}
				ddVC.setvediomodelwithurlnamejishuimage(partUrl, this.allsuccessData.vodName, partNumber, this.allsuccessData.vodPic);
				plus.nativeUI.toast("已添加下载队列!");
				uni.request({
					url: this.websiteUrl + '/api/download/upd',
					header: {
						Authorization: token
					},
					method: 'POST',
					data: {
						userId: userId
					},
					complete: (res) => {
						console.log(res);
					}
				});
				// #endif
			},
			//  创建数据库
			executeSQL() {
				// #ifdef APP-PLUS
				var self = this;
				var ss = "select * from sqlite_master where name='history' and sql like '%isShare%'";
				plus.sqlite.selectSql({
					name: self.baseDateName,
					sql: ss,
					success: function(data) {
						if (data.length > 0) {
							self.creatTableSQL();
							console.log('查到数据');
						} else {
							plus.sqlite.executeSql({
								name: self.baseDateName,
								sql: 'drop table if exists history',
								success: function(e) {
									console.log("删除表成功");
									self.creatTableSQL();
								},
								fail: function(e) {
									console.log('executeSql failed: ' + JSON.stringify(e));
								}
							});
						}
					},
					fail: function(e) {
						console.log('查找判断字段失败');
					}
				});
				// #endif
			},
			// 创建表
			creatTableSQL() {
				// #ifdef APP-PLUS
				var self = this;
				plus.sqlite.executeSql({
					name: self.baseDateName,
					sql: 'create table if not exists history("vodId" INT(10) PRIMARY KEY,"vodBlurb" CHAR(255),"vodName" CHAR(255),"vodPic" CHAR(255),"partsNo" INT(10),"partsUrl" CHAR(255) ,"playTime" CHAR(255),"isShare" Boolean)',
					success: function(e) {
						var sql =
							"replace into history('vodId','vodBlurb','vodName','vodPic','partsNo','partsUrl','playTime','isShare') values(" +
							self.vodId + ",'" + self.allsuccessData.vodBlurb + "','" + self.allsuccessData.vodName + "','" + self.allsuccessData
							.vodPic + "'," + self.tabIndex + ",'" + self.allsuccessData.vodPlayUrl[self.tabIndex].playUrl + "','" + self.currentPlayTime +
							"','false')"
						plus.sqlite.executeSql({
							name: self.baseDateName,
							sql: sql,
							success: function(e) {
								console.log('executeSql success!');
								self.closeDB();
							},
							fail: function(e) {
								console.log('executeSql failed: ' + JSON.stringify(e));
							}
						});
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				});
				// #endif
			},
			// 添加到数据库
			selectSQL() {
				// #ifdef APP-PLUS
				var self = this;
				plus.sqlite.selectSql({
					name: self.baseDateName,
					sql: 'select * from  history',
					success: function(data) {
						console.log('selectSql success: ');
						self.closeDB();
					},
					fail: function(e) {
						self.closeDB();
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
				// #endif
			},
			// 关闭数据库
			closeDB() {
				// #ifdef APP-PLUS
				var self = this;
				plus.sqlite.closeDatabase({
					name: self.baseDateName,
					success: function(e) {
						console.log('closeDatabase success!');
					},
					fail: function(e) {
						console.log('closeDatabase failed: ' + JSON.stringify(e));
					}
				});
				// #endif
			},
			// 查看本地缓存数据是否已经分享
			checkIShareStatus(callback) {
				// #ifdef APP-PLUS
				var self = this;
				if (!plus.sqlite.isOpenDatabase({
						name: self.baseDateName,
						path: self.baseDataSrc
					})) {
					plus.sqlite.openDatabase({
						name: self.baseDateName,
						path: self.baseDataSrc,
						success: function(e) {
							console.log('openDatabase success!');
							self.executCheckShare(callback);
						},
						fail: function(e) {
							console.log('openDatabase failed: ' + JSON.stringify(e));
						}
					});
				} else {
					self.executCheckShare(callback);
				}
				// #endif
			},
			executCheckShare(callback) {
				// #ifdef APP-PLUS
				var self = this;
				plus.sqlite.selectSql({
					name: self.baseDateName,
					sql: 'select * from  history where vodId= ' + this.vodId + '',
					success: function(data) {
						callback(JSON.stringify(data));
						self.closeDB();
					},
					fail: function(e) {
						callback();
						self.closeDB();
						console.log('selectSql failed: ' + JSON.stringify(e));
					}
				});
				// #endif
			},
			// 視頻分享按鈕
			toShare() {
				// uni.switchTab({
				// 	url: '../../pages/tarbar/share/share'
				// })
				// #ifdef APP-PLUS
				let shareInfo = {
					href: "http://47.98.171.179:8080/download_page/download.html",
					title: '98影院，随时随地抢"鲜"看！',
					desc: "精彩大片抢先看",
					imgUrl: "/static/98Code.png"
				};
				let that = this;
				this.shareObj = share(shareInfo, function(index) {
					console.log("点击按钮的序号: " + index);
					let shareObj = {
						href: shareInfo.href || "",
						title: shareInfo.title || "",
						summary: shareInfo.desc || "",
						success: (res) => {
							console.log("success:" + JSON.stringify(res));
							that.$nextTick(() => {
								that.shareObj.alphaBg.hide();
								that.shareObj.shareMenu.hide();
							})
						},
						fail: (err) => {
							console.log("fail:" + JSON.stringify(err));
							that.$nextTick(() => {
								that.shareObj.alphaBg.hide();
								that.shareObj.shareMenu.hide();
							})
						}
					};
					switch (index) {
						case 0:
							shareObj.provider = "weixin";
							shareObj.scene = "WXSceneSession";
							shareObj.type = 0;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						case 1:
							shareObj.provider = "weixin";
							shareObj.scene = "WXSenceTimeline";
							shareObj.type = 0;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						case 2:
							shareObj.provider = "qq";
							shareObj.type = 1;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						case 3:
							uni.setClipboardData({
								data: shareInfo.href,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 4:
							plus.share.sendWithSystem({
								type: "web",
								title: shareInfo.title || "",
								thumbs: [shareInfo.imgUrl || ""],
								href: shareInfo.href || "",
								content: shareInfo.desc || "",
							})
							break;
					};
				});
				this.$nextTick(() => {
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
				// // #endif
			
			},
			toLogin() {
				this.videoContext.pause()
			}
		}
	}
</script>

<style>
	/* 播放头
	*/
	.playVideoPage {
		width: 750upx;
	}

	.playHead {
		margin-top: 60upx;
	}

	.mask_background {
		width: 750upx;
		height: 480upx;
		background-color: rgba(27, 27, 27, 0.6);
	}

	.go_back_img {
		position: fixed;
		display: flex;
		width: 50upx;
		height: 50upx;
		margin: 10upx 25upx;
		/* margin-top: 80upx; */
	}

	video {
		width: 750upx;
		height: 480upx;
		/* margin: 0 auto; */
	}

	.myVideo_over {
		width: 100%;
		/* text-align: center; */
		color: #FFFFFF;
		margin: 30upx;
	}

	/*  页面底部
	*/
	.foot {
		/* margin-top: 100upx; */
		/* position: fixed; */
		/* width: 100%;
		height: 90upx;
		min-height: 100upx; */
		left: 0upx;
		/* bottom: 0upx; */
		/* overflow: hidden; */
	}

	/* 页面中间部分
	*/
	.conten_group {
		width: 100%;

		/* margin: 0upx auto; */
		/* bottom: 100upx; */
	}

	/* 第一行 电影名称 简介
	*/
	.movie_detial {
		width: 690upx;
		margin: 0upx auto;
	}

	.movie_titel {
		width: 620upx;
		font-size: 36upx;
		color: rgba(45, 45, 45, 1);
	}

	.movie_from_titel {
		margin-top: 15upx;
		font-size: 28upx;
		color: rgba(107, 107, 107, 1)
	}

	.movie_from {
		margin-top: 15upx;
	}

	.movie_detial_feedback {
		display: flex;
		flex: 1;
		flex-direction: row;
		margin-top: 20upx;
	}

	.feedback_title {
		margin-left: 5upx;
		/* margin-right: 20upx; */
	}

	.video-guanggao {
		width: 100%;
		height: 176rpx;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin-top: 30rpx;
		overflow: hidden;
	}

	.video-guanggao-swiper {
		width: 720rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.video-guanggao-item {
		width: 720rpx;
		height: 176rpx;
	}

	.comment_area {
		width: 750upx;
		margin: 0upx auto;
		margin-top: 20upx;
	}

	.comment_titel {
		width: 490upx;
		margin-left: 17upx;
	}

	.hot_comment_group {
		width: 690upx;
		margin: 0upx auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.hot_comment_group_Left {
		height: 30upx;
		width: 6upx;
		background-color: rgba(36, 138, 223, 1);
		border-radius: 3upx;
	}

	.hot_comment {
		font-size: 30upx;
		width: 180upx;
		text-align: center;
		color: rgba(45, 45, 45, 1);
		/* border-left: 10upx solid rgba(36,138,223,1) ; */
		/* border-bottom-left-radius: 50upx; */
		/* margin-top: 20upx; */
	}

	.bottomIcon {
		width: 40upx;
		height: 40upx;
	}

	.all_font {
		font-size: 24upx;
		color: rgba(107, 107, 107, 1);
	}

	.selected_works_all {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10upx;
	}

	.movie_title_detail {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.selected_works_more {
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		align-items: center;
		font-size: 18upx;
		color: rgba(107, 107, 107, 1);
	}

	.selected_more {
		margin-left: 10upx;
		width: 10upx;
		height: 20upx;
	}

	.HengLine {
		width: 750upx;
		height: 1px;
		background: rgba(227, 227, 227, 1);
		margin-top: 27upx;
	}

	.selected_works {
		width: 690upx;
		margin: 0upx auto;
		/* margin-left: 30upx; */
	}

	.selected_works_list {
		margin-top: 10upx;
		width: 750upx;
		/* position: fixed; */
		white-space: nowrap;
	}

	.select_works_item {
		margin-top: 20upx;
		font-size: 30upx;
		padding: 0 20upx;
		/* 	width: 120upx;
		height: 80upx; */
		max-width: auto;
		min-height: 80upx;
		display: inline-block;
		line-height: 80upx;
		text-align: center;
		background: #f7f8fa;
		border-radius: 10upx;
		margin-left: 20upx;
		/* line-height: 150upx; */
		align-items: center;
	}

	.select_works_text {
		margin-top: 20upx;
	}

	.select_works_text {
		margin-top: 10upx;
	}

	.selected_works_titel {
		width: 630upx;
		font-size: 30upx;
		color: rgba(45, 45, 45, 1);
	}

	.active {
		color: #248ADF;
		/* font-size: 36upx; */
	}

	.comment_feedback_total {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
	}

	.comment_feedback_image {
		width: 40upx;
		height: 40upx;
	}

	.detail_group {
		margin-left: 30upx;
	}

	.film_detail_infor {
		line-height: 80upx;

		/* bottom: 100upx; */
	}

	.all_detail_title {
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.movie_titel_center {
		margin-top: 20upx;
		/* border-bottom: 1upx solid rgba(227,227,227,1) ;
		border-top: 1upx solid rgba(227,227,227,1) ; */
	}

	.movie_titel_bottom {
		margin-top: 20upx;
	}

	.movie_titel_bottom_detail {
		width: 700upx;
	}

	/* 评论弹出框
	*/
	.all_content {
		width: 750upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		/* background-color:#007AFF;      */

	}

	.detail_infor {
		width: 750upx;
		margin: 0upx auto;
		font-size: 28upx;
		color: rgba(107, 107, 107, 1);
		/* bottom: 100upx; */
		/* margin-left: 30upx; */
	}

	.content_detail_infor {
		height: 100upx;
		width: 690upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		line-height: 100upx;
		background-color: #FFFFFF;
		/* margin-left: 30upx; */
	}

	.content_detail_title {
		font-size: 32upx;
		font-weight: bold;
		color: rgba(28, 29, 29, 1);
		line-height: 41upx;
		width: 630upx;
	}

	.content_detail_close {
		width: 50upx;
		height: 50upx;
	}

	.nodata_group {
		height: 500upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nodata {
		width: 374upx;
		height: 390upx;
		margin: 0upx auto;
	}

	/*
	选集弹框
	*/
	.popup_select {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.shareGroup {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.share_text {
		margin-top: 30upx;
		/* display: flex;
		align-items: center; */
	}

	.share_popup {
		margin-top: 30upx;
	}
</style>
