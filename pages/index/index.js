//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentIndex: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     leftData: [
      {
        name: '菜品1',
        id: 'cp1'
      },
      {
        name: '菜品2',
        id: 'cp2'
      },
      {
        name: '菜品3',
        id: 'cp3'
      },
      {
        name: '菜品4',
        id: 'cp4'
      },

      {
        name: '菜品5',
        id: 'cp5'
      },
      {
        name: '菜品6',
        id: 'cp6'
      },
      {
        name: '菜品7',
        id: 'cp7'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btnClick: function(e) {
    
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      currentIndex: index
    }) 
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
