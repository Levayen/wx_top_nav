// components/navbar/index.js
var app = getApp()
import global from '../../utils/global.js'
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },
  data: {

    height: app.globalData.height,//app.js中获取到的手机状态栏高度
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1,
      bg_color: 'white',
      color: '#333333',
      userIndex: 0,
      show_border: '0'
    }
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
  },
  methods: {
    // 返回上一页面
    navBack: function () {
        console.log("navigateBack")
      wx.navigateBack({
        delta: 1,
          
      })
    },
    goxinxi: function () {
      wx.navigateTo({
        url: '/pages/user/message/lists/lists'
      })
    }
  }
}) 