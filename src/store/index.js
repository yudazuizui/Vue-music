import {
  createStore
} from 'vuex'
import {
  getMusicLyric
} from "@/request/api/item.js"
import { getPhoneLogin } from "@/request/api/home.js"
export default createStore({
  state: {
    playList: [{ //播放列表
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      id: 1446137141,
      name: "雨爱（抖音版）",
      ar: [{ name: "灏灏灏仔" }]
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停按钮的显示
    detailShow: false, //歌曲详情页的显示
    lyricList: {},//歌词
    currentTime: 0,//当前时间
    duration: 0,//歌曲总时长
    isLogin: false,//判断是否登录
    isFooterMusic: true,//判断底部组件是否需要显示
    token: "",
    user: {},//用户信息
  },
  mutations: {
    updateIsbtnShow(state, value) {
      state.isbtnShow = value
    },
    pushPlayList(state, value) {
      state.playList.push(value)
    },
    updatePlayList(state, value) {
      state.playList = value
      // console.log(state.playList);
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    updateDetailShow(state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList(state, value) {
      state.lyricList = value
    },
    updateCurrentTime(state, value) {
      // console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration(state, value) {
      state.duration = value
    },
    updateIsLogin(state, value) {
      state.isLogin = true
    },
    updateToken(state, value) {
      state.token = value
      localStorage.setItem('token', state.token)
    },
    updateUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async getLyric(context, value) {
      let res = await getMusicLyric(value)
      // console.log(res);
      context.commit("updateLyricList", res.data.lrc)
    },
    async getLogin(context, value) {
      let res = await getPhoneLogin(value);
      // console.log(res);
      return res
    }
  },
  modules: {}
})
