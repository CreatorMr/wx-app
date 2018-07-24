//app.js
const MyUtils = require('/services/MyUtils.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getSystemInfo({
      success: function (res) {
        var kScreenW = res.windowWidth
        var kScreenH = res.windowHeight
        var Kmodel = res.model
        var Kversion = res.version
        var Ksystem = res.system
        wx.setStorageSync('kScreenW', kScreenW)
        wx.setStorageSync('kScreenH', kScreenH)
        wx.setStorageSync('Kmodel', Kmodel)
        wx.setStorageSync('Kversion', Kversion)
        wx.setStorageSync('Ksystem', Ksystem)
        let tody = new Date();
        let nian = tody.getFullYear();
        let youe = tody.getMonth() + 1;
        let day = tody.getDate();
        let hour = tody.getHours();
        let min = tody.getMinutes();
        let miao = tody.getSeconds();
        let total=nian+'年'+youe+'月'+day+'日'+hour+'时'+min+'分'+miao+'秒'
        wx.setStorageSync('entry_time', total)
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    MyUtils,
    userInfo: null

  }
})