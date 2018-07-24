// pages/view/chart.js
const app = getApp()
const Util = require('../../utils/util.js')
const wxCharts = require('../../utils/wxcharts.js')
var lineChart = null;


Page({

  data: {
    opinionType:[{type:"北京"},{type:"上海"},{type:"广州"},{type:"深圳"}],
    startTime: Util.formatDate(-7),
    endTime: Util.formatDate(-1),
    startTimeDate: Util.formatPreDate(-7),
    endTimeDate: Util.formatPreDate(-1),
    countLost: 0,
    bldText: '全部便利点',
    scene:["http://i.bootstrapmb.com/2018/5/200251582.png"],
    windowWidth:320
  },
  onLoad: function (options) {
    new app.globalData.MyUtils()
     let res = wx.getSystemInfoSync()

    new app.globalData.MyUtils()
    let scrollHeight = res.model === 'iPhone 5'?res.windowHeight - 72:res.windowHeight - 85
    this.setData({
      userInfo: app.globalData.userInfo,
      windowWidth: res.windowWidth,
      scrollHeight: scrollHeight,
      deviceInfo: res
    })
    this.drawLine(this.data.windowWidth)
  },
  onShow: function () {
  
  },
  updateOpin:function(event){
    console.log(event);
    this.setData({
      indexType: this.data.opinionType[event.detail.value].type
    })
  },
   monthSelect () {
      this.setData({
        thisWeek: false,
        thisMonth: true,
        thisFree: false,
        startTime: Util.formatDate(-30),
        endTime: Util.formatDate(-1),
        startTimeDate: Util.formatPreDate(-30),
        endTimeDate: Util.formatPreDate(-1)
      })
  },
  weekSelect () {
      this.setData({
        thisWeek: true,
        thisMonth: false,
        thisFree: false,
        startTime: Util.formatDate(-7),
        endTime: Util.formatDate(-1),
        startTimeDate: Util.formatPreDate(-7),
        endTimeDate: Util.formatPreDate(-1)
      })
  },
  bindstartChange (e){
    let startTime = e.detail.value.replace("-","")
    this.setData({
      thisWeek: false,
      thisMonth: false,
      thisFree: true,
      startTime: startTime.replace("-",""),
      startTimeDate: e.detail.value
    })
  },
  bindendChange (e){
    let endTime = e.detail.value.replace("-","")
    this.setData({
      thisWeek: false,
      thisMonth: false,
      thisFree: true,
      endTime: endTime.replace("-",""),
      endTimeDate: e.detail.value
    })
  },

  previewImage: function (e) { 
    wx.previewImage({  
        urls: this.data.scene, // 当前显示图片的http链接 
        // 需要预览的图片http链接  使用split把字符串转数组。不然会报错 

      })  
  },
  otherChart:function(){
    this.utils.insideSkip("chart",{})
  },
  searchInput:function(e){
    /*this.setData({
      ss:e.detail.value
     })
     实时输入的内容赋值

     可以执行查询方法，接口方式类似home中的getData()
    */
  },
  //当前页面的数据折线图
  drawLine: function (windowWidth) {
    lineChart = new wxCharts({ 
      canvasId: 'lineCanvas',
      type: 'line',
      categories: [1,2,3,4,5,6,7,8],//this.data.W,
      animation: true,
      series: [{
        name: '丢失额',
        color: '#62AAFF',
        data: [12,4,7,19,23,1,5,12],//this.data.DS,
        format: function (val, name) {
          return val;
        }
      },{
        name: '销售额',
        color: '#FF554C',
        data: [1,4,8,11,12,5,10,3],//this.data.DS2,
        format: function (val, name) {
          return val;
        }
      }],
      xAxis: {
        disableGrid: false,
      },
      yAxis: {
        format: function (val) {
          return val;
        },
        min: 0
      },
      width: windowWidth,
      height: 300,
      dataLabel: true,
      dataPointShape: true,
      disablePieStroke: true,
      enableScroll: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  touchHandler (e) {
      lineChart.scrollStart(e);
  },
  moveHandler (e) {
      lineChart.scroll(e);
  },
  touchEndHandler (e) {
      lineChart.scrollEnd(e);    
  },
})