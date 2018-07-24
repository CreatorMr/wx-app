function formatTime (time) {
  let date = new Date(time)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

function formatDate(days = 1) {
  var timestamp = Date.parse(new Date())
  let date = new Date(timestamp + 86400000 * days)
  var year = date.getFullYear()
  var month = (date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):date.getMonth() + 1
  var day = date.getDate()<10?'0'+date.getDate():date.getDate()
  let res = year + '' + month + ''+ day
  return res
}

function formatPreDate(days = 1) {
  var timestamp = Date.parse(new Date())
  let date = new Date(timestamp + 86400000 * days)  //691200000
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  let res = [year, month, day].map(formatNumber).join('-')
  return res
}
function formatTimeNextDate(time, days = 1) {
  console.log(new Date())
  var timestamp = Date.parse(new Date(time))
  let date = new Date(timestamp + 86400000 * days)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  let res = [year, month, day].map(formatNumber).join('-')
  return res
}
function formatPreWeek(data){
  let W = new Array('周一','周二','周三','周四','周五','周六','周日') 
  return W[new Date(data.substring(0,4),parseInt(data.substring(5,7)) + 1,data.substring(8,10)).getDay()]
}
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 正则表达式验证
function regExp (target, fmt) {
  return fmt.test(target)
}

function regExpPhoneNum (pNum) {
  return regExp(pNum, /^1[3-9]\d{9}$/)
}

function regExpVerifyCode (code) {
  return regExp(code, /\d{6}$/)
}

function regExpPrice (price) {
  return regExp(price, /^(0|[0-9]{1,4})(\.[0-9]{0,2})?$/)
}
// 获取当前时间 小时&分钟
function getHourOrMinutes(type , date) {
  if(type === 'hours'){
    var time = date.getHours();
  }else{
    var time = date.getMinutes();
  }
  return time;
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatPreDate: formatPreDate,
  formatTimeNextDate: formatTimeNextDate,
  formatPreWeek: formatPreWeek,
  regExp: regExp,
  regExpPhoneNum: regExpPhoneNum,
  regExpVerifyCode: regExpVerifyCode,
  regExpPrice: regExpPrice,
  getHourOrMinutes: getHourOrMinutes
}