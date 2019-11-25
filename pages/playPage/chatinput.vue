<template>
	<view class="footer">
		<!-- <view class="footer-left">
			<view class="uni-icon uni-icon-mic" @tap="startRecognize"> </view>
		</view> -->
		<view class="footer-center">
			<input class="input-text" type="text" v-model="inputValue"  placeholder="说点什么呗" @focus ="inputFocus" @blur="inputBlur" ></input>
		</view>
		<view  class="footer-right" v-if="inputFocusStatus" @click="sendMessge">
			<view id='msg-type'>发送</view>
		</view>
		<view class="playFoot_button" v-if="!inputFocusStatus">
			<label>
				<image v-if="imageStatus" class="bottomIcon" src="../../static/yishoucang.png" @click="toAddLike"></image>
			</label>
			<label>
				<image v-if="!imageStatus" class="bottomIcon" src="../../static/shoucang.png" @click="toAddLike"></image>
			</label>
			<label>
				<image class="bottomIcon downImage" src="../../static/xiazai.png" @click="toDownLoad"></image>
			</label>
			<label>
				<image class="bottomIcon shareImage" src="../../static/fenxiang.png" @click="toShare"></image>
			</label>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
				inputFocusStatus:false,
				collectImage:false
			}
		},
		props: {
			imageStatus: {
				type: Boolean,
			}
		},
		methods: {
			inputFocus(){
				this.inputFocusStatus =true;
				this.$emit("inputFocusEvent");
			},
			inputBlur(){
				var   self  = this;
				 setTimeout(function(){
			   self.inputFocusStatus =false;
			   self.inputValue = '';
			   self.$emit("inputBlurEvent");
				}, 300)
				
			},
			sendMessge () {
				
				var that = this;
				if(this.$store.state.isLogin){
					if (that.inputValue.trim() == '') {
						that.inputValue = '';
					} else {
						this.$emit("sendComent",{inputValue:that.inputValue});
						that.inputValue = '';
					}
				}else{
					this.$emit("toLoginEvent");
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				}
			},
			toAddLike(){
				if(this.$store.state.isLogin){
					this.$emit("addMyLikeEvent");
				}else{
					this.$emit("toLoginEvent");
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				}
			},
			toDownLoad(){
				this.$emit("toDownLoadEvent");
			},
			toShare(){
				this.$emit("toShareEvent");
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
		align-items: center;
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
		margin-left: 60upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		width:130upx;
		height:74upx;
		background:rgba(216,37,93,1);
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
		margin-left: 30upx;
		width:400upx;
		height:74upx;
		border: solid 1upx #E8E8E8;
		overflow: hidden;
		border-radius: 15upx;
		padding-left: 30upx;
		font-size: 24upx;
	}
	.playFoot_button {
		margin-top: 25upx;
		/* margin-left: 5upx; */
	}
	.bottomIcon {
	   margin-left: 40upx;
	   width:40upx;
	   height: 40upx;
	   
	
	}
</style>
