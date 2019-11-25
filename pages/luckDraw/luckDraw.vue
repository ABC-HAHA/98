<template>
	<view catchtouchmove="false">
        <view class="welfare-item">
            <view class="welfare-item-header">
                <image class="welfare-item-img" src="/static/meirichoujiang.png" mode=""></image>
                <view class="welfare-item-tixian" @tap="prizeRule">
                    <view class="welfare-item-tixian-name">提现</view>
                    <view class="welfare-item-tixian-line"></view>
                    <view class="welfare-item-tixian-rule">规则</view>
                </view>
            </view>
            <view class="welfare-item-mingdan">
                <view class="welfare-mingdan">中奖名单</view>
                <view class="welfare-mingdan-item">
                    <swiper class="welfare-item-swiper" :autoplay="autoplay" circular="true" vertical="true">
                        <swiper-item class="swiper-items" v-for="(item ,index) in prize_people" :key="index">
                            <view class="swiper-item">{{item}}</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
            <image class="welfare-item-image" src="/static/diandian.png" mode=""></image>
            <view class="welfare-item-zhuan">
                <view class="welfare-item-zhuan-one">
                    <image class="welfare-item-zhuan-go" src="/static/go.png" mode="" @tap="rotate_handle"></image>
                    <view class="welfare-item-zhuan-items" :style="{transform:rotate_angle,transition:rotate_transition}">
                        <view class="welfare-item-zhuan-item">
                            <view class="welfare-item-zhuan-item-content" v-for="(item ,index) in prize_list" :key="index">
                                <view class="welfare-item-zhuan-item-name">{{item.name}}</view>
                                <image class="welfare-item-zhuan-item-img" :src="item.image" mode=""></image>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="welfare-item-num">今日抽奖次数还剩{{num}}次</view>
            <view class="welfare-item-content">温馨提示</view>
            <view class="welfare-item-zhushi">
                领奖请到 我的 - 兑换中心 兑换
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                num: 0,
                prize_list: [
                    {
                        'image':'/static/xiexie.png',
                        'name':'谢谢参与'
                    },
                    {
                        'image':'/static/alljinbi.png',
                        'name':'100金币'
                    },
                    {
                        'image':'/static/quan.png',
                        'name':'1次'
                    },
                    {
                        'image':'/static/alljinbi.png',
                        'name':'500金币'
                    },
                    {
                        'image':'/static/rmb.png',
                        'name':'100元现金'
                    },
                    {
                        'image':'/static/alljinbi.png',
                        'name':'50金币'
                    },
                    {
                        'image':'/static/xiexie.png',
                        'name':'谢谢参与'
                    },
                    {
                        'image':'/static/quan.png',
                        'name':'3次'
                    },
                    {
                        'image':'/static/rmb.png',
                        'name':'50元现金'
                    },
                    {
                        'image':'/static/quan.png',
                        'name':'2次'
                    },
                    {
                        'image':'/static/rmb.png',
                        'name':'30元现金'
                    },
                    {
                        'image':'/static/alljinbi.png',
                        'name':'200金币'
                    }
                ],
                rotate_angle: 0, //将要旋转的角度
                rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
                click_flag: true,
                rand_circle: 10,
                start_rotating_degree: 0,
                val: '',
                isPrize: false,
                prizeText: '谢谢参与',
                prizeBtn: '返回抽奖',
                result_angle: [15,45,75,105,135,165,195,225,255,285,315,345],
                prize_people: [
                    "恭喜DFG225D抽中30元红包",
                    "恭喜E42VS22抽中50元红包",
                    "恭喜E746A4G抽中100元红包",
                    "恭喜ERGA561抽中30元红包",
                    "恭喜AG4465S抽中50元红包",
                    "恭喜ASDGA16抽中100元红包",
                    "恭喜RTJET6H抽中30元红包",
                    "恭喜BDG1N64抽中50元红包",
                    "恭喜ERYH6ZD抽中100元红包",
                    "恭喜F1S6T1B抽中30元红包",
                    "恭喜AGE11WE抽中50元红包",
                    "恭喜AERG46D抽中100元红包"
                ],
                autoplay: false
			}
		},
		methods: {
            prizeRule(){
                // #ifdef APP-PLUS
                const subNVue = uni.getSubNVueById('showRule');
                subNVue.show('slide-in-top', 200);
                uni.$emit('websrc', this.websiteUrl);
                // #endif
            },
			rotate_handle(){
                let loginflag = this.$store.state.isLogin;
                let userid = this.$store.state.userInfo.userId;
                if (!loginflag) {
                    uni.navigateTo({
                        url:"/pages/login/login",
                        animationType:"slide-in-bottom"
                    });
                    return
                }
                if (!this.click_flag) {
                    return
                }
                if (this.num == 0) {
                    return
                }
                this.click_flag = false;
                this.requestData();
            },
            rotating(){
                let during_time = 5; // 默认为1s
                let result_index;
                result_index = this.val;
                var rotate_angle = this.start_rotating_degree + this.rand_circle * 360 +this.result_angle[result_index] - this.start_rotating_degree % 360;
                this.start_rotating_degree = rotate_angle;
                this.rotate_angle = "rotate(" + rotate_angle + "deg)";
                var that = this;
                // 旋转结束后，允许再次触发
                setTimeout(function() {
                    that.click_flag = true;
                    that.game_over();
                }, during_time * 1000 + 1500); // 延时，保证转盘转完
            },
            game_over(){
                if (this.prize_list[this.val].name == '谢谢参与') {
                    this.isPrize = false;
                } else {
                    this.isPrize = true;
                }
                // #ifdef APP-PLUS
                const subNVue = uni.getSubNVueById('hasPrize');
                subNVue.show('slide-in-top', 200);
                uni.$emit('is-prize', this.isPrize);
                // #endif
                this.requestTimer();
            },
            requestData(){
                let userid = this.$store.state.userInfo.userId;
                uni.request({
                    url: this.websiteUrl + '/api/lottery/getprize',
                    method: 'GET',
                    data: {
                        userId: userid
                    },
                    success: res => {
                        if (res.data.status == 0) {
                            this.val = res.data.result;
                        } else {
                            this.val = 11;
                        }
                        this.rotating()
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            requestTimer(){
                let userid = this.$store.state.userInfo.userId;
                if (!userid) {
                    userid = '';
                }
                uni.request({
                    url: this.websiteUrl + '/api/task/lotterycount',
                    method: 'GET',
                    data: {
                        userId: userid
                    },
                    success: res => {
                        if (res.data.status == 0) {
                            this.num = res.data.result;
                        }
                    },
                    fail: () => {},
                    complete: () => {}
                });
            },
            requestPrize(){
                uni.request({
                    url: this.websiteUrl + '/api/lottery/prizes',
                    method: 'GET',
                    data: {},
                    success: res => {
                        if (res.data.status == 0) {
                            this.prize_list = res.data.result;
                        }
                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
		},
        onShow() {
            this.requestTimer();
            this.autoplay = !this.autoplay;
        },
        onHide() {
            this.autoplay = !this.autoplay;
        },
        onLoad() {
            this.requestPrize();
        },
        onUnload() {
            this.autoplay = !this.autoplay;
        }
	}
</script>

<style>
    page{
        background: linear-gradient(top, #2270DA, #87C8FF);
    }
    .welfare-item{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .welfare-item-header{
        width: 100%;
        display: flex;
        margin-top: 24rpx;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }
    .welfare-item-img{
        width: 557rpx;
        height: 156rpx;
    }
    .welfare-item-tixian{
        width: 77rpx;
        height: 98rpx;
        display: flex;
        margin-top: 20rpx;
        margin-left: 20rpx;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url(~@/static/tixian.png) 0upx 0upx/77rpx 98rpx no-repeat;
    }
    .welfare-item-tixian-name, .welfare-item-tixian-rule{
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 24rpx;
    }
    .welfare-item-tixian-line{
        width: 48rpx;
        height: 2rpx;
        background: #FFFFFF;
        margin: 8rpx 0;
    }
    .welfare-item-mingdan{
        width: 662rpx;
        height: 156rpx;
        margin-top: -20rpx;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;
        background: url(~@/static/zhongjiangmingdan.png) 0upx 0upx/662rpx 156rpx no-repeat;
    }
    .welfare-mingdan{
        font-size: 24rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
    }
    .welfare-mingdan-item{
        width: 340rpx;
        height: 48rpx;
        margin-left: 30rpx;
        margin-right: 60rpx;
        overflow: hidden;
    }
    .swiper-items{
        width: 340rpx;
        height: 48rpx;
    }
    .swiper-item{
        width: 340rpx;
        height: 48rpx;
        line-height: 48rpx;
        font-size: 24rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
    }
    .welfare-item-image{
        width: 614rpx;
        height: 78rpx;
        margin-top: -44rpx;
    }
    .welfare-item-zhuan{
        width: 602rpx;
        height: 602rpx;
        display: flex;
        justify-content: center;
        margin-top: -20rpx;
        align-items: center;
        background: url(~@/static/yuanpan.png) 0upx 0upx/602rpx 602rpx no-repeat;
    }
    .welfare-item-zhuan-one{
        width: 604rpx;
        height: 604rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: url(~@/static/pandian.png) 0upx 0upx/604rpx 604rpx no-repeat;
    }
    .welfare-item-zhuan-go{
        width: 138rpx;
        height: 164rpx;
        position: absolute;
        z-index: 5;
        top: 200rpx;
        left: 232rpx;
    }
    .welfare-item-zhuan-items{
        width: 498rpx;
        height: 498rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(~@/static/panzhuan.png) 0upx 0upx/498rpx 498rpx no-repeat;
        /* transform: rotate(15deg); */
    }
    .welfare-item-zhuan-item{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .welfare-item-zhuan-item-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        /* top: 0rpx;
        left: 296rpx; */
    }
    .welfare-item-zhuan-item-content:nth-of-type(1){
        /* top: 24rpx;
        left: 164rpx; */
        transform: rotate(-15deg);
        transform-origin: 180rpx -564rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(2){
        /* top: 72rpx;
        left: 80rpx; */
        transform: rotate(-45deg);
        transform-origin: 156rpx -16rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(3){
        /* top: 156rpx;
        left: 30rpx; */
        transform: rotate(-75deg);
        transform-origin: 144rpx 100rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(4){
        /* top: 254rpx;
        left: 24rpx; */
        transform: rotate(-105deg);
        transform-origin: 146rpx 162rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(5){
        /* top: 340rpx;
        left: 68rpx; */
        transform: rotate(-135deg);
        transform-origin: 148rpx 200rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(6){
        /* top: 390rpx;
        left: 166rpx; */
        transform: rotate(-165deg);
        transform-origin: 140rpx 230rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(7){
        /* top: 394rpx;
        left: 256rpx; */
        transform: rotate(-195deg);
        transform-origin: 142rpx 258rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(8){
        /* top: 346rpx;
        left: 354rpx; */
        transform: rotate(-225deg);
        transform-origin: 138rpx 290rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(9){
        /* top: 260rpx;
        left: 390rpx; */
        transform: rotate(-255deg);
        transform-origin: 140rpx 324rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(10){
        /* top: 160rpx;
        left: 404rpx; */
        transform: rotate(-285deg);
        transform-origin: 134rpx 390rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(11){
        /* top: 72rpx;
        left: 344rpx; */
        transform: rotate(-315deg);
        transform-origin: 134rpx 496rpx;
    }
    .welfare-item-zhuan-item-content:nth-of-type(12){
        /* top: 24rpx;
        left: 262rpx; */
        transform: rotate(-345deg);
        transform-origin: 110rpx 1050rpx;
    }
    .welfare-item-zhuan-item-name{
        font-size: 20rpx;
        line-height: 20rpx;
        color: #000000;
    }
    .welfare-item-zhuan-item-img{
        width: 62rpx;
        height: 62rpx;
        transform: translateY(50%);
    }
    .welfare-item-num{
        width: 371rpx;
        height: 78rpx;
        line-height: 70rpx;
        text-align: center;
        margin-top: 52rpx;
        color: #0289E8;
        font-size: 28rpx;
        font-family:PingFang SC;
        background: url(~@/static/choujiangcishu.png) 0upx 0upx/371rpx 78rpx no-repeat;
    }
    .welfare-item-content{
        width: 205rpx;
        height: 24rpx;
        color: #FFFFFF;
        font-size: 24rpx;
        text-align: center;
        margin-top: 43rpx;
        line-height: 24rpx;
        font-family:Adobe Heiti Std;
        background: url(~@/static/guize.png) 0upx 0upx/205rpx 24rpx no-repeat;
    }
    .welfare-item-zhushi{
        width: 100%;
        text-align: center;
        font-size: 26rpx;
        margin-top: 19rpx;
        line-height: 26rpx;
        color: #FFFFFF;
    }
</style>
