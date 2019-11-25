import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    TarCur: 0,
    isLogin: false,
    isDown: false,
    isPush: true,
    userInfo: {},
    userImage: {},
    deviceId: ''
}
const getters = {
    
}
const mutations = {
    changeTar(state, index){
        state.TarCur = index;
    },
    login(state, userObj){
        state.isLogin = true;
        state.userInfo.userPhone = userObj.userPhone;
        state.userInfo.userName = userObj.userName;
        state.userInfo.userCode = userObj.userCode;
        state.userInfo.userId = userObj.userId;
        state.userInfo.loginToken = userObj.loginToken;
        state.userInfo.userText = userObj.userText;
        uni.setStorage({
            key: 'userInfo',
            data: userObj
        })
    },
    logout(){
        state.isLogin = false;
        state.userInfo = {};
        uni.removeStorage({
            key: 'userInfo'
        })
    },
    storeImage(state, imgObj){
        state.userImage.networkImage = imgObj.networkImage;
        state.userImage.localImage = imgObj.localImage;
        uni.setStorage({
            key: 'userImage',
            data: imgObj
        })
    },
    allowDown(state, netObj){
        if (netObj.status === 1) {
            state.isDown = true;
        } else{
            state.isDown = false;
        }
        uni.setStorage({
            key: 'network',
            data: netObj
        })
    },
    allowPush(state, pushtObj){
        if (pushtObj.status === 1) {
            state.isPush = true;
        } else{
            state.isPush = false;
        }
        uni.setStorage({
            key: 'push',
            data: pushtObj
        })
    },
    storeDevice(state, str){
        state.deviceId = str;
        uni.setStorage({
            key: 'device',
            data: str
        })
    }
}
const actions = {
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})