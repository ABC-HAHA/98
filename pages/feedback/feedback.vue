<template>
	<view>
        <view class="question-specific">
            <view class="question-title">我遇到的问题</view>
            <view class="question-items">
                <view class="question-item" :class="[selectId === item.qid ? ' selected' : '']" v-for="(item ,index) in questionArr" :key="index" :id="item.qid" @tap="selectQus">
                    <view class="image"></view>
                    <view class="question-item-text">{{item.quesion}}</view>
                </view>
            </view>
        </view>
        <view class="detailed-description">
            <view class="detailed-description-title">详细描述（必填）</view>
            <view class="detailed-description-content">
                <textarea v-model="quesionContent" maxlength="200" placeholder="在此输入您遇见的问题，很抱歉给您带来不好的体验，我们将尽快和您联系…" placeholder-class="textarea_style" @blur="showBtn" @focus="hideBtn"/>
            </view>
        </view>
        <view class="contact-method">
            <view class="contact-method-title">请输入联系方式，方便我们联系（选填）</view>
            <view class="">
                <view class="contact-method-qq">
                    <input type="number" v-model="qqNumber" placeholder="请输入您的QQ（选填）" placeholder-class="placeholder_style" @blur="showBtn" @focus="hideBtn"/>
                </view>
                <view class="contact-method-mail">
                    <input type="text" v-model="eMail" placeholder="请输入您的邮箱" placeholder-class="placeholder_style" @blur="checkMail" @focus="hideBtn"/>
                </view>
            </view>
        </view>
        <view v-show="showflag" class="confirm" @tap="confirm">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questionArr: [],
                selectId: '',
                quesionContent: '',
                qqNumber: '',
                eMail: '',
                showflag: true,
                windowSize: null
			}
		},
		methods: {
            showBtn(){
                this.showflag = true;
            },
            hideBtn(){
                this.showflag = false;
            },
			selectQus(e){
                this.selectId = e.currentTarget.id;
            },
            checkMail(){
                this.showflag = true;
                let mailRegExp = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (this.eMail != '') {
                    if (!mailRegExp.test(this.eMail)) {
                        uni.showToast({
                            title: '请重新输入邮箱',
                            icon: 'none',
                            mask: true
                        });
                        setTimeout(function(){
                            uni.hideToast();
                        },2000)
                        return
                    }
                }
            },
            confirm(){
                if (!this.$store.state.isLogin) {
                    uni.navigateTo({
                        url: '/pages/login/login',
                        animationType: 'slide-in-bottom'
                    });
                    return
                }
                if (this.quesionContent === '') {
                    uni.showToast({
                        title: '详细描述为必填项',
                        icon: 'none',
                        mask: true
                    });
                    setTimeout(function(){
                        uni.hideToast();
                    },2000)
                    return false
                }
                uni.request({
                    url: this.websiteUrl + '/api/question/add',
                    method: 'POST',
                    header: {
                        Authorization: this.$store.state.userInfo.loginToken
                    },
                    data: {
                        userId: this.$store.state.userInfo.userId,
                        qids: this.selectId,
                        questionDesc: this.quesionContent,
                        qq: this.qqNumber,
                        email: this.eMail
                    },
                    success: res => {
                        if (res.data.status === 0) {
                            uni.showToast({
                                title: '提交成功',
                                mask: true
                            });
                            setTimeout(function(){
                                uni.hideToast();
                            },2000)
                        } else if (res.data.status === 1001) {
                            uni.showToast({
                                title: res.data.message,
                                icon: 'none',
                                mask: true
                            });
                            setTimeout(function () {
                                uni.hideToast();
                                uni.navigateTo({
                                    url:"/pages/login/login",
                                    animationType:"slide-in-right"
                                });
                            }, 600)
                        } else {
                            uni.showToast({
                                title: res.data.message,
                                icon: 'none',
                                mask: true
                            });
                            setTimeout(function () {
                                uni.hideToast();
                            }, 600)
                        }
                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
		},
        onLoad() {
            const res = uni.getSystemInfoSync();
            this.windowSize = res.windowHeight;
            uni.onWindowResize((res) => {
                if (res.size.windowHeight < this.windowSize) {
                    this.showflag = false;
                } else {
                    this.showflag = true;
                }
            })
            uni.request({
                url: this.websiteUrl + '/api/question/type',
                method: 'GET',
                data: {},
                success: res => {
                    this.questionArr = res.data.questionType;
                },
                fail: () => {},
                complete: () => {}
            });
        }
	}
</script>

<style>
    .question-specific{
        width: 100%;
        margin-top: 40rpx;
        margin-bottom: 46rpx;
    }
    .question-title{
        width: 100%;
        height: 30rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #2D2D2D;
        text-indent: 30rpx;
    }
    .question-items{
        display: flex;
        flex-wrap: wrap;
        margin-left: 30rpx;
        margin-top: 30rpx;
    }
    .question-item{
        width: 220rpx;
        height: 60rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #F8F9FB;
        border-radius: 5rpx;
        margin: 0 15rpx 22rpx 0;
    }
    .question-item.selected{
        background: #248ADF;
    }
    .question-item>.image{
        margin-left: 40rpx;
        width: 28rpx;
        height: 28rpx;
        background: url('~@/static/unquestion.png') 0px 0px/28rpx 28rpx no-repeat;
    }
    .question-item.selected>.image{
        margin-left: 40rpx;
        width: 28rpx;
        height: 28rpx;
        background: url(~@/static/question.png) 0px 0px/28rpx 28rpx no-repeat;
    }
    .question-item-text{
        margin-left: 9rpx;
        font-size: 26rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #666666;
    }
    .question-item.selected>.question-item-text{
        color: #FFFFFF;
    }
    .detailed-description{
        width: 100%;
    }
    .detailed-description-title{
        width: 100%;
        height: 30rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #2D2D2D;
        text-indent: 30rpx;
        margin-bottom: 30rpx;
    }
    .detailed-description-content{
        width: 100%;
    }
    .detailed-description-content>textarea{
        padding: 20rpx;
        width: 650rpx;
        height: 260rpx;
        margin-left: 30rpx;
        background: #F8F9FB;
        border-radius: 5rpx;
        font-size: 16px;
    }
    .contact-method{
        width: 100%;
        margin-top: 50rpx;
    }
    .contact-method-title{
        width: 100%;
        height: 30rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #2D2D2D;
        text-indent: 30rpx;
        margin-bottom: 36rpx;
    }
    .contact-method-qq{
        width: 650rpx;
        height: 88rpx;
        margin-left: 30rpx;
        margin-bottom: 20rpx;
        padding-left: 20rpx;
        display: flex;
        align-items: center;
        background: #F8F9FB;
        border-radius: 5rpx;
        font-size: 30rpx;
    }
    .contact-method-mail{
        width: 650rpx;
        height: 88rpx;
        margin-left: 30rpx;
        padding-left: 20rpx;
        display: flex;
        align-items: center;
        background: #F8F9FB;
        border-radius: 5rpx;
        font-size: 30rpx;
    }
    .confirm{
        width: 100%;
        height: 40px;
        background: #248ADF;
        color: #FFFFFF;
        line-height: 40px;
        text-align: center;
        font-size: 30rpx;
        position: fixed;
        bottom: 0rpx;
        left: 0rpx;
        z-index: 5;
    }
    .textarea_style{
        font-size: 26upx;
        line-height: 36rpx;
        font-weight: 400 !important;
        color: #666666;
    }
    .placeholder_style{
        font-size: 26upx;
        line-height: 36rpx;
        font-weight: 500 !important;
        color: #666666;
    }
</style>
