<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {}
		},
		onLaunch: function() {
			console.log('App Launch')
			//#ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			//#endif
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.login(res.data);
				}
			});
			uni.getStorage({
				key: 'network',
				success: (res) => {
					this.allowDown(res.data);
				}
			});
			uni.getStorage({
				key: 'push',
				success: (res) => {
					this.allowPush(res.data);
				}
			});

			uni.getStorage({
				key: 'userImage',
				success: (res) => {
					this.storeImage(res.data);
				}
			});
			uni.getStorage({
				key: 'device',
				success: (res) => {
					this.storeDevice(res.data);
				}
			});
			this.randomStr()
			this.update()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login', 'allowDown', 'allowPush', 'storeImage', 'storeDevice']),
			update() {
				//#ifdef APP-PLUS
				let that = this;
				let systemName = plus.os.name.toUpperCase();
				let versionNum;
				let progress = 0;
				let downtimer;
				let appid = plus.runtime.appid;
				let upgradeCycle = 604800000;
				let lastTime = 0;
				uni.getStorage({
					key: 'version_update_time',
					success: function(res) {
						lastTime = res.data;
					}
				})
				plus.runtime.getProperty(appid, function(wgtinfo) {
					versionNum = plus.storage.getItem("app-id"); // wgtinfo.versionCode;
					console.log(versionNum);
					if (!versionNum) {
						versionNum = wgtinfo.versionCode;
					} else {
						versionNum = versionNum.replace(/\./g, "")
					}
					uni.request({
						url: that.websiteUrl + '/sys/checkversion',
						method: 'POST',
						data: {
							systemName: systemName,
							versionCode: versionNum
						},
						success: res => {
							let data = res.data;
							if (data.data) {
								var currentVersion = data.data.versionName;
							}
							// plus.storage.setItem("app-id", res.data.data.versionName.toString());
							let currentTime = new Date();
							currentTime = currentTime.getTime();
							if (data.data != null) {
								let doNotification = that.CreateDownNotification();
								if ((lastTime + upgradeCycle) > currentTime) {
									return
								}
								if (plus.networkinfo.getCurrentType() != 3) {
									if (data.data.versionWgtPath != '') {
										uni.showModal({
											title: '发现新版本',
											content: '有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？',
											showCancel: true,
											cancelText: '下次再说',
											confirmText: '现在更新',
											success: res => {
												if (res.confirm) {
													switch (systemName) {
														case "ANDROID":
															let downloadTask = uni.downloadFile({
																url: data.data.versionWgtPath,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {
																			plus.storage.setItem("app-id", currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		}, function() {
																			plus.nativeUI.toast('更新失败');
																		})
																	} else {
																		doNotification(progress, false);
																		clearInterval(downtimer);
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															downloadTask.onProgressUpdate(function(res) {
																progress = res.progress;
															})
															doNotification(progress, true);
															clearInterval(downtimer);
															downtimer = setInterval(function() {
																doNotification(progress, true);
																if (progress == 100) {
																	clearInterval(downtimer);
																	return
																}
															}, 500)
															break;
														case "IOS":
															uni.downloadFile({
																url: data.data.versionWgtPath,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {
																			plus.storage.setItem("app-id", currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		}, function() {
																			plus.nativeUI.toast('更新失败');
																		})
																	} else {
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															break;
													}
												} else {
													let currentTapTime = new Date();
													currentTapTime = currentTapTime.getTime();
													uni.setStorage({
														key: 'version_update_time',
														data: currentTapTime,
														success: function() {
															console.log('保存成功');
														}
													})
													return
												}
											},
											fail: () => {},
											complete: () => {}
										});
									}
									if (data.data.path != '') {
										uni.showModal({
											title: '发现新版本',
											content: '有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？',
											showCancel: true,
											cancelText: '下次再说',
											confirmText: '现在更新',
											success: res => {
												if (res.confirm) {
													switch (systemName) {
														case "ANDROID":
															let downloadTask = uni.downloadFile({
																url: data.data.path,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {}, function() {
																			plus.nativeUI.toast('安装失败');
																		})
																	} else {
																		doNotification(progress, false);
																		clearInterval(downtimer);
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															downloadTask.onProgressUpdate(function(res) {
																progress = res.progress;
															})
															doNotification(progress, true);
															clearInterval(downtimer);
															downtimer = setInterval(function() {
																doNotification(progress, true);
																if (progress == 100) {
																	clearInterval(downtimer);
																	return
																}
															}, 500)
															break;
														case "IOS":
															plus.runtime.openURL(data.data.path);
															break;
													}
												} else {
													let currentTapTime = new Date();
													currentTapTime = currentTapTime.getTime();
													uni.setStorage({
														key: 'version_update_time',
														data: currentTapTime,
														success: function() {
															console.log('保存成功');
														}
													})
													return
												}
											},
											fail: () => {},
											complete: () => {}
										});
									}
								} else {
									if (data.data.versionWgtPath != '') {
										uni.showModal({
											title: '发现新版本',
											content: '有新的版本发布，是否立即进行新版本下载？',
											showCancel: true,
											cancelText: '下次再说',
											confirmText: '现在更新',
											success: res => {
												if (res.confirm) {
													switch (systemName) {
														case "ANDROID":
															let downloadTask = uni.downloadFile({
																url: data.data.versionWgtPath,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {
																			plus.storage.setItem("app-id", currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		}, function() {
																			plus.nativeUI.toast('更新失败');
																		})
																	} else {
																		doNotification(progress, false);
																		clearInterval(downtimer);
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															downloadTask.onProgressUpdate(function(res) {
																progress = res.progress;
															})
															doNotification(progress, true);
															clearInterval(downtimer);
															downtimer = setInterval(function() {
																doNotification(progress, true);
																if (progress == 100) {
																	clearInterval(downtimer);
																	return
																}
															}, 500)
															break;
														case "IOS":
															uni.downloadFile({
																url: data.data.versionWgtPath,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {
																			plus.storage.setItem("app-id", currentVersion.toString());
																			plus.nativeUI.toast('更新成功');
																			plus.runtime.restart();
																		}, function() {
																			plus.nativeUI.toast('更新失败');
																		})
																	} else {
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															break;
													}
												} else {
													let currentTapTime = new Date();
													currentTapTime = currentTapTime.getTime();
													uni.setStorage({
														key: 'version_update_time',
														data: currentTapTime,
														success: function() {
															console.log('保存成功');
														}
													})
													return
												}
											},
											fail: () => {},
											complete: () => {}
										});
									}
									if (data.data.path != '') {
										uni.showModal({
											title: '发现新版本',
											content: '有新的版本发布，是否立即进行新版本下载？',
											showCancel: true,
											cancelText: '下次再说',
											confirmText: '现在更新',
											success: res => {
												if (res.confirm) {
													switch (systemName) {
														case "ANDROID":
															let downloadTask = uni.downloadFile({
																url: data.data.path,
																success: function(res) {
																	if (res.statusCode === 200) {
																		plus.runtime.install(res.tempFilePath, {
																			force: true
																		}, function() {}, function() {
																			plus.nativeUI.toast('安装失败');
																		})
																	} else {
																		doNotification(progress, false);
																		clearInterval(downtimer);
																		plus.nativeUI.toast('下载失败，请检查网络');
																	}
																}
															})
															downloadTask.onProgressUpdate(function(res) {
																progress = res.progress;
															})
															doNotification(progress, true);
															clearInterval(downtimer);
															downtimer = setInterval(function() {
																doNotification(progress, true);
																if (progress == 100) {
																	clearInterval(downtimer);
																	return
																}
															}, 500)
															break;
														case "IOS":
															plus.runtime.openURL(data.data.path);
															break;
													}
												} else {
													let currentTapTime = new Date();
													currentTapTime = currentTapTime.getTime();
													uni.setStorage({
														key: 'version_update_time',
														data: currentTapTime,
														success: function() {
															console.log('保存成功');
														}
													})
													return
												}
											},
											fail: () => {},
											complete: () => {}
										});
									}
								}
							}
						},
						fail: () => {},
						complete: () => {}
					});
				})
				//#endif
			},
			randomStr() {
				if (this.$store.state.deviceId == '') {
					var str = "",
						randomFlag = false,
						range = 32,
						max = null,
						pos = null,
						arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
							'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
							'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
						];
					// 随机产生
					if (randomFlag) {
						range = Math.round(Math.random() * (max - min)) + min;
					}
					for (var i = 0; i < range; i++) {
						pos = Math.round(Math.random() * (arr.length - 1));
						str += arr[pos];
					}
					this.$store.commit('storeDevice', str)
				}
			},
			CreateDownNotification() {
				var NotifyID = 1;
				var main = plus.android.runtimeMainActivity();
				var Notification = plus.android.importClass("android.app.Notification");
				var NotificationManager = plus.android.importClass("android.app.NotificationManager");
				// var PendingIntent = plus.android.importClass("android.app.PendingIntent");
				var Context = plus.android.importClass("android.content.Context");
				// var Intent = plus.android.importClass("android.content.Intent");
				var Build = plus.android.importClass("android.os.Build");
				// var R = plus.android.importClass("android.R");
				var R = plus.android.importClass("com.yangze.cinema.R");
				var BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
				var nm = main.getSystemService(Context.NOTIFICATION_SERVICE);
				var mNotification = new Notification.Builder(main);
				// var intent = new Intent(main, main.getClass());
				// var intent = new Intent(Intent.ACTION_VIEW);
				// var pendingIntent = PendingIntent.getActivity(main, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);

				mNotification.setAutoCancel(false);
				mNotification.setOngoing(true);
				mNotification.setShowWhen(false);
				mNotification.setSmallIcon(R.mipmap.ic_launcher);
				// mNotification.setSmallIcon(R.drawable.ic_notification_overlay);
				mNotification.setLargeIcon(BitmapFactory.decodeResource(main.getResources(), R.mipmap.ic_launcher));
				if (Build.VERSION.SDK_INT >= 26) {
					var NotificationChannel = plus.android.importClass("android.app.NotificationChannel");
					var channel = new NotificationChannel("com.yangze.cinema", "downtask", NotificationManager.IMPORTANCE_DEFAULT);
					mNotification.setChannelId("com.yangze.cinema");
					nm.createNotificationChannel(channel);
				}

				function DoDownNotification(progress, isdown) {
					var downProgress = progress.toString();
					// intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Intent.FLAG_ACTIVITY_CLEAR_TOP);
					mNotification.setContentTitle("下载中..." + downProgress + "%");
					// mNotification.setContentIntent(pendingIntent);
					mNotification.setProgress(100, progress, false);

					var mNb = mNotification.build();
					nm.notify(NotifyID, mNb);
					if (progress == 100) {
						nm.cancel(NotifyID);
					}
					if (!isdown) {
						nm.cancel(NotifyID);
					}
				}

				return DoDownNotification

			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	image {
		will-change: transform
	}
</style>
