// pages/medal/index.js
import {sendAction} from '../util/index'
var app = getApp()
Page({
  data:{
    medal:false
  },
  async onShow(){
    const res = await sendAction("/badge/getBadges",{
      openid:app.openid
    },"POST")
  },

  handleClick(e){
    const {id} = e.target;
    this.getMedal(id)
  },

  async getMedal(id){
    const res = await sendAction("/badge/getBadgeAll",{badge:id},"GET");
    console.log(res);
  }
})