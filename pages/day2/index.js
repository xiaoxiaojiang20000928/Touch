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
      input:false,
      taskFinish:true
    })
    wx.setStorage({
      data: null,
      key: 'day2',
    })
  },
  handleReturn(){
    wx.switchTab({
      url: '/pages/record/index',
    })
  },
  onShow(){
    wx.getStorage({
      key: 'day2',
      success:()=>{
        this.setData({
          taskUnfinish:false,
          taskFinish:true
        })
      }
    })
  }
})