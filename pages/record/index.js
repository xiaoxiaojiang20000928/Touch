// pages/record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status1:false,
    status2:false,
    status3:false,
    status4:false,
    status5:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    wx.getStorage({
      key: 'day1',
      success:()=>{
        this.setData({
          status1:true
        })
      }
    })
    wx.getStorage({
      key: 'day2',
      success:()=>{
        this.setData({
          status2:true
        })
      }
    })
    wx.getStorage({
      key: 'day3',
      success:()=>{
        this.setData({
          status3:true
        })
      }
    })
    wx.getStorage({
      key: 'day4',
      success:()=>{
        this.setData({
          status4:true
        })
      }
    })
    wx.getStorage({
      key: 'day5',
      success:()=>{
        this.setData({
          status5:true
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})