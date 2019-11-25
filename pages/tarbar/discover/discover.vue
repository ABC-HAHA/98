<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}
			 <hr class = "uni-swiper-border" :class="tabIndex==index ? 'active' : ''" />
			 </view>
		</scroll-view>
		<view class="_page" >
			<topics  class="single_page" ref="topics"  v-if="tabIndex==0" :newsitemData="tp1" :baseline ="topicBaseLine"></topics>
			<filmRanking class="single_page"  ref="filmRanking" v-if="tabIndex==1" :newsitemData="tp2" :tabBars ="tabBars2" :baseline ="rankingBaseLine"></filmRanking>
		</view>
	</view>
</template>
<script>
	import topics from '@/pages/discover/topics/topics';
	import filmRanking from '@/pages/discover/filmRanking/filmRanking.vue';
	export default {
		components: {
			topics,
			filmRanking
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				topicBaseLine:false,
				rankingBaseLine:false,
				tabBars: [{
					name: '热门专题',
					id: 'guanzhu'
				}, {
					name: '观影排行',
					id: 'tuijian'
				}],
				tabBars2:[
					 {
						"typeName": "电影",
						"typeId": "1"
					},
					{
						"typeName": "连续剧",
						"typeId": "2"
					}			
				],
				tp1: [
					
				
				],
				tp2:[  {
            "data": [
                {
                    "vodArea": "美国",
                    "vodId": "2088",
                    "vodDirector": "本·斯蒂勒",
                    "vodPlayUrl": "HD高清$https://cn1.343480.com/20190701/5pXIOV5r/index.m3u8$$$HD高清$https://cn1.343480.com/share/5GZm4YpRm1G7I4z4",
                    "typeName": "电影",
                    "vodName": "白日梦想家",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-02/15620677324.jpg",
                    "vodYear": "2013",
                    "vodActor": "本·斯蒂勒,克里斯汀·韦格,亚当·斯科特,西恩·潘"
                },
                {
                    "vodArea": "英国",
                    "vodId": "3507",
                    "vodDirector": "Mark,McQueen",
                    "vodPlayUrl": "HD高清$https://cn2.343480.com/20190708/gBkzdPvD/index.m3u8$$$HD高清$https://cn2.343480.com/share/FsJtfAdezkzLgnnQ",
                    "typeName": "电影",
                    "vodName": "魔鬼游乐场",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-08/156256492014.jpg",
                    "vodYear": "2010",
                    "vodActor": "Danny,Dyer,Shane,Taylor,Craig,Fairbrass,Daniela,Denby-Ashe"
                },
                {
                    "vodArea": "中国大陆",
                    "vodId": "4239",
                    "vodDirector": "李遥波",
                    "vodPlayUrl": "HD高清$https://cn1.343480.com/20190711/LNEP53kM/index.m3u8$$$HD高清$https://cn1.343480.com/share/iA4Uxg6BvZAPpNB7",
                    "typeName": "电影",
                    "vodName": "总裁在上7：遥远的她",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-11/201907111562780907.png",
                    "vodYear": "2017",
                    "vodActor": "朱圣祎,翁虹,潘子剑,叶小开"
                },
                {
                    "vodArea": "中国大陆",
                    "vodId": "4691",
                    "vodDirector": "丁亚",
                    "vodPlayUrl": "HD高清$https://cn2.343480.com/20190712/aaWFwqrl/index.m3u8$$$HD高清$https://cn2.343480.com/share/w7yiawrFmzjybf4K",
                    "typeName": "电影",
                    "vodName": "外星人来了",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-12/201907121562878892.png",
                    "vodYear": "2017",
                    "vodActor": "谢昀杉,林晨,李健仁,蓝烯"
                },
                {
                    "vodArea": "韩国",
                    "vodId": "1128",
                    "vodDirector": "金民锡",
                    "vodPlayUrl": "HD高清$https://cn1.343480.com/20190627/xCxCaLZA/index.m3u8$$$HD高清$https://cn1.343480.com/share/Tr87fOw2HssXAoFI",
                    "typeName": "电影",
                    "vodName": "超能力者",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-06-27/15616273753.jpg",
                    "vodYear": "2010",
                    "vodActor": "姜栋元,高修,郑恩彩"
                }
            ]
        },
        {
            "data": [
                {
                    "vodArea": "泰国",
                    "vodId": "2765",
                    "vodDirector": "Daeng,Burapa",
                    "vodPlayUrl": "第01集$https://cn2.343480.com/20190705/0zBzoOTV/index.m3u8#第02集$https://cn2.343480.com/20190705/8dcwi5Bn/index.m3u8#第03集$https://cn2.343480.com/20190705/WpeRKdmG/index.m3u8#第04集$https://cn2.343480.com/20190705/oZKJwXc3/index.m3u8#第05集$https://cn2.343480.com/20190705/Ozrvjsz1/index.m3u8#第06集$https://cn2.343480.com/20190705/O8PA6puD/index.m3u8#第07集$https://cn2.343480.com/20190705/hE938TMG/index.m3u8#第08集$https://cn2.343480.com/20190705/ooK9x52H/index.m3u8#第09集$https://cn2.343480.com/20190705/psskUB5x/index.m3u8#第10集$https://cn2.343480.com/20190705/DKS4rARf/index.m3u8#第11集$https://cn2.343480.com/20190705/XJcdGo7k/index.m3u8#第12集$https://cn2.343480.com/20190705/qjZSQJAN/index.m3u8#第13集$https://cn2.343480.com/20190705/obacaqfD/index.m3u8#第14集$https://cn2.343480.com/20190705/SRE54ybL/index.m3u8#第15集$https://cn2.343480.com/20190705/4qpWK5HA/index.m3u8#第16集$https://cn2.343480.com/20190705/ZeEf3Ka5/index.m3u8#第17集$https://cn2.343480.com/20190705/ENCHHaF7/index.m3u8#第18集$https://cn2.343480.com/20190705/mafOM8Mr/index.m3u8#第19集$https://cn2.343480.com/20190705/o9OsYP0I/index.m3u8#第20集$https://cn2.343480.com/20190705/DII7WKN1/index.m3u8#第21集$https://cn2.343480.com/20190705/BBz2yPnZ/index.m3u8#第22集$https://cn2.343480.com/20190705/6mbj3YZy/index.m3u8#第23集$https://cn2.343480.com/20190705/SHzlN4e8/index.m3u8#第24集$https://cn2.343480.com/20190705/VBdokq8i/index.m3u8#第25集$https://cn2.343480.com/20190705/s8PKIJVJ/index.m3u8#第26集$https://cn2.343480.com/20190705/FdeI92e7/index.m3u8#第27集$https://cn2.343480.com/20190705/593Tg2hO/index.m3u8#第28集$https://cn2.343480.com/20190705/PrRIf2zc/index.m3u8#第29集$https://cn2.343480.com/20190705/mEs3veQ2/index.m3u8#第30集$https://cn2.343480.com/20190705/pa5y3nl4/index.m3u8#第31集$https://cn2.343480.com/20190705/yYY4ReRr/index.m3u8#第32集$https://cn2.343480.com/20190705/m3Rpoe2s/index.m3u8#第33集$https://cn2.343480.com/20190705/UnZg3gjd/index.m3u8#第34集$https://cn2.343480.com/20190705/XTvwIIjy/index.m3u8#第35集$https://cn2.343480.com/20190705/0OGppe6E/index.m3u8#第36集$https://cn2.343480.com/20190705/wIPu1xQN/index.m3u8$$$第01集$https://cn2.343480.com/share/QSm6C4KM5kQnbs80#第02集$https://cn2.343480.com/share/IspbwA8EOa2hoYSg#第03集$https://cn2.343480.com/share/y6qoU7C8Eyx5CfAh#第04集$https://cn2.343480.com/share/PGDBQpmftKeY0Gr2#第05集$https://cn2.343480.com/share/TbF1TioeFMxz6zcB#第06集$https://cn2.343480.com/share/US6zhdZbyMHtUcrW#第07集$https://cn2.343480.com/share/M4CfH0e1xg3vk22N#第08集$https://cn2.343480.com/share/Jc6nRDR7RbBfL2YG#第09集$https://cn2.343480.com/share/wvvY5qau9mfKZ3tE#第10集$https://cn2.343480.com/share/qy0R0EwOmwhxluEO#第11集$https://cn2.343480.com/share/RCQNdB0aszjMzE8F#第12集$https://cn2.343480.com/share/lUI9B0ZVeXEQYdjn#第13集$https://cn2.343480.com/share/6qNtm9MBhhZLVITO#第14集$https://cn2.343480.com/share/XxXJaFejVtyPN9uJ#第15集$https://cn2.343480.com/share/muVpAqscCN3p4qV4#第16集$https://cn2.343480.com/share/wPO4q6YUBjqTkZwb#第17集$https://cn2.343480.com/share/XwSHAvW2ocsLuJyn#第18集$https://cn2.343480.com/share/JCOj0ZZgMySYASHK#第19集$https://cn2.343480.com/share/1AV9r6fUUZqSGwPn#第20集$https://cn2.343480.com/share/inDCLES92VcKXeLQ#第21集$https://cn2.343480.com/share/cyYKs8LrbyX37CJT#第22集$https://cn2.343480.com/share/cUwtUJiG1123HsZc#第23集$https://cn2.343480.com/share/Ch7JY30TZOGlMEpU#第24集$https://cn2.343480.com/share/eeB80GxloJL7SpxK#第25集$https://cn2.343480.com/share/MwePvEsqiXhoizM9#第26集$https://cn2.343480.com/share/s3p43dDRCED5cLCC#第27集$https://cn2.343480.com/share/UeLp8VmRWwEw1ga1#第28集$https://cn2.343480.com/share/jqS9OuCdBFdrHvY8#第29集$https://cn2.343480.com/share/qTl4zkt6onpOJZU8#第30集$https://cn2.343480.com/share/PyEObZrz6zbScEF8#第31集$https://cn2.343480.com/share/tEcf7ZLjvUOY69R9#第32集$https://cn2.343480.com/share/yKCwQdqs3mfvLZJG#第33集$https://cn2.343480.com/share/14FxGk6lgCZ7T7Ar#第34集$https://cn2.343480.com/share/4QJ2aRoCnUBg6UO1#第35集$https://cn2.343480.com/share/z3Z9pnYOFCEySnd6#第36集$https://cn2.343480.com/share/fFnajdWivdCTOjtD",
                    "typeName": "连续剧",
                    "vodName": "你的爱，我无力拒绝",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-05/201907051562334523.gif",
                    "vodYear": "2012",
                    "vodActor": "阿卡潘·纳玛查,帕德容琶·砂楚,Pooklook,Fonthip,Watcharatrakul"
                },
                {
                    "vodArea": "中国大陆",
                    "vodId": "420",
                    "vodDirector": "刘猛",
                    "vodPlayUrl": "第01集$https://cn1.343480.com/20190621/fF0olLFL/index.m3u8#第02集$https://cn1.343480.com/20190621/4tvPs2YG/index.m3u8#第03集$https://cn1.343480.com/20190621/ONd5e3WJ/index.m3u8#第04集$https://cn1.343480.com/20190621/hUZWrRiP/index.m3u8#第05集$https://cn1.343480.com/20190621/3o57iF9R/index.m3u8#第06集$https://cn1.343480.com/20190621/FWtG6YQd/index.m3u8#第07集$https://cn1.343480.com/20190621/PpMQMaKJ/index.m3u8#第08集$https://cn1.343480.com/20190621/ZPzoab5G/index.m3u8#第09集$https://cn1.343480.com/20190621/vbdwWMvv/index.m3u8#第10集$https://cn1.343480.com/20190621/CxTe3ezJ/index.m3u8#第11集$https://cn1.343480.com/20190621/haCf912T/index.m3u8#第12集$https://cn1.343480.com/20190621/h03L63mH/index.m3u8#第13集$https://cn1.343480.com/20190621/hT9XJY27/index.m3u8#第14集$https://cn1.343480.com/20190621/onlUnffi/index.m3u8#第15集$https://cn1.343480.com/20190621/AGX3IBEA/index.m3u8#第16集$https://cn1.343480.com/20190621/PQN92fk1/index.m3u8#第17集$https://cn1.343480.com/20190621/4IP7Gs1N/index.m3u8#第18集$https://cn1.343480.com/20190621/pehZODZb/index.m3u8#第19集$https://cn1.343480.com/20190621/8VrKC76p/index.m3u8#第20集$https://cn1.343480.com/20190621/OWCaUG4K/index.m3u8#第21集$https://cn1.343480.com/20190621/mnQTZeTP/index.m3u8#第22集$https://cn1.343480.com/20190621/ZgtKkg7m/index.m3u8#第23集$https://cn1.343480.com/20190621/yBPqcV5U/index.m3u8#第24集$https://cn1.343480.com/20190621/x5uOmzDY/index.m3u8#第25集$https://cn1.343480.com/20190621/SQsWjLLd/index.m3u8#第26集$https://cn1.343480.com/20190621/lLgnw5Yx/index.m3u8#第27集$https://cn1.343480.com/20190621/69P4mHmI/index.m3u8#第28集$https://cn1.343480.com/20190621/713F3Rri/index.m3u8#第29集$https://cn1.343480.com/20190621/7lujVPOZ/index.m3u8#第30集$https://cn1.343480.com/20190621/jA5ckXwH/index.m3u8#第31集$https://cn1.343480.com/20190621/J3nicIOF/index.m3u8#第32集$https://cn1.343480.com/20190621/mfcKplOA/index.m3u8#第33集$https://cn1.343480.com/20190621/yD2HHq3F/index.m3u8#第34集$https://cn1.343480.com/20190621/ftJsrAAC/index.m3u8#第35集$https://cn1.343480.com/20190621/mHkeq5kU/index.m3u8#第36集$https://cn1.343480.com/20190621/X6qOj3s1/index.m3u8#第37集$https://cn1.343480.com/20190621/UnWSpnYc/index.m3u8#第38集$https://cn1.343480.com/20190621/GaTg4xmM/index.m3u8#第39集$https://cn1.343480.com/20190621/ZDe6KNlO/index.m3u8#第40集$https://cn1.343480.com/20190621/8Bx1ESFO/index.m3u8#第41集$https://cn1.343480.com/20190621/lxTfzgNb/index.m3u8#第42集$https://cn1.343480.com/20190621/g7y4Ghoi/index.m3u8#第43集$https://cn1.343480.com/20190621/mSVnBOIs/index.m3u8#第44集$https://cn1.343480.com/20190621/RNeei9e3/index.m3u8#第45集$https://cn1.343480.com/20190621/dwlf9lkx/index.m3u8#第46集$https://cn1.343480.com/20190621/eE6K4L42/index.m3u8#第47集$https://cn1.343480.com/20190621/p8zI1wDv/index.m3u8#第48集$https://cn1.343480.com/20190621/3CstdSlU/index.m3u8#第49集$https://cn1.343480.com/20190621/7Rv6GsTj/index.m3u8#第50集$https://cn1.343480.com/20190621/bcYdUBXm/index.m3u8#第51集$https://cn1.343480.com/20190621/iiQHXz4m/index.m3u8#第52集$https://cn1.343480.com/20190621/JnRmNBCF/index.m3u8$$$第01集$https://cn1.343480.com/share/NJlJSwDRsJu40GHJ#第02集$https://cn1.343480.com/share/LBcDfiMfuX2WMVL5#第03集$https://cn1.343480.com/share/UfrSVwD45i7Ua7s2#第04集$https://cn1.343480.com/share/PIWc9yTE64UERkEL#第05集$https://cn1.343480.com/share/uRbAZCjtvGQcQQvH#第06集$https://cn1.343480.com/share/AjJaFaDMUrrip36V#第07集$https://cn1.343480.com/share/nvQC2ZVg9yo1uaRv#第08集$https://cn1.343480.com/share/HnGrm29tpq52p1V8#第09集$https://cn1.343480.com/share/7d3okl51zi0zsJbc#第10集$https://cn1.343480.com/share/HDPl6JXuPdi0cVLJ#第11集$https://cn1.343480.com/share/v15cF384MMxwdWv0#第12集$https://cn1.343480.com/share/VNJ7AaleskXshplA#第13集$https://cn1.343480.com/share/0cKhSmDz0o68Snrb#第14集$https://cn1.343480.com/share/YVpUTKb96UnKyMIz#第15集$https://cn1.343480.com/share/S6RRo32D3smuJePS#第16集$https://cn1.343480.com/share/oSZslYRLFZ0m2cZp#第17集$https://cn1.343480.com/share/4ZLRzzs1hhTGPEmu#第18集$https://cn1.343480.com/share/87kUvAzS1DG41ErI#第19集$https://cn1.343480.com/share/Gl0YuwmcIrtvKizU#第20集$https://cn1.343480.com/share/RTQgmXn7fUAtT9Ya#第21集$https://cn1.343480.com/share/m0bBzBHeEg3FCeEv#第22集$https://cn1.343480.com/share/7rReKJ0S2bUsRZxg#第23集$https://cn1.343480.com/share/1FCsgVlEjyIEKu09#第24集$https://cn1.343480.com/share/J9bPBHZEZdyb1ilW#第25集$https://cn1.343480.com/share/Go8EOx3L71ld8BgW#第26集$https://cn1.343480.com/share/lg02n02Ybxe7aNv5#第27集$https://cn1.343480.com/share/EVd03ZfXDP6UUyXi#第28集$https://cn1.343480.com/share/ySB795dpPr4ALiXu#第29集$https://cn1.343480.com/share/H7niBZoExOLA1Ulg#第30集$https://cn1.343480.com/share/iXOTvjQn41Y0EoT7#第31集$https://cn1.343480.com/share/XgxnLNrjzd3pEHDZ#第32集$https://cn1.343480.com/share/S5MhO5z9bbDoSBtr#第33集$https://cn1.343480.com/share/Qq33flmFDRIfLEcK#第34集$https://cn1.343480.com/share/hJI6E0BxIpGg2KWI#第35集$https://cn1.343480.com/share/3PlQSygqFigA1yNm#第36集$https://cn1.343480.com/share/HlK3lUboCOB3bGGj#第37集$https://cn1.343480.com/share/eU6FWpp0hHDIa1zm#第38集$https://cn1.343480.com/share/S4V4u7LU8r4IAOGD#第39集$https://cn1.343480.com/share/IvMTORJOUp2Yy4UJ#第40集$https://cn1.343480.com/share/TtVumb0AKhGHoP4q#第41集$https://cn1.343480.com/share/FdU6udBJgWzEdzzT#第42集$https://cn1.343480.com/share/1TEkXPH2LNgWIgY5#第43集$https://cn1.343480.com/share/39BO17s7iCh5VV7f#第44集$https://cn1.343480.com/share/L7l0PzEe9BiU0CrH#第45集$https://cn1.343480.com/share/QE0tJDKZuaZaY5L7#第46集$https://cn1.343480.com/share/1lx27Pnn8xAB7R66#第47集$https://cn1.343480.com/share/557Zzzu23eXnNfcV#第48集$https://cn1.343480.com/share/Sg1qurVGDVR4ebwJ#第49集$https://cn1.343480.com/share/PyAADgnhPuKokOq2#第50集$https://cn1.343480.com/share/eUdoR3HsbswQLAES#第51集$https://cn1.343480.com/share/NNdvLNJElezhakpK#第52集$https://cn1.343480.com/share/4wJI1BYYByBswJp9",
                    "typeName": "连续剧",
                    "vodName": "特警力量",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-06-21/156110745710.jpg",
                    "vodYear": "2015",
                    "vodActor": "安雅萍,徐洪浩,任天野,王妍之"
                },
                {
                    "vodArea": "中国大陆",
                    "vodId": "1541",
                    "vodDirector": "成志超,戴小哲,田少波",
                    "vodPlayUrl": "第01集$https://cn2.343480.com/20190629/2Dd81YY3/index.m3u8#第02集$https://cn2.343480.com/20190629/kYIrI69k/index.m3u8#第03集$https://cn2.343480.com/20190629/KbNnbS2W/index.m3u8#第04集$https://cn2.343480.com/20190629/Ae8wAGKd/index.m3u8#第05集$https://cn2.343480.com/20190629/rDh1IIdD/index.m3u8#第06集$https://cn2.343480.com/20190629/BCE5lKi3/index.m3u8#第07集$https://cn2.343480.com/20190629/5gUWBOmN/index.m3u8#第08集$https://cn2.343480.com/20190629/hzjtEkM1/index.m3u8#第09集$https://cn2.343480.com/20190629/U9DiBgZn/index.m3u8#第10集$https://cn2.343480.com/20190629/9OElbI47/index.m3u8#第11集$https://cn2.343480.com/20190629/Mikc5dLJ/index.m3u8#第12集$https://cn2.343480.com/20190629/gddscLnZ/index.m3u8#第13集$https://cn2.343480.com/20190629/7rjInDnt/index.m3u8#第14集$https://cn2.343480.com/20190629/W3VaN7k2/index.m3u8#第15集$https://cn2.343480.com/20190629/x54Lkfbh/index.m3u8#第16集$https://cn2.343480.com/20190629/O8GW0w0d/index.m3u8#第17集$https://cn2.343480.com/20190629/FjAjyxdx/index.m3u8#第18集$https://cn2.343480.com/20190629/lhV7n9BT/index.m3u8#第19集$https://cn2.343480.com/20190629/4fybYGXN/index.m3u8#第20集$https://cn2.343480.com/20190629/NsVmwKdK/index.m3u8#第21集$https://cn2.343480.com/20190629/fr7Aibcz/index.m3u8#第22集$https://cn2.343480.com/20190629/sKVaNT5c/index.m3u8#第23集$https://cn2.343480.com/20190629/d6cdUlm9/index.m3u8#第24集$https://cn2.343480.com/20190629/BbAs2jis/index.m3u8#第25集$https://cn2.343480.com/20190629/LgaZWiCd/index.m3u8#第26集$https://cn2.343480.com/20190629/Or4d13Kr/index.m3u8#第27集$https://cn2.343480.com/20190629/QHmLplpx/index.m3u8#第28集$https://cn2.343480.com/20190629/AV1mWSXP/index.m3u8#第29集$https://cn2.343480.com/20190629/HN181e5n/index.m3u8#第30集$https://cn2.343480.com/20190629/DujaUcvJ/index.m3u8#第31集$https://cn2.343480.com/20190629/ICbPbFNb/index.m3u8#第32集$https://cn2.343480.com/20190629/F4psOTuI/index.m3u8#第33集$https://cn2.343480.com/20190629/0h99mgiD/index.m3u8#第34集$https://cn2.343480.com/20190629/GOYj63OT/index.m3u8#第35集$https://cn2.343480.com/20190629/UROQHw38/index.m3u8#第36集$https://cn2.343480.com/20190629/TiaqgKpw/index.m3u8#第37集$https://cn2.343480.com/20190629/ctFTAJWL/index.m3u8#第38集$https://cn2.343480.com/20190629/XEb1t9qS/index.m3u8#第39集$https://cn2.343480.com/20190629/1CORdnEp/index.m3u8#第40集$https://cn2.343480.com/20190629/IeOEdskW/index.m3u8$$$第01集$https://cn2.343480.com/share/yUP410NFHyw7Z3m1#第02集$https://cn2.343480.com/share/LhvSIenan1ZDl7ji#第03集$https://cn2.343480.com/share/E2JVGDqNbsNYx4u2#第04集$https://cn2.343480.com/share/36817ejZQ6ZHC3fN#第05集$https://cn2.343480.com/share/r0Yfh7YMkSUw3aUn#第06集$https://cn2.343480.com/share/7eJsMSuupFk396HD#第07集$https://cn2.343480.com/share/UgsMtUABy3pGv01Q#第08集$https://cn2.343480.com/share/zuPjCQWTi5WQ5zVG#第09集$https://cn2.343480.com/share/QBlUnNynohjzqAlG#第10集$https://cn2.343480.com/share/1bUM2Npygl5zjY1W#第11集$https://cn2.343480.com/share/z0yryDVE65fgR4Ak#第12集$https://cn2.343480.com/share/VVIjknUE3Z9d9fbg#第13集$https://cn2.343480.com/share/k9CkMlgYuKEWxFe1#第14集$https://cn2.343480.com/share/eroHLBRtemiKoCCm#第15集$https://cn2.343480.com/share/pbpKfxYNdb8z7i2j#第16集$https://cn2.343480.com/share/F7lKhhsYtxWNBBfZ#第17集$https://cn2.343480.com/share/paK0PIyeMO1jimHG#第18集$https://cn2.343480.com/share/FwzguqmwReP5EwKN#第19集$https://cn2.343480.com/share/Fz36STzCIFFPhLMO#第20集$https://cn2.343480.com/share/pxpdKBziyGC0Z5oc#第21集$https://cn2.343480.com/share/jdFKpYubAzuMIOxo#第22集$https://cn2.343480.com/share/lVyjebi7EeZiEgaQ#第23集$https://cn2.343480.com/share/F057sLK2Yw5Ts73X#第24集$https://cn2.343480.com/share/LUtyLe6yJZIg43xP#第25集$https://cn2.343480.com/share/Dp7EWwkhSjbSsGvh#第26集$https://cn2.343480.com/share/iGxIe8BiQOHntrH8#第27集$https://cn2.343480.com/share/Nki9T0XuC7ugG2JZ#第28集$https://cn2.343480.com/share/OLIbJkAxfe8toziH#第29集$https://cn2.343480.com/share/ESwydBLLoq1L0MPL#第30集$https://cn2.343480.com/share/SfXQHp5Mck4bI4P5#第31集$https://cn2.343480.com/share/WB5vJLz7NJ8oM2og#第32集$https://cn2.343480.com/share/zUgchdGElieOeB3I#第33集$https://cn2.343480.com/share/OWRnV3Mbv8sPP3w0#第34集$https://cn2.343480.com/share/Jpm6m9xvDoUo3Msc#第35集$https://cn2.343480.com/share/OuHSV69QFo20vCpA#第36集$https://cn2.343480.com/share/uD3BI0aI8pryjTQN#第37集$https://cn2.343480.com/share/dO7Ce7kJnSRCPtST#第38集$https://cn2.343480.com/share/NJ5zhdshpMLv9C92#第39集$https://cn2.343480.com/share/JSeaIn2bGn0pur6R#第40集$https://cn2.343480.com/share/MgrPgMVgC5U73DiQ",
                    "typeName": "连续剧",
                    "vodName": "天坑鹰猎",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-06-30/201906301561870718.png",
                    "vodYear": "2018",
                    "vodActor": "王俊凯,文淇,蒋依依,叶筱玮"
                },
                {
                    "vodArea": "中国大陆",
                    "vodId": "3636",
                    "vodDirector": "鞠觉亮,周晓文,于敏,赵箭",
                    "vodPlayUrl": "第01集$https://cn2.343480.com/20190709/ohO043gm/index.m3u8#第02集$https://cn2.343480.com/20190709/LY9ac0kk/index.m3u8#第03集$https://cn2.343480.com/20190709/4Dmp9LJ0/index.m3u8#第04集$https://cn2.343480.com/20190709/w4OZnC3K/index.m3u8#第05集$https://cn2.343480.com/20190709/bmVFWWrS/index.m3u8#第06集$https://cn2.343480.com/20190709/hvBOyrZR/index.m3u8#第07集$https://cn2.343480.com/20190709/3YiK2TFb/index.m3u8#第08集$https://cn2.343480.com/20190709/urnKRKBz/index.m3u8#第09集$https://cn2.343480.com/20190709/d86NwUUO/index.m3u8#第10集$https://cn2.343480.com/20190709/PvmQiPwV/index.m3u8#第11集$https://cn2.343480.com/20190709/ZXYyPlld/index.m3u8#第12集$https://cn2.343480.com/20190709/DetO8ca6/index.m3u8#第13集$https://cn2.343480.com/20190709/MOzIXvao/index.m3u8#第14集$https://cn2.343480.com/20190709/l3GEVFUR/index.m3u8#第15集$https://cn2.343480.com/20190709/YhY1nEoY/index.m3u8#第16集$https://cn2.343480.com/20190709/7ApR4NqO/index.m3u8#第17集$https://cn2.343480.com/20190709/4Dw2XIoL/index.m3u8#第18集$https://cn2.343480.com/20190709/vrIce3CR/index.m3u8#第19集$https://cn2.343480.com/20190709/C1CCZIex/index.m3u8#第20集$https://cn2.343480.com/20190709/3sH9t588/index.m3u8#第21集$https://cn2.343480.com/20190709/a8bKSDxq/index.m3u8#第22集$https://cn2.343480.com/20190709/EYnePtEw/index.m3u8#第23集$https://cn2.343480.com/20190709/lA6TbsHs/index.m3u8#第24集$https://cn2.343480.com/20190709/OarFBX8t/index.m3u8#第25集$https://cn2.343480.com/20190709/KyXQsTHs/index.m3u8#第26集$https://cn2.343480.com/20190709/m5eZoGQV/index.m3u8#第27集$https://cn2.343480.com/20190709/1Ji07ifE/index.m3u8#第28集$https://cn2.343480.com/20190709/1mL7Zpg9/index.m3u8#第29集$https://cn2.343480.com/20190709/UvFbDV9i/index.m3u8#第30集$https://cn2.343480.com/20190709/lFehtwT2/index.m3u8#第31集$https://cn2.343480.com/20190709/EXVa0763/index.m3u8#第32集$https://cn2.343480.com/20190709/Q1d8KrJw/index.m3u8#第33集$https://cn2.343480.com/20190709/R570KgxW/index.m3u8#第34集$https://cn2.343480.com/20190709/ee3nNfS0/index.m3u8#第35集$https://cn2.343480.com/20190709/pNZMVlkU/index.m3u8#第36集$https://cn2.343480.com/20190709/QHCSdFMd/index.m3u8#第37集$https://cn2.343480.com/20190709/XjB9J5sF/index.m3u8#第38集$https://cn2.343480.com/20190709/csdOZOFU/index.m3u8#第39集$https://cn2.343480.com/20190709/E4S9EkLR/index.m3u8#第40集$https://cn2.343480.com/20190709/2ahLMEjn/index.m3u8$$$第01集$https://cn2.343480.com/share/SobKXb5xLTKUE9GB#第02集$https://cn2.343480.com/share/Md7pzPa9ivHCnFFt#第03集$https://cn2.343480.com/share/PrA1jBpTWJ6691g7#第04集$https://cn2.343480.com/share/Ze2zJmLEYio1A5S7#第05集$https://cn2.343480.com/share/uhwy7WEpbhkyqo3T#第06集$https://cn2.343480.com/share/MlWvPvEehjRePIgf#第07集$https://cn2.343480.com/share/0DH1Z6CfMj51ogC3#第08集$https://cn2.343480.com/share/BgwCV3NwIlIA9Z8H#第09集$https://cn2.343480.com/share/5UxGmJR8LE2ky2o5#第10集$https://cn2.343480.com/share/wuXW7Lad0vN0kwNi#第11集$https://cn2.343480.com/share/5QjyIPJQliUEPJb2#第12集$https://cn2.343480.com/share/V1MmifTxe0ut6BfT#第13集$https://cn2.343480.com/share/0t0DBh8AxV7iPU4c#第14集$https://cn2.343480.com/share/Y75iN3bOmn53RieV#第15集$https://cn2.343480.com/share/x0NC25lXG9w47Z88#第16集$https://cn2.343480.com/share/G4zs1rnW4arzwk4m#第17集$https://cn2.343480.com/share/UOtX7axbSgMBxlAP#第18集$https://cn2.343480.com/share/HPG5620aoFpyZQ1e#第19集$https://cn2.343480.com/share/x2r86FXSgj4YH6cD#第20集$https://cn2.343480.com/share/NGBBmgyPPQguWQrg#第21集$https://cn2.343480.com/share/vhDbAiTeU5quVCWr#第22集$https://cn2.343480.com/share/dC8UPyxTRiWT4Qh2#第23集$https://cn2.343480.com/share/Roay6VcXMEd89ifV#第24集$https://cn2.343480.com/share/QiGieG2nB3gmzGmI#第25集$https://cn2.343480.com/share/wa1loag1bRsins6P#第26集$https://cn2.343480.com/share/fjdws4ANKmRE4jAl#第27集$https://cn2.343480.com/share/v6TsbxqbiCfF9wA6#第28集$https://cn2.343480.com/share/u21gQaEAo4VmyYhH#第29集$https://cn2.343480.com/share/qYlyYy7Y7w8Fc8IB#第30集$https://cn2.343480.com/share/A4IHVNJ0QUHDeFtQ#第31集$https://cn2.343480.com/share/DHAMGegLA7qvnLzA#第32集$https://cn2.343480.com/share/9EKdaPW4B6LjFjwJ#第33集$https://cn2.343480.com/share/CHRgPIDy1LWeV9l4#第34集$https://cn2.343480.com/share/0eWC8bLbUAxwysXo#第35集$https://cn2.343480.com/share/skh0sQSY7cJC46Gk#第36集$https://cn2.343480.com/share/6MoTHkV9JpYXRoZa#第37集$https://cn2.343480.com/share/2lIN1Eq0J4xOVfa6#第38集$https://cn2.343480.com/share/Ms0ddY8v12dUhbhU#第39集$https://cn2.343480.com/share/9ubySeGDtv2RS0Tf#第40集$https://cn2.343480.com/share/GsZ8B5T38fFu7A71",
                    "typeName": "连续剧",
                    "vodName": "天龙八部",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-09/201907091562618496.png",
                    "vodYear": "2003",
                    "vodActor": "胡军,林志颖,高虎,修庆"
                },
                {
                    "vodArea": "美国",
                    "vodId": "2318",
                    "vodDirector": "格温妮丝·豪特尔-佩顿,麦克·勒曼,彼得·威勒",
                    "vodPlayUrl": "第01集$https://cn2.343480.com/20190703/U759A5qe/index.m3u8#第02集$https://cn2.343480.com/20190703/POBrVQcL/index.m3u8#第03集$https://cn2.343480.com/20190703/3dTuoSor/index.m3u8#第04集$https://cn2.343480.com/20190703/YlvxDVDx/index.m3u8#第05集$https://cn2.343480.com/20190703/0ghyEBr0/index.m3u8#第06集$https://cn2.343480.com/20190703/WHC1BCwn/index.m3u8#第07集$https://cn2.343480.com/20190703/qjwtN1Y6/index.m3u8#第08集$https://cn2.343480.com/20190703/KGwwxqvA/index.m3u8#第09集$https://cn2.343480.com/20190703/YnYsioLS/index.m3u8#第10集$https://cn2.343480.com/20190703/VuDcNr6t/index.m3u8$$$第01集$https://cn2.343480.com/share/nl6mtRgBcLAovFe4#第02集$https://cn2.343480.com/share/HRwYqda6lipOb2iX#第03集$https://cn2.343480.com/share/YF83CATVlMIgWkeb#第04集$https://cn2.343480.com/share/ubHInGVgUFPIyIJ0#第05集$https://cn2.343480.com/share/BQOh6tS8NDSw8kBM#第06集$https://cn2.343480.com/share/ka1PcPMABLKSJ0M7#第07集$https://cn2.343480.com/share/H9O6HyWGmhE5HuMi#第08集$https://cn2.343480.com/share/8C0PWmAbZ7YAiYFo#第09集$https://cn2.343480.com/share/KYcu4d0iBL5zA4lX#第10集$https://cn2.343480.com/share/FC1825WEqlsiE9Ad",
                    "typeName": "连续剧",
                    "vodName": "暴君 第三季",
                    "vodPic": "https://img.398zy.com/upload/vod/2019-07-03/201907031562152574.gif",
                    "vodYear": "2016",
                    "vodActor": "亚当·雷纳,詹妮佛·芬尼甘,阿什拉夫·巴姆,莫兰·阿提艾斯"
                }
            ]
        }]	
			}
		},
		onLoad() {
			uni.request({
				url: this.websiteUrl + '/api/discover/list',
				success: (res) => {
					if (res.data.status == 0) {
						this.tabBars2 = res.data.tabs;
						this.tp1 = res.data.tp1;
						this.tp2 = res.data.tp2;
					}else{
						console.log("res.data.message");
					}
				}
			});
			// this.newsitems = this.randomfn()
		},
		onReachBottom(){
			if(this.tabIndex == 0){
				this.$refs.topics.pageNumber ++;
				uni.request({
					url: this.websiteUrl + '/api/discover/getRotTopic?startPage=' + this.$refs.topics.pageNumber  ,
					success: (res) => {
						if(res.data.message == "success"){
							if(res.data.rot.length > 0){
								for(var i = 0 ;i<res.data.rot.length;i++){
									this.tp1.push(res.data.rot[i]);
								}
							}else{
								this.topicBaseLine = true;
							}
						}else{
							console.log("请求数据失败");
						}
						
					}
				});
			}else{
				var index = this.$refs.filmRanking.tabBars[this.$refs.filmRanking.tabIndex].typeId;
				if(this.$refs.filmRanking.pageNumberArry[index]){
					this.$refs.filmRanking.pageNumberArry[index] ++ ;
				}else{
					this.$refs.filmRanking.pageNumberArry[index] =2;
				}
				uni.request({
					url: this.websiteUrl + '/api/discover/getMovieRank/'+index+'?startPage='+ this.$refs.filmRanking.pageNumberArry[index],
					success: (res) => {
						if(res.data.message == "success"){
								if(res.data.movieRank && res.data.movieRank.length > 0 ){
									for(var i = 0 ;i<res.data.movieRank.length;i++){
										this.tp2[this.$refs.filmRanking.tabIndex].data.push(res.data.movieRank[i]);
									}
								}else{
									this.rankingBaseLine = true;
								}
						}else{
							console.log("请求数据失败");
						}
					}
				});
			}
		},
		methods: {
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					this.tabIndex = tabIndex;
				}
			}
		}
	}
