function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * 获取页面参数
 */
function getPageOptions () {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    return currentPage.options
}

/**
 * 1~5的数字转换为1,0;比如4=>[1,1,1,1,0],5=>[1,1,1,1,1]
 */
function numToArray(num) {
  let numArray = [0,0,0,0,0]
  for(let i=0;i<num;i++){
    numArray[i] = 1
  }
  return numArray
}


export default {
  formatNumber,
  formatTime,
  getPageOptions,
  numToArray
}
