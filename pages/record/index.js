// pages/record/index.js
var app = getApp()
import {sendAction} from '../util/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day1:false,
    day2:false,
    day3:false,
    day4:false,
    day5:false,
    day6:false,
    day7:false,
    day8:false,
    day9:false,
    day10:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){

  },

  handleClick(e){
    if(e.target.id){
    wx.navigateTo({
      url: `/pages/detail/index?day=${e.target.id}`,
    })
  }
  },

  async getDay(){
    const res = await sendAction("/day/record",{
      openid:app.openid
    },"POST")
    this.setData({
      day1:res.data.day1,
      day2:res.data.day2,
      day3:res.data.day3,
      day4:res.data.day4,
      day5:res.data.day5,
      day6:res.data.day6,
      day7:res.data.day7,
      day8:res.data.day8,
      day9:res.data.day9,
      day10:res.data.day10,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getDay()
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