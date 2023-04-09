// pages/pufo-list/pufo-list.ts
const { post } = require('../../utils/request')

Page({

  /**
   * Page initial data
   */
  data: {
    locations: [
      {
        name: '紫薇',
        value: 'ziwei'
      }, 
      {
        name: '白虎',
        value: 'baihu'
       },
       { 
         name: '青龙',
         value: 'qinglong'
        }, 
        { 
          name: '朱雀',
          value: 'zhuque'
         },
         {
           name: '玄武',
           value: 'xuanwu'
         }
        ],
    locationIndex: 0,
    locationName: "紫薇",
    amount: 0,
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
  },

  async onQingDeng() {
    const url = '/api/activity/light'
    const body = {
      user: [
        {
          name: "韩信",
          msg: "",
          amount: this.data.amount,
          birthday: "",
        }
      ],
      paySource: "wechat",
      amount: this.data.amount,
      activityItemId: 1,
      userId: 1,
      debug: 1,
      location: this.data.locations[this.data.locationIndex].value,
    }
    await post(url, body)
  },

  onLocationSelect(event: any) {
    const index = +event.detail.value
    this.setData({
      locationIndex: index,
      locationName: this.data.locations[index].name
    })
  },

  onAmountChange(event: any) {
    this.setData({
      amount: +event.detail.value
    })
  },
  

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})