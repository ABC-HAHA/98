<template>
	<view>
		<view class="">
		    <view :class="[isCancel ? ' cllection':'']">
		        <checkbox-group @change="checkboxChange">
		            <label class="checkbox" v-for="(item ,index) in collectArr" :key="index" :id="item.vodId" @tap="toMovie">
		                <view class="selected" v-if="isCancel">
		                    <checkbox :value="item.recordId" :checked="item.checked" />
		                </view>
		                <view class="movie-image">
		                    <image :src="item.vodPic" mode=""></image>
		                </view>
		                <view class="movie-info">
		                    <view class="movie-info-name">{{item.vodName}}</view>
                            <view class="movie-info-class">{{item.vodYear || unknow}}·{{item.typeName || unknow}}·{{item.vodArea || unknow}}</view>
                            <view class="movie-info-content">{{item.vodBlurb}}</view>
		                </view>
		            </label>
		        </checkbox-group>
		    </view>
		    <view class="bottom-btn" v-if="isCancel">
		        <view class="all-selsct" @tap="all_select">{{allSelect}}</view>
		        <view class="line"></view>
		        <view class="delete" @tap="deleteItem">删除({{num}})</view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCancel: false,
                num: 0,
                isSelect: false,
                allSelect: '全选',
                selectedId: 0,
                unknow: '未知',
                collectArr: [],
                selectedArr: []
			}
		},
		methods: {
            toMovie(e){
                let movieId = e.currentTarget.id;
                if (!this.isCancel) {
                    uni.navigateTo({
                        url: '/pages/playPage/playPage?vodId='+movieId,
                        animationType: 'slide-in-right'
                    });
                }
            },
            checkboxChange(e){
                let colletItems = this.collectArr,
                    values = e.detail.value;
                this.num = values.length;
                this.selectedArr = values;
                for (var i = 0, lenI = colletItems.length; i < lenI; ++i) {
                    const colletItem = colletItems[i];
                    const recordId = colletItem.recordId.toString();
                    if(values.includes(recordId)){
                        this.$set(colletItem,'checked',true)
                    }else{
                        this.$set(colletItem,'checked',false)
                    }
                }
                if (this.num < colletItems.length) {
                    this.allSelect = '全选';
                } else {
                    this.allSelect = '取消全选';
                }
            },
            all_select(){
                let colletItems = this.collectArr
                if (this.isSelect) {
                    if (this.num < this.collectArr.length) {
                        this.num = this.collectArr.length;
                        this.selectedArr = [];
                        for (var i = 0, lenI = colletItems.length; i < lenI; ++i) {
                            const colletItem = colletItems[i]
                            this.$set(colletItem,'checked',true)
                            this.selectedArr.push(colletItem.recordId.toString())
                        }
                        this.allSelect = '取消全选';
                        return
                    }
                    for (var i = 0, lenI = colletItems.length; i < lenI; ++i) {
                        const colletItem = colletItems[i]
                        this.$set(colletItem,'checked',false)
                    }
                    this.num = 0;
                    this.isSelect = false;
                    this.allSelect = '全选';
                    this.selectedArr = [];
                } else {
                    this.selectedArr = [];
                    for (var i = 0, lenI = colletItems.length; i < lenI; ++i) {
                        const colletItem = colletItems[i]
                        this.$set(colletItem,'checked',true)
                        this.selectedArr.push(colletItem.recordId.toString())
                    }
                    this.num = colletItems.length;
                    this.isSelect = true;
                    this.allSelect = '取消全选';
                }
            },
            deleteItem(){
                let that = this;
                this.selectedArr = JSON.stringify(this.selectedArr);
                let usertoken = this.$store.state.userInfo.loginToken;
                uni.request({
                    url: this.websiteUrl + '/user/del/collect',
                    header: {
                        Authorization: usertoken
                    },
                    method: 'POST',
                    data: {
                        collectIdArray: this.selectedArr
                    },
                    success: res => {
                        if (res.data) {
                            JSON.parse(this.selectedArr,function (key, value) {
                                let colletItems = that.collectArr;
                                for (let i = 0; i < colletItems.length; i++) {
                                    if (colletItems[i].recordId == value) {
                                        colletItems.splice(i, 1)
                                    }
                                }
                                // #ifdef APP-PLUS
                                var webView = that.$mp.page.$getAppWebview();
                                webView.setStyle({titleNView:{autoBackButton: true}});
                                webView.setTitleNViewButtonStyle(0, {  
                                    text: '编辑'
                                });
                                that.isCancel = false;
                                // #endif
                            });
                        }
                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
		},
        onNavigationBarButtonTap() {
            // #ifdef APP-PLUS
            var webView = this.$mp.page.$getAppWebview();
            if (this.isCancel) {
                webView.setStyle({titleNView:{autoBackButton: true}});
                webView.setTitleNViewButtonStyle(0, {  
                    text: '编辑'
                });
                this.isCancel = false;
                this.num = 0;
                this.isSelect = false;
                this.allSelect = '全选';
                for (var i = 0, lenI = this.collectArr.length; i < lenI; ++i) {
                    const colletItem = this.collectArr[i]
                    this.$set(colletItem,'checked',false)
                }
            } else{
                webView.setStyle({titleNView:{autoBackButton: false}});
                webView.setTitleNViewButtonStyle(0, {
                    text: '取消'
                });
                this.isCancel = true;
            }
            // #endif
        },
        onShow(){
            let userid = this.$store.state.userInfo.userId;
            let usertoken = this.$store.state.userInfo.loginToken;
            uni.request({
                url: this.websiteUrl + '/user/get/collect',
                header: {
                    Authorization: usertoken
                },
                method: 'GET',
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
                        this.collectArr = res.data;
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        }
	}
</script>

<style>
    
    checkbox .wx-checkbox-input {
    	border-radius: 50%;
    	/* 圆角 */
    	width: 40upx;
    	/* 背景的宽 */
    	height: 40upx;
    	/* 背景的高 */
    	border: 1px solid #ccc;
    	background: #FFFFFF;
    }
    
    .checkbox .wx-checkbox-input.wx-checkbox-input-checked {
    	background: #248ADF;
    	border: 1px solid #248ADF;
    }
    
    /*checkbox选中后图标样式  */
    
    .checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
    	width: 40upx;
    	height: 40upx;
    	line-height: 40upx;
    	text-align: center;
    	font-size: 30upx;
    	color: #fff;
    	background: transparent;
    	transform: translate(-50%, -50%) scale(1);
    	-webkit-transform: translate(-50%, -50%) scale(1);
    }   
    
    .checkbox{
        width: 94%;
        display: flex;
        align-items: center;
        margin: 30rpx 0 30rpx 30rpx;
    }
    
    .cllection{
        margin-bottom: 120upx;
    }
    .movie-image{
        width: 150rpx;
        height: 210rpx;
        margin: 0 20upx;
        border-radius: 20rpx;
        background: url(~@/static/210.png) 0upx 0upx/150upx 210upx no-repeat;
    }
    .movie-image>image{
        width: 150rpx;
        height: 210rpx;
        border-radius: 20rpx;
    }
    .movie-info{
        height: 140rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .movie-info-name{
        font-size: 30rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #2D2D2D;
    }
    .movie-info-class{
        font-size: 26rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #6B6B6B;
    }
    .movie-info-content{
        width: 400rpx;
        font-size: 24rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #999999;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .movie-info-size{
        font-size: 26rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color:#999999;
    }
    .bottom-btn{
        width: 100%;
        height: 100upx;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #C1C1C1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        background: #FFFFFF;
    }
    .all-selsct{
        width: 50%;
        height: 100%;
        line-height: 100upx;
        text-align: center;
        font-size:28upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#1C1D1D;
    }
    .line{
        width: 2px;
        height: 20upx;
        background: #C1C1C1;
    }
    .delete{
        width: 50%;
        height: 100%;
        line-height: 100upx;
        text-align: center;
        font-size:28upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#D8255D;
    }

</style>
