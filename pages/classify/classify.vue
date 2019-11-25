<template>
	<view class="classify">
		<view class="classify-item" v-for="(item ,index) in classifyArray" :key="index" @tap="toHome(index)">
		    <view class="classify-item-image">
		        <image :src="'/static/classify-'+item.typeId+'.png'" mode=""></image>
		    </view>
            <view class="classify-item-text">
                <text>{{item.name}}</text>
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classifyArray:[]
			}
		},
		methods: {
			toHome(index){
                uni.switchTab({
                    url:"/pages/tarbar/home/home"
                })
                this.$store.commit('changeTar',index)
            }
		},
        onLoad() {
            uni.request({
                url: this.websiteUrl + '/api/home/moretype',
                method: 'GET',
                data: {},
                success: res => {
                    this.classifyArray = res.data;
                },
                fail: () => {},
                complete: () => {}
            });
        }
	}
</script>

<style>
    .classify{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
    }
    .classify-item{
        width: 33%;
        height: 248upx;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1rpx solid #E3E3E3;
        border-right: 1rpx solid #E3E3E3;
    }
    .classify-item:nth-of-type(3){
        border-right: none;
    }
    .classify-item-image{
        width: 80upx;
        height: 80upx;
        margin-bottom: 20rpx;
    }
    .classify-item-image>image{
        width: 80upx;
        height: 80upx;
    }
    .classify-item-text>text{
        height:32upx;
        font-size:32upx;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:#1C1D1D;
        line-height:32upx;
    }
</style>
