// 打开数据库
function openDB(){
	plus.sqlite.openDatabase({
		name: 'first',
		path: '_doc/test.db',
		success: function(e){
			console.log('openDatabase success!');
		},
		fail: function(e){
			console.log('openDatabase failed: '+JSON.stringify(e));
		}
	});
}
// 关闭数据库
function closeDB(){
	plus.sqlite.closeDatabase({
		name: 'first',
		success: function(e){
			console.log('closeDatabase success!');
		},
		fail: function(e){
			console.log('closeDatabase failed: '+JSON.stringify(e));
		}
	});
}
// 执行SQL语句
function executeSQL(){
	plus.sqlite.executeSql({
		name: 'first',
		sql: 'create table if not exists database("where" CHAR(110),"location" CHAR(100),"age" INT(11))',
		success: function(e){
			console.log('executeSql success!');
			plus.sqlite.executeSql({
				name: 'first',
				sql: "insert into database values('北京','安乐林','11')",
				success: function(e){
					console.log('executeSql success!');
				},
				fail: function(e){
					console.log('executeSql failed: '+JSON.stringify(e));
				}
			});
		},
		fail: function(e){
			console.log('executeSql failed: '+JSON.stringify(e));
		}
	});
}
// 查询SQL语句
function selectSQL(){
	plus.sqlite.selectSql({
		name: 'first',
		sql: 'select * from database',
		success: function(data){
			console.log('selectSql success: ');
			for(var i in data){
				console.log(data[i]);
			}
		},
		fail: function(e){
			console.log('selectSql failed: '+JSON.stringify(e));
		}
	});
}
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}
function getNowTime(fmt){
	let date = new Date();
	console.log(date,fmt);
	if(/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth()+1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	}
	console.log(o);
	for(let k in o){    
		let str = o[k]+'';
		if(new RegExp(`(${k})`).test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
		}
	}
	function padLeftZero(str){
				return ('00'+str).substr(str.length);
			}
	return fmt;
	
}
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
function CreateNotification (m,n) {
    var NotifyID = n;
    var main = plus.android.runtimeMainActivity();  
    var Context = plus.android.importClass("android.content.Context");  
    var Noti = plus.android.importClass("android.app.Notification");  
    var NotificationManager = plus.android.importClass("android.app.NotificationManager");  
    var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)  
    var Notification = plus.android.importClass("android.app.Notification");  
    var mNotification = new Notification.Builder(main);
    var Intent = plus.android.importClass("android.content.Intent");  
    var PendingIntent = plus.android.importClass("android.app.PendingIntent");  
    var intent = new Intent(main, main.getClass());
    var pendingIntent = PendingIntent.getActivity(main, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);
    var r = plus.android.importClass("android.R");
    
    // mNotification.setOngoing(true);
    mNotification.setContentTitle("98影院");
    mNotification.setContentText(m);
    mNotification.setSmallIcon(r.drawable.ic_notification_overlay);
    mNotification.setTicker("98影院的最新资讯来了")
    mNotification.setContentIntent(pendingIntent);
    mNotification.setAutoCancel(true);
    // mNotification.setNumber(10);
    mNotification.setDefaults(Noti.DEFAULT_ALL);//声音、闪灯、震动效果，可叠加
    mNotification.setPriority(Noti.PRIORITY_DEFAULT);//通知优先级
    mNotification.flags=Notification.FLAG_ONLY_ALERT_ONCE;//发起通知时震动
    var mNb = mNotification.build()  
    nm.notify(NotifyID, mNb); 
}

function CreateDownNotification (progress) {
    var systemVer = uni.getSystemInfoSync().system.split(".")[0];
    var downProgress = progress.toString();
    var NotifyID = 1;
    var main = plus.android.runtimeMainActivity();  
    var Context = plus.android.importClass("android.content.Context");  
    var NotificationManager = plus.android.importClass("android.app.NotificationManager");  
    var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)  
    var Notification = plus.android.importClass("android.app.Notification");
    if (systemVer >= 8) {
        var mNotification = new Notification.Builder(main, "98video");
    } else {
        var mNotification = new Notification.Builder(main);
    }
    var Intent = plus.android.importClass("android.content.Intent");  
    var PendingIntent = plus.android.importClass("android.app.PendingIntent");  
    var intent = new Intent(main, main.getClass());
    var pendingIntent = PendingIntent.getActivity(main, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);
    var R = plus.android.importClass("android.R");
    
    // mNotification.setSmallIcon(R.mipmap.ic_launcher);
    mNotification.setSmallIcon(R.drawable.ic_notification_overlay);
    // mNotification.setLargeIcon(BitmapFactory.decodeResource(getResources(), R.drawable.ic_launcher));
    //禁止用户点击删除按钮删除
    mNotification.setAutoCancel(false);
    //禁止滑动删除
    mNotification.setOngoing(true);
    //取消右上角的时间显示
    mNotification.setShowWhen(false);
    mNotification.setContentIntent(pendingIntent);
    mNotification.setContentTitle("下载中..." + downProgress + "%");
    mNotification.setProgress(100, progress, false);
    
    var mNb = mNotification.build();
    nm.notify(NotifyID, mNb);
    if (progress == 100) {
        nm.cancel(NotifyID);
    }
}

function randomStr () {
    if (this.$store.state.deviceId == '') {
        var str = "",
            randomFlag = false,
            range = 32,
            max = null,
            pos = null,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            // 随机产生
        if(randomFlag){
            range = Math.round(Math.random() * (max-min)) + min;
        }
        for(var i=0; i<range; i++){
            pos = Math.round(Math.random() * (arr.length-1));
            str += arr[pos];
        }
        this.$store.commit('storeDevice',str)
    }
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	getNowTime:getNowTime,
    CreateNotification: CreateNotification
}