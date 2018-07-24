/**
 * 小程序路由配置文件
 */
const app_interior_url={  //应用内跳转
	login:                  '/pages/login/login',
	home:                   '/pages/home/home',
	index:                  '/pages/index/index',                       			//首页
	logs:                   '/pages/logs/logs',
	chart:                  '/pages/view/chart',
	depart:                 '/pages/depart/depart'
}


function MyUtils() {
    const pages = getCurrentPages()
    const curPage = pages[pages.length - 1]
    this.__page = curPage
    curPage.utils = this
}
/**
 * 页面跳转
 * @param url [地址简写]
 * @param skipData {object} [传入下一页的srarch]
 */
MyUtils.prototype.insideSkip = function (urlkey, skipData) {
    console.log(urlkey)
    return skip(urlkey, skipData)
}
/**
 * 选择类型页面跳转
 * @param jumpKey [微信跳转api]
 * @param urlkey {string} [页面名]
  * @param skipData {object} [传入下一页的srarch]
 */
MyUtils.prototype.jumpPage = function (jumpKey, urlkey, skipData) {
    return jumpPage(jumpKey, urlkey, skipData)
}
/*
 *常用页面跳转方法
*/
function skip(urlkey, skipData){
    let skipUrl= app_interior_url[urlkey]
    let search=''
    if(skipData){
      search='?'
      for(var key in skipData){
          search+=key+"="+skipData[key]+"&"
      }
    }
    let data = {
      url: skipUrl+search
    }
    return wx['navigateTo'](data) 
}

/*
* 跳转到某页
 */
function jumpPage(jumpKey, urlkey, skipData) {
  let skipUrl= app_interior_url[urlkey]
  let search=''
    if(skipData){
      search='?'
      for(var key in skipData){
          search+=key+"="+skipData[key]+"&"
      }
    }
  let data = {
    url: skipUrl+search
  }
  console.log(data)
  return wx[jumpKey](data)
}

module.exports = MyUtils