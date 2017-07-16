// Index.js
let CoreSVP = require("../FrameWorks/CoreSVP/CoreSVP.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  btnClick: function(){

    CoreSVP.showText("加载失败，请重新登录")
    CoreSVP.showLoading("加载中")
    CoreSVP.dismiss()
    CoreSVP.showSuccess("登录成功")
    CoreSVP.showError("登录失败")

  }


})