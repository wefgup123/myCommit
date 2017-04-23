// pages/dire/dire.js
var app = getApp()
Page({
  data:{
    direction:0,
    dinc:''
  },
    getDirection:function(){
    var that= this;
    wx.onCompassChange(function (res) {
      that.setData({
        direction: parseInt(res.direction)
      })
    })
    var d = that.data.direction
    console.log(d)
    this.getDireInCn(d)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getDireInCn:function(d){
  var that=this
  if(d>=0&&d<10){
 that.setData({
        dinc:'north'
      })
    }
    else if(d>350&&d<360){
 that.setData({
        dinc:'north'
      })
    }
    else {
 that.setData({
        dinc:'other'
      })
    }
  }

})
