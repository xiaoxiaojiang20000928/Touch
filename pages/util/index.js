export const sendAction=(url,data={},method="GET")=>{
  wx.showLoading({
    title: '正在连接中',
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url:"https://192.168.31.108:8081" +url,
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
          showCancel:true
        })
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}