var app = getApp();
import {sendAction} from '../util/index';
// pages/tree/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:"", //记录页列表循环遍历数组
    state:0, //记录页和编辑页状态
    input:"", //树语值
    selected:3, //选择的表情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },


  //整体事件委托
  async handleClick(e){
    const {id} = e.target

    //加号跳转编辑事件
    if(id=='push'){
      this.setData({
        state:1
      })
    }

    //提交编辑事件
    if(id=='add'){
      if(this.data.input==''){
        wx.showToast({
          title: '请输入树语',
          icon:'error'
        })
      }else{
      const res = await sendAction("/tree/addTreeInfo",{
        openid:app.openid,
        text:this.data.input,
        expression:this.data.selected
      },"POST")
      if(res.data.status==200){
        wx.showToast({
          title: '上传成功',
          success:async()=>{
            this.getMessage()
          }
        })
      }
    }
    }

    //删除事件
    if(id=='delete'){
      wx.showModal({
        content:"确定删除这条树洞吗？",
        success:async(res)=>{
          console.log(res);
          if(res.confirm==true){
            await sendAction("/tree/deleteTreeInfo",{
              openid:app.openid,
              flag:e.target.dataset.flag
            },"POST")
            this.getMessage()
          }
        }
      })
    }

    //返回事件
    if(id=='return'){
      this.setData({
        state:0
      })
    }
  },


  //心情头像选择
  handleClickSelect(e){
    if(e.target.id){
      this.setData({
        selected:e.target.id
      })
    }
  },


  //输入框
  handleChangeInput(e){
    this.setData({
      input:e.detail.value
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
    this.getMessage();
  },

  async getMessage(){
    const res = await sendAction("/tree/findTreeAll",{
      openid:app.openid
    },"POST")
    this.setData({
      List:res.data.data,
      state:0
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