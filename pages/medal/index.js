// pages/medal/index.js
import {sendAction} from '../util/index'
var app = getApp()
Page({
  data:{
    goal:null,
    description:null,
    title:null,
    state:false
  },
  async onShow(){
    const res = await sendAction("/badge/getBadges",{
      openid:app.openid
    },"POST")
  },

  handleClick(e){ //事件委托
    if(e.target.id){
    const {id} = e.target;
    const {name} = e.target.dataset;
    this.getMedal(id,name)
    }

  },

  handleClickDetail(){ //控制勋章弹窗
    this.setData({
      state:false
    })
  },

  async getMedal(id,name){
    const res = await sendAction("/badge/getBadgeAll",{badge:id},"GET");
    this.setData({
      goal:res.data.goal,
      description:res.data.description,
      title:name,
      state:true
    })
  }
})