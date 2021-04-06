import {navigator} from '../util/index';

// pages/day1/index.js
Page({
  data: {
    action:false,
    actiontalk:false,
    actiontalk2:false,
    input:false,
    taskUnfinish:true,
    taskFinish:false
  },

  handleChangeAction(){
    this.setData({
      action:true,
      actiontalk:true,
      taskUnfinish:false,
      taskFinish:false
    })
  },

  handleChangeTalk(){
    this.setData({
      actiontalk:false,
      actiontalk2:true
    })
  },

  handleInput(){
    this.setData({
      input:true,
      actiontalk2:false
    })
  },

  handlepush(){
    this.setData({
      action:false,
      actiontalk:false,
      actiontalk2:false,
      input:false,
      taskFinish:true
    })
    wx.setStorage({
      data: null,
      key: 'day1',
    })
  },
  handletoxunzhang(){
    wx.navigateTo({
      url: '/pages/medal/index',
    })
  }
})