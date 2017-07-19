// Index.js
let CoreSVP = require("../FrameWorks/CoreSVP/CoreSVP.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  btnClick1: function () {

    CoreSVP.showSuccess("登录成功")


  },

  btnClick2: function () {


    CoreSVP.showError("登录失败")

  },

  btnClick3: function () {

    CoreSVP.showInfo("手机号格式有误")

  },

  btnClick4: function () {

    CoreSVP.showLoading("加载中")

    setTimeout(function(){
      CoreSVP.dismiss()
    },5000)
  }


})