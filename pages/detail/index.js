// pages/detail/index.js
var app = getApp();
import {sendAction} from '../util/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundURL:null,
    action:null,
    message:null //当天信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {day} = options;
    const str = day.slice(3);
    this.getDetail(str);
  },

  async getDetail(day){
    const res = await sendAction("/day/recordInfo",{
      openid:app.openid,
      day:day
    },"POST")
    this.setData({
      backgroundURL:res.data.background,
      action:res.data.action1,
      message:res.data.dayInfo
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