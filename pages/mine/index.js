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

  handleClick(e){
    if(e.target.id=="push"){
      wx.navigateTo({
        url: '/pages/message/index',
      })
    }
    if(e.target.id=="help"){
      wx.navigateTo({
        url: '/pages/help/index',
      })
    }
    if(e.target.id=="aboutus"){
      wx.navigateTo({
        url: '/pages/aboutus/index',
      })
    }
  },

  onShow: function (options) {
    wx.getSetting({
      success:(res)=>{
        if(res.authSetting['scope.userInfo']){
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
      }
    })
  }
})