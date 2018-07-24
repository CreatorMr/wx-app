//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dataSource: [{ 'name': '', 'path': '/pages/view/Dialog' }, { 'name': '支付密码输入框-PassWordInput', 'path': '/pages/view/pwdInput' }, { 'name': '商品数量加减-Quantity', 'path': '/pages/view/numberPlusMinus' }, { 'name': '提示消息-Toast', 'path': '/pages/view/messageView' }, { 'name': '顶部提示-Toptip', 'path': '/pages/view/topMessage' }, { 'name': '角标-Badge', 'path': '/pages/view/badge' }, { 'name': '星级评分-Rater', 'path': '/pages/view/star' }, { 'name': '图表-Chart', 'path': '/pages/view/chart' }, { 'name': '富文本解析-RichText', 'path': '/pages/view/rich_text' }, { 'name': '图片截取-Screen', 'path': '/pages/view/screen' }]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      new app.globalData.MyUtils()
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //跳转到查看数据图表
  goDataReport:function(){
     wx.navigateTo({
      url: '../view/chart'
    })
  },

  //请求接口例如getData
  getData:function(){
    let reqData = {}
    
  }
})
