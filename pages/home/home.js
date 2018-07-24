//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用',
    showSurprise:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
      id:0,
      name:"ess",
      img:"/img/ess.png"
    },{
      id:1,
      name:"crm",
      img:"/img/crm.png"
    },{
      id:2,
      name:"cms",
      img:"/img/cms.png"
    },{
      id:3,
      name:"erp",
      img:"/img/erp.png"
    },{
      id:4,
      name:"ehs",
      img:"/img/ehs.png"
    },{
      id:5,
      name:"ccs",
      img:"/img/ccs.png"
    }]
  },

  onLoad: function () {
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
    new app.globalData.MyUtils();
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
  goDepart:function(e){
    console.log(e);
    //跳转到相应的部门的页面，出入部门相关参数
    this.utils.insideSkip("depart",{depart:e.currentTarget.dataset.item})
  },

  //请求接口例如getData
  getData:function(){
    let reqData = {}
    
  },
  //遮罩层例子
  goSurprise:function(){
    this.setData({
      showSurprise:true
    })
  },
  //关闭遮罩
  hideSurprise:function(){
    this.setData({
      showSurprise:false
    })
  }
})