</script>

<style>
	/* tab bar */
	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		/* margin-top: 50upx; */
		
		/* height: 100%; */
	}
	
	.uni-tab-bar .list {
		width: 750upx;
		height: 100%;
	}
	.uni-swiper-tab {
		position:fixed;
		margin-bottom: 0;
		width: 100%;
		white-space: nowrap;
		line-height: 30upx;
		height: 120upx;
		border-bottom: 1px solid #C1C1C1;
		background-color: #FFFFFF;
		z-index:10 ;
	}
	
	.swiper-tab-list {
		font-size: 32upx;
		width: 375upx;
		display: inline-block;
		text-align: center;
		color: #555;
		margin-top: 58upx;
		/* border-left: 1px solid #555; */
	}
	.uni-swiper-border{
		flex: 1;
		width:137upx;
		margin:30upx auto;
		border: 0;
		/* height:4upx; */
		border-top: 1px solid #FFFFFF;
		border-bottom: 1px solid #FFFFFF;
	}
	
	.uni-tab-bar .active {
		color: #007AFF;
	}
	.uni-swiper-border.active {
		border-top: 1px solid #248ADF;
		border-bottom: 1px solid #248ADF;
	}
	.uni-tab-bar .swiper-box {
		flex: 1;
		width: 100%;
		height: calc(100% - 100upx);
	}
	.uni-tab-bar-loading{
		padding:20upx 0;
	}
	._page{
		margin-top: 120upx;
		/* position: relative; */
	z-index:5 ;
	}
	.single_page{
		/* margin-top: 90upx; */
	}
	
		/**设置滚动条的样式**/
	

</style>
