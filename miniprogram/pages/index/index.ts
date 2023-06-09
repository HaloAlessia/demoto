// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const { get } = require('../../utils/request')

Page({
  data: {
    defaultData: {
      title: "我的主页", // 导航栏标题
    },
    indexBanner: [],
    operations: [
      {
        icon: "index.png",
        desc: "随缘",
        url: "../../pages/suiyuan-list/suiyuan-list"
      },
      {
        icon: "index.png",
        desc: "普佛",
        url: "../../pages/pufo-list/pufo-list"
      },
      {
        icon: "index.png",
        desc: "法会"
      },
      {
        icon: "index.png",
        desc: "祭祖"
      },
      {
        icon: "notice.png",
        desc: "公告"
      }
    ],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },

  async getIndexData() {
    const url = '/api/index/index'
    const query = {
    }
    const res = await get(url, query)
    console.log('data===', res)
    this.setData({ indexBanner: res.data.indexBanner })
  },
  onShareAppMessage: function () {
    return {
      title: 'Heguang',
      desc: '和光同尘',
      path: '/pages/index/index'
    }
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getIndexData();

  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
