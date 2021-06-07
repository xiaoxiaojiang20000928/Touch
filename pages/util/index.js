export const sendAction=(url,data={},method="GET")=>{
  wx.showLoading({
    title: '正在连接中',
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url:"https://www.yymlcy.cn:9999"+url,
      data,
      method,
      success:(res)=>{
        resolve(res)
      },
      fail:(err)=>{
        reject(err)
        wx.showModal({
          title:"连接失败",
          content:"请检查你的网络",
          showCancel:false
        })
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}