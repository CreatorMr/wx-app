//user.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    
  },

  onLoad: function () {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      new app.globalData.MyUtils();
    
  },

  //退出登录
  chearOut:function(){
    this.utils.jumpPage('reLaunch', 'login')
  },
  logs:function(){
    this.utils.insideSkip('logs')
  }
})
