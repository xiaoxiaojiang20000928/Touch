import {sendAction} from '../util/index';
var app = getApp();
Page({
  data:{
    static:true, //呼呼吃饭动画
    action:false, //呼呼走路动画
    action2:false, //呼呼撒花动画
    talk1:false,  //pre_message
    talk2:false, //last_message 
    upload:false, //第二次按钮 上传按钮
    input:false, //控制输入框显示
    input_value:null, //输入框的值
    pre_message:null, //一次对话值
    last_message:null, //二次对话值
    action1URL:null, //呼呼吃饭动画URL
    action2URL:null, //呼呼走路动画URL
    backgroundURL:null,  //背景URL
    blindbox:null //盲盒动效控制
  },

  onLoad(){
    
  },


  onShow(){
    if(app.openid==null){
      this.login()
    }else{
      this.getDay(app.openid)
    }

  },


  //登录流程
  login(){
    wx.login({
      success:(res)=>{
        this.getOpenid(res.code)
      }
    })
  },

  async getOpenid(code){

    const res = await sendAction("/user/login",{code:code},"POST");
    app.first=res.data.first;
    app.openid=res.data.openid;
    this.getDay(res.data.openid);
    if(app.first==true){
      wx.navigateTo({
        url: '/pages/firsthelp/index',
      })
    }
  },

  async getDay(openid){
    const res = await sendAction("/day/getUser_Day",{openid:openid},"POST")
    console.log('1111',res);
    app.day=res.data.user_day+1;
    this.setData({
      pre_message:res.data.pre_message,
      last_message:res.data.last_message,
      action1URL:res.data.action1,
      action2URL:res.data.action2,
      backgroundURL:res.data.background,
      blindbox:app.day
    })
  },


  //点击事件 输入事件
  handleInput(e){
    this.setData({
      input_value:e.detail.value
    })
  },

  handleClick(e){
    const {id} = e.target;
    if(id=="static"){
      this.setData({
        static:false,
        action:true,
        talk1:true
      })
    }
    if(id=="answer1"){
      this.setData({
        talk1:false,
        talk2:true
      })
    }
    if(id=="talk2"){
      this.setData({
        talk2:false,
        input:true,
        upload:true
      })
    }
    if(id=="answer2"){
      this.sendAction()
      this.setData({
        action:false,
        upload:false,
        input:false,
        action2:true
      })
      setTimeout(()=>{
        this.setData({
          action2:false,
          static:true
        })
      },2500)
    }
    if(id=="medal"){
      wx.navigateTo({
        url: '/pages/medal/index'
      })
    }
    if(id=="blindbox"){
      this.setData({
        blindbox:null  
      })
    }
  },

  async sendAction(){
    const res = await sendAction("/day/finishTask",{
      openid:app.openid,
      message:this.data.input_value
    },"POST")
  }

})