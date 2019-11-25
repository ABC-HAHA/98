<template>
	<view>
		<view class="">
		    <view :class="[isCancel ? 'playHistory':'']">
		        <checkbox-group @change="checkboxChange">
		            <label class="checkbox" v-for="(item ,index) in historyArr" :key="index" :id="item.vodId" @tap="toMovie">
		                <view class="selected" v-if="isCancel">
		                    <checkbox :value="item.recordId" :checked="item.checked"/>
		                </view>
		                <view class="movie-image">
		                    <image :src="item.vodPic" mode=""></image>
		                </view>
		                <view class="movie-info">
		                    <view class="movie-info-name">{{item.vodName}}</view>
                            <view class="movie-info-name">{{item.vodBlurb}}</view>
		                </view>
		            </label>
		        </checkbox-group>
                <checkbox-group @change="changeCheckbox">
                    <label class="checkbox" v-for="(item ,index) in localArr" :key="index" :id="item.vodId" @tap="toMovie">
                        <view class="selected" v-if="isCancel">
                            <checkbox :value="item.vodId" :checked="item.checked"/>
                        </view>
                        <view class="movie-image">
                            <image :src="item.vodPic" mode=""></image>
                        </view>
                        <view class="movie-info">
                            <view class="movie-info-name">{{item.vodName}}</view>
                            <view class="movie-info-name">{{item.vodBlurb}}</view>
                        </view>
                    </label>
                </checkbox-group>
		    </view>
		    <view class="bottom-btn" v-if="isCancel">
		        <view class="all-selsct" @tap="all_select">{{allSelect}}</view>
		        <view class="line"></view>
		        <view class="delete" @tap="deleteItem">删除({{num + localNum}})</view>
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
				selectedArr: [],
                historyArr: [],
                localArr: [],
                localSelect: [],
                localNum: 0
			}
		},
		methods: {
            changeCheckbox(e){
                let localItems = this.localArr,
                    values = e.detail.value;
                this.localNum = values.length;
                this.localSelect = values;
                for (let i = 0, lenI = localItems.length; i < lenI; ++i) {
                    const localItem = localItems[i];
                    const vodId = localItem.vodId.toString();
                    if(values.includes(vodId)){
                        this.$set(localItem,'checked',true)
                    }else{
                        this.$set(localItem,'checked',false)
                    }
                }
                let nums = this.localNum + this.num;
                let length = localItems.length + this.historyArr.length;
                if (nums < length) {
                    this.allSelect = '全选';
                } else {
                    this.allSelect = '取消全选';
                }
            },
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
                let historyItems = this.historyArr,
                    values = e.detail.value;
                this.num = values.length;
                this.selectedArr = values;
                for (let i = 0, lenI = historyItems.length; i < lenI; ++i) {
                    const historyItem = historyItems[i];
                    const recordId = historyItem.recordId.toString();
                    if(values.includes(recordId)){
                        this.$set(historyItem,'checked',true)
                    }else{
                        this.$set(historyItem,'checked',false)
                    }
                }
                let nums = this.localNum + this.num;
                let length = this.localArr.length + historyItems.length;
                if (nums < length) {
                    this.allSelect = '全选';
                } else {
                    this.allSelect = '取消全选';
                }
            },
            all_select(){
                let historyItems = this.historyArr,
                    localItems = this.localArr;
                if (historyItems.length <= 0 && localItems.length <= 0) {
                    return
                }
                if (this.isSelect) {
                    if (this.num < historyItems.length && localItems.length <= 0) {
                        this.num = historyItems.length;
                        this.selectedArr = [];
                        for (let i = 0, lenI = historyItems.length; i < lenI; ++i) {
                            const historyItem = historyItems[i]
                            this.$set(historyItem,'checked',true)
                            this.selectedArr.push(historyItem.recordId.toString())
                        }
                        this.allSelect = '取消全选';
                        return
                    }
                    if (this.localNum < localItems.length && historyItems.length <= 0) {
                        this.localNum = localItems.length;
                        this.localSelect = [];
                        for (let i = 0, lenI = localItems.length; i < lenI; ++i) {
                            const localItem = localItems[i]
                            this.$set(localItem,'checked',true)
                            this.localSelect.push(localItem.vodId.toString())
                        }
                        this.allSelect = '取消全选';
                        return
                    }
                    if (this.localNum < localItems.length || this.num < historyItems.length) {
                        this.localNum = localItems.length;
                        this.num = historyItems.length;
                        this.selectedArr = [];
                        this.localSelect = [];
                        for (let i = 0, lenI = localItems.length; i < lenI; ++i) {
                            const localItem = localItems[i]
                            this.$set(localItem,'checked',true)
                            this.localSelect.push(localItem.vodId.toString())
                        }
                        for (let i = 0, lenI = historyItems.length; i < lenI; ++i) {
                            const historyItem = historyItems[i]
                            this.$set(historyItem,'checked',true)
                            this.selectedArr.push(historyItem.recordId.toString())
                        }
                        this.allSelect = '取消全选';
                        return
                    }
                    for (let i = 0, lenI = historyItems.length; i < lenI; ++i) {
                        const historyItem = historyItems[i]
                        this.$set(historyItem,'checked',false)
                    }
                    for (let i = 0, lenI = localItems.length; i < lenI; ++i) {
                        const localItem = localItems[i]
                        this.$set(localItem,'checked',false)
                    }
                    this.num = 0;
                    this.localNum = 0;
                    this.isSelect = false;
                    this.allSelect = '全选';
                    this.selectedArr = [];
                    this.localSelect = [];
                } else {
                    this.selectedArr = [];
                    this.localSelect = [];
                    for (let i = 0, lenI = historyItems.length; i < lenI; ++i) {
                        const historyItem = historyItems[i]
                        this.$set(historyItem,'checked',true)
                        this.selectedArr.push(historyItem.recordId.toString())
                    }
                    for (let i = 0, lenI = localItems.length; i < lenI; ++i) {
                        const localItem = localItems[i]
                        this.$set(localItem,'checked',true)
                        this.localSelect.push(localItem.vodId.toString())
                    }
                    this.num = historyItems.length;
                    this.localNum = localItems.length;
                    this.isSelect = true;
                    this.allSelect = '取消全选';
                }
            },
            deleteItem(){
                let that = this;
                if (this.selectedArr.length > 0) {
                    this.selectedArr = JSON.stringify(this.selectedArr);
                    let usertoken = this.$store.state.userInfo.loginToken;
                    uni.request({
                        url: this.websiteUrl + '/user/del/visit',
                        header: {
                            Authorization: usertoken
                        },
                        method: 'POST',
                        data: {
                            visitIdArray: this.selectedArr
                        },
                        success: res => {
                            if (res.data) {
                                JSON.parse(this.selectedArr,function (key, value) {
                                    let historyItems = that.historyArr;
                                    for (let i = 0; i < historyItems.length; i++) {
                                        if (historyItems[i].recordId == value) {
                                            historyItems.splice(i, 1)
                                        }
                                    }
                                })
                                // #ifdef APP-PLUS
                                var webView = that.$mp.page.$getAppWebview();
                                webView.setStyle({titleNView:{autoBackButton: true}});
                                webView.setTitleNViewButtonStyle(0, {  
                                    text: '编辑'
                                });
                                that.isCancel = false;
                                // #endif
                            }
                        },
                        fail: () => {},
                        complete: () => {}
                    });
                }
                if (this.localSelect.length > 0) {
                    let localStr = JSON.stringify(this.localSelect);
                    let local = localStr.replace('[','(').replace(']',')');
                    // #ifdef APP-PLUS
                    plus.sqlite.executeSql({
                        name: '98TV',
                        sql: 'delete from history where vodId in ' + local,
                        success: function(e){
                            console.log('executeSql success!');
                            JSON.parse(localStr,function (key, value) {
                                let localItems = that.localArr;
                                for (let i = 0; i < localItems.length; i++) {
                                    if (localItems[i].vodId == value) {
                                        localItems.splice(i, 1)
                                    }
                                }
                            })
                            var webView = that.$mp.page.$getAppWebview();
                            webView.setStyle({titleNView:{autoBackButton: true}});
                            webView.setTitleNViewButtonStyle(0, {  
                                text: '编辑'
                            });
                            that.isCancel = false;
                        },
                        fail: function(e){
                            console.log('executeSql failed: '+JSON.stringify(e));
                        }
                    });
                    // #endif
                }
            },
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
            selectSql(){
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
                        console.log('selectSql success: ');
                        if (data.length > 0) {
                            that.localArr = data;
                        }
                    },
                    fail: function(e){
                        console.log('selectSql failed: '+JSON.stringify(e));
                    }
                });
                // #endif
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
                this.localNum = 0;
                this.isSelect = false;
                this.allSelect = '全选';
                for (var i = 0, lenI = this.historyArr.length; i < lenI; ++i) {
                    const historyItem = this.historyArr[i]
                    this.$set(historyItem,'checked',false)
                }
                for (let i = 0, lenI = this.localArr.length; i < lenI; ++i) {
                    const localItem = this.localArr[i]
                    this.$set(localItem,'checked',false)
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
        onShow() {
            this.selectSql();
            if (!this.$store.state.isLogin) {
                return
            }
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
                        this.historyArr = res.data;
                        for (let i = 0; i < this.historyArr.length; i++) {
                            for (let j = 0; j < this.localArr.length; j++) {
                                if (this.localArr[j].vodId == this.historyArr[i].vodId) {
                                    this.localArr.splice(j, 1)
                                }
                            }
                        }
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        },
        onBackPress() {
            if (this.isOpen()) {
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
        margin: 40rpx 0 40rpx 30rpx;
    }
    
    .playHistory{
        padding-bottom: 100rpx;
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
        justify-content: center;
    }
    .movie-info-name{
        width: 360rpx;
        font-size: 30rpx;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #2D2D2D;
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
        height: 100rpx;
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
