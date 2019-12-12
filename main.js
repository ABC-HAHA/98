import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import share from '@/common/share.js'

Vue.prototype.$store = store
// Vue.prototype.socketUrl = 'ws://47.98.171.179:8888/socket';
// Vue.prototype.websiteUrl = 'http://47.98.171.179:8080/98video';
// Vue.prototype.websiteUrl = 'http://47.98.171.179:8088/98video';
// Vue.prototype.websiteUrl = 'http://192.168.5.81:8080';
// Vue.prototype.websiteUrl = 'http://192.168.5.101:8000';
// Vue.prototype.websiteUrl = 'http://192.168.5.103:8000';
// Vue.prototype.websiteUrl = 'http://192.168.5.254:8080/98video';
Vue.prototype.websiteUrl = 'http://1188xy.cn/98video';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
