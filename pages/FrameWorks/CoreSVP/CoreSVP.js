let { WeToast } = require('src/wetoast.js')

function CoreSVP() { }

CoreSVP.page = null
CoreSVP.t = WeToast()


//仅仅是标题
CoreSVP.showText = function (str, duration = 3000) {

  this.settings()

  this.t.toast({
    title: str,
    duration: duration
  })
}

//显示加载中
CoreSVP.showLoading = function (title) {

  wx.showLoading({ title: title, mask: true })
}

//dismiss
CoreSVP.dismiss = function () {
  wx.hideLoading()
}

//显示成功
CoreSVP.showSuccess = function (title, completeClosure) {

  this.showRes(true, title, completeClosure)
}

//显示失败
CoreSVP.showError = function (title, completeClosure) {

  this.showRes(false, title, completeClosure)
}

CoreSVP.showRes = function (isSuccess, title, completeClosure) {

  this.settings()
  let image = isSuccess ? "" : ""
  let d = isSuccess ? 2000 : 3000
  this.t.toast({
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMA+0IPA2iTLO7YuiXr4/IcCqYkFbKZN/bUiHlbBs7J3L5hTtvDjFFx6Uzm0WRUAAAB20lEQVRo3u3Zy3KCQBCF4R4QFZGL4F0x4jXp93/AVBbmFFMx4MB0pVLz7bv+zdk1OY7jOI7j/C3ROh6RGG/MPBXrBYpZrDcYMrNYz5/ww5Ssi0L+FpM1GAlqOVkWKIkaRiJRw0jgLSW7olCy5o1FahgJhNZqGAmsC7LKn0jWolCmhpFAaa2GkcDBJyswEsGaPxGqYSRwsVbDSOCYkU2BkqhhJEI1jAQm1moYCcz3ZJE3lqwFSqqGkcDMXg0jQW1A9kShcS39MBiJcc0/89w3GgksUGsyY+bzyGQkqFFrFX9ZVQYjMahFyeMmazuSDrWs5IcyNxoJX6m9IUNyMxgJb+gF9evroHEkJjW4cs0lbRiJWQ0WXPPutRgJbOlVM65R24aRGNVgoPV4XjSOBDWD3pzr4mXDSFAzsdd7KmgxEr6ToezImlnWNBIOyFh2Yc16pI+kew38A2uSnT6S7jXwS9YN909HoirqqFiz7pA+GYnaUWfFmXXjXeGF/dYgfeNmqHXvxa1qN+pJ3qKnTtSb0VSmhp5EDZYJ/2LlEQn0UOudtxKpoackanD6sZcsyZKbkqjBTknUoBKpQcAg8Te6i9RgK1KDjWANvTgnIQvURGxUmZPjOI7jOM7/9wkPMejs5BepRwAAAABJRU5ErkJggg==',
    title: title,
    duration: d,
    success(data) {
      //console.log(Date.now() + ': success')
      if (typeof completeClosure != "function") { return }
      completeClosure()
    },
    fail(data) {
      //console.log(Date.now() + ': fail')
    },
    complete(data) {
      //completeClosure()
    }
  })
}


CoreSVP.settings = function () {

  if (this.page == null) {
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    this.page = currentPage
    this.t.__page = this.page
  }
}


module.exports = CoreSVP