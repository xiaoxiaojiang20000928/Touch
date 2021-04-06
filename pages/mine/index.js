// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userName:"",
      url:""
    }
  },

  getUserInfo(res){
    this.setData({
      userInfo:{
        userName:res.detail.userInfo.nickName,
        url:res.detail.userInfo.avatarUrl
      }
    })
  },

  onLoad: function (options) {
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userInfo:{
            userName:res.userInfo.nickName,
            url:res.userInfo.avatarUrl
          }
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
})