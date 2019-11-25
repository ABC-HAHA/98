<template>
	<scroll-view class="wuc-tab" :class="tabClass" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
		<div v-if="!textFlex">
			<div class="wuc-tab-item" :class="[index === tabCur ? selectClass + ' cur':'']" v-for="(item,index) in tabList" :key="index" :id="index" @tap="tabSelect(index,$event)">
				<text :class="item.icon"></text>
				<span>{{item.name}}</span>
				<div class="line"></div>
			</div>
		</div>
		<div class="flex text-center" v-if="textFlex">
			<div class="wuc-tab-item flex-sub" :class="index === tabCur ? selectClass + ' cur':''" v-for="(item,index) in tabList" :key="index" :id="index" @tap="tabSelect(index,$event)">
				<text :class="item.icon"></text>
				<span>{{item.name}}</span>
			</div>
		</div>
	</scroll-view>
</template>
<script>
export default {
    name: 'wuc-tab',
    data() {
        return {};
    },
    props: {
        tabList: {
            type: Array,
            default() {
                return [];
            }
        },
        tabCur: {
            type: Number,
            default() {
                return 0;
            }
        },
        tabClass: {
            type: String,
            default() {
                return '';
            }
        },
        tabStyle: {
            type: String,
            default() {
                return '';
            }
        },
        textFlex: {
            type: Boolean,
            default() {
                return false;
            }
        },
        selectClass: {
            type: String,
            default() {
                return 'text-blue';
            }
        }
    },
    methods: {
        tabSelect(index, e) {
            if (this.currentTab === index) return false;
            this.$emit('update:tabCur', index);
            this.$emit('change', index);
        }
    },
    computed: {
        scrollLeft() {
            return (this.tabCur - 1) * 60;
        }
    }
};
</script>
<style>
div,
scroll-view,
swiper {
	box-sizing: border-box;
}
.wuc-tab-item.cur .line{
	position: absolute;
	width:38upx;
	height:10upx;
	background:rgba(36,138,223,1);
	border-radius:5upx;
	bottom: 0;
	left: 50%;
	margin-left: -19upx;
}
.wuc-tab-item.cur:first-child .line{
	margin-left: -30upx;
}
.wuc-tab {
    white-space: nowrap;
}
.wuc-tab-item {
	position: relative;
    height: 72upx;
    display: inline-block;
    line-height: 72upx;
    margin: 0 24upx 0 10upx;
    padding: 0 20upx;
	font-size: 30upx;
	font-weight: bold;
	color:rgba(45,45,45,1);
}
.wuc-tab-item:first-child{
	margin: 0 30upx 0 0;
    padding: 0 20upx 0 0;
}
.wuc-tab-item.cur {
    border-bottom: none;
}

.wuc-tab.fixed {
	position: fixed;
	width: 660upx;
	top: 120upx;
	left: 28upx;
	z-index: 1024;
}

.flex {
    display: flex;
}
.text-center {
    text-align: center;
}
.flex-sub {
    flex: 1;
}
.text-blue{
  color:rgba(36,138,223,1);
}
.text-white{
  color:#ffffff;
}
.bg-white{
    background-color: #ffffff;
}
.bg-blue{
    background-color: #0081ff;
}
.text-orange{
  color: #f37b1d
}

.text-xl {
	font-size: 36upx;
	font-weight:bold;
}
</style>
