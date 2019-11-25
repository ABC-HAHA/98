<template>
	<view catchtouchmove="false">
		<view class="share_view">
		    <view class="share_view_your">您的邀请码</view>
		    <view class="share_view_code" :class="[loginStatus ? '':' logout']">{{codetext}}</view>
		    <view class="copy_code" @tap="copy">复制邀请码</view>
		    <view class="code_text">复制邀请码分享给<br/>好友即可邀请好友</view>
            <view class="code_line"></view>
		    <view class="code_down">扫描下方二维码下载APP</view>
		    <view class="QR_code">
                <image src="/static/98Code.png" mode=""></image>
            </view>
		    <view class="code_save" @tap="savePic">保存二维码</view>
		    <view class="code_share" @tap="share">邀请好友注册</view>
		    <view class="code_content">邀请好友注册，双方都可以获得奖励哦</view>
		</view>
	</view>
</template>

<script>
    import share from "@/common/share.js";
	export default {
		data() {
			return {
                codeSrc: 'http://47.98.171.179:8080/download-page.png'
			}
		},
        onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
        computed:{
            loginStatus: function () {
                return this.$store.state.isLogin;
            },
            codetext: function () {
                if (this.loginStatus) {
                    return this.$store.state.userInfo.userCode;
                } else {
                    return "请登录后查看";
                }
            }
        },
		methods: {
			savePic(){
                // #ifdef APP-PLUS
                uni.downloadFile({
                    url:this.codeSrc,
                    success:function(res){
                        uni.saveImageToPhotosAlbum({
                            filePath: res.tempFilePath,
                            success: function (){
                                uni.showToast({
                                    title:"保存成功",
                                    duration:2000,
                                    mask: true
                                })
                                setTimeout(function(){
                                    uni.hideToast();
                                },2000)
                            },
                            fail: function (err) {
                                uni.showToast({
                                    title:"保存失败",
                                    icon:'none',
                                    duration:2000,
                                    mask: true
                                })
                                setTimeout(function(){
                                    uni.hideToast();
                                },2000)
                            }
                        })
                    },
                    fail:function(){
                        uni.showToast({
                            title:"下载失败",
                            icon:'none',
                            duration:2000,
                            mask: true
                        })
                        setTimeout(function(){
                            uni.hideToast();
                        },2000)
                    }
                })
                // #endif
            },
            copy(){
                if (this.loginStatus) {
                    // #ifdef APP-PLUS
                    uni.setClipboardData({
                        data: this.codetext,
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
                } else {
                    uni.showToast({
                        title: '请登录后复制',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                }
            },
            share(){
                let shareInfo={
                    href: "http://1188xy.cn/download_page/download.html",
                    title: '98影院，随时随地抢"鲜"看！',
                    desc: "精彩大片抢先看",
                    imgUrl:"/static/98Code.png"
                };
                let that = this;
                // #ifdef APP-PLUS
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
						},
						fail:(err)=>{
							console.log("fail:" + JSON.stringify(err));
                            that.$nextTick(()=>{
                                that.shareObj.alphaBg.hide();
                                that.shareObj.shareMenu.hide();
                            })
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
           }
		}
	}
</script>

<style>
    page{
        background: url(~@/static/shareTwo.jpg) 0upx 0upx/100% 100% no-repeat;
    }
    .share_view{
        width: 615upx;
        height: 100%;
        padding-top: 36upx;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .share_view_your{
        width:100%;
        height:30upx;
        margin-top: 46upx;
        font-size:30upx;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#011B36;
        line-height:30upx;
        text-align: center;
    }
    .share_view_code{
        margin-top: 30upx;
        width: 100%;
        height: 60upx;
        font-size: 60upx;
        font-family: MicrosoftYaHeiUI;
        font-weight: 400;
        color: #011B36;
        line-height: 60upx;
        text-align: center;
    }
    .share_view_code.logout{
        height: 36upx;
        line-height: 36upx;
        font-size: 36upx;
        color: #248ADF;
    }
    .copy_code{
        width:167upx;
        height:46upx;
        line-height:46upx;
        background:#011B36;
        border-radius:10upx;
        color: #F8F7F8;
        font-size:30upx;
        text-align: center;
        margin-top: 21upx;
    }
    .code_text{
        height:52upx;
        margin-top: 44upx;
        font-size:26upx;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#011B36;
        line-height:26upx;
    }
    .code_line{
        width: 100%;
        height: 1upx;
        margin-top: 40upx;
        border-top:1upx dashed #011B36;
    }
    .code_down{
        width:100%;
        height:30upx;
        margin-top: 25upx;
        font-size:30upx;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#011B36;
        line-height:30upx;
        text-align: center;
    }
    .QR_code{
        width:263upx;
        height:263upx;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 25upx;
        background:#FFFFFF;
        border-radius:14upx;
    }
    .QR_code>image{
        width:250upx;
        height:250upx;
    }
    .code_save,.code_share{
        width:400upx;
        height:78upx;
        margin-top: 36upx;
        background:linear-gradient(-76deg,#EE8F3F 0%,#EFAA45 100%);
        box-shadow:0upx 8upx 7upx 1upx #EF9D43;
        border-radius:39upx;
        line-height: 78upx;
        text-align: center;
        font-size: 36upx;
        color: #FFFFFF;
    }
    .code_content{
        width:100%;
        height:24upx;
        margin-top: 26upx;
        font-size:24upx;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#6D6D6D;
        line-height:24upx;
        text-align: center;
    }
</style>
