# wx.CoreSVP

一、快速集成
=======================
#### 1. 将CoreSVP文件夹拖拽到FrameWorks文件夹中
#### 2. 导入JS （当前页面）

      let CoreSVP = require("../FrameWorks/CoreSVP/CoreSVP.js")

#### 3. 导入WXML（当前页面）

      <include src="/pages/FrameWorks/CoreSVP/CoreSVP.wxml" />

#### 3. 导入WXML （app）

      /**app.wxss**/
      @import "/pages/FrameWorks/CoreSVP/CoreSVP.wxss";

二、基本使用
=======================

      CoreSVP.showText("加载失败，请重新登录")
      CoreSVP.showLoading("加载中")
      CoreSVP.dismiss()
      CoreSVP.showSuccess("登录成功")
      CoreSVP.showError("登录失败")
