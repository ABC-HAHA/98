<template>
	<view class="footer">
		<!-- <view class="footer-left">
			<view class="uni-icon uni-icon-mic" @tap="startRecognize"> </view>
		</view> -->
		<view class="footer-center">
			<input class="input-text" type="text" v-model="inputValue"></input>
		</view>
		<view class="footer-right" @tap="sendMessge">
			<view id='msg-type' >发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: ''
			}
		},
		methods: {
			startRecognize: function () {
				var options = {};
				var that = this;
				options.engine = 'iFly';
				that.inputValue = "";
				plus.speech.startRecognize(options, function (s) {
					that.inputValue += s;
				}, function (e) {
					console.log("语音识别失败：" + e.message);
				});
			},
			sendMessge () {
				var that = this;
				if(this.$store.state.isLogin){
					if (that.inputValue.trim() == '') {
						that.inputValue = '';
					} else {
						this.$emit("sendMessage",{inputValue:that.inputValue});
						that.inputValue = '';
					}
				 }else{
				 	uni.navigateTo({
				 		url: '../../../pages/login/login'
				       })
				}
			}
		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		height: 100upx;
		min-height: 80upx;
		/* border-top: solid 1px #bbb; */
		/* overflow: hidden; */
		padding: 5upx;
		background-color: #FFFFFF;
	}
	.footer-left {
		width: 80upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer-right {
		margin-top: 10upx;
		margin-left: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		width:130upx;
		height:74upx;
		background:#248ADF;
		border-radius:10upx;
	}
	.footer-center {
		/* flex: 1; */
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.footer-center .input-text {
		/* flex: 1; */
		margin-top: 10upx;
		margin-left: 20upx;
		width:460upx;
		height:74upx;
		border: solid 1upx #E8E8E8;
		overflow: hidden;
		border-radius: 15upx;
	}
	.playFoot_button {
		margin-top: 25upx;
		margin-left: 15upx;
	}
	.bottomIcon {
	   margin-left: 25upx;
	
	}
</style>
