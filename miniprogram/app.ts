// app.ts
App<IAppOption>({
  // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
 globalData: {
  navBarHeight: 0, // 导航栏高度
  menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
  menuBottom: 0, // 胶囊距底部间距（保持底部间距一致）
  menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
  baseURL: "http://47.106.86.183:8361"
 },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    const that = this;
  // 获取系统信息
  const systemInfo = wx.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
  that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right + 80;
  that.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
  that.globalData.menuHeight = menuButtonInfo.height;
  },
})