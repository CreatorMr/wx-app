// pages/view/chart.js
const app = getApp()

Page({

  data: {
  
  },
  onLoad: function (options) {
    new app.globalData.MyUtils()
  },
  onShow: function () {
  
  },
   bindInputPhone: function (event) {
    console.log(event)
    let selData = event.detail.value
    this.data.account = selData
    if (this.data.account && this.data.password) {
      this.setData({
        CCC: true
      })
    } else {
      this.setData({
        CCC: false
      })
    }
  },
  bindInputPass: function (event) {
    console.log(event)
    let selData = event.detail.value
    this.data.password = selData
    if (this.data.account && this.data.password) {
      this.setData({
        CCC: true
      })
    } else {
      this.setData({
        CCC: false
      })
    }
  },
  login: function(e){
    if(this.data.account && this.data.password){
      this.utils.jumpPage('reLaunch', 'home')
    }else{
        wx.showToast({
            title: '请完成输入',
            icon: 'succes',
            duration: 1000,
            mask:true
        })      
        return 
    }
  }
})