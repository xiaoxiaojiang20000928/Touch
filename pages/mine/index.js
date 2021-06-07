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
    wx.setStorageSync('userName', res.detail.userInfo.nickName);
    wx.setStorageSync('url', res.detail.userInfo.avatarUrl);
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
    try{
      const name = wx.getStorageSync('userName');
      const url = wx.getStorageSync('url');
      if(name){
        this.setData({
          userInfo:{
            userName:name,
            url:url
          }
        })
      }
    }catch(err){
      console.log(err);
    }
  }
})