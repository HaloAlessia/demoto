// pages/pufo-list/pufo-list.ts
const { get } = require('../../utils/request')

Page({

  /**
   * Page initial data
   */
  data: {
    list: []
  },

  async getNaturalList() {
    const url = '/api/activity/list'
    const query = {
      templeId: 1,
      type: "natural"
    }
    const res = await get(url, query)
    console.log('data===', res)
    this.setData({ list: res.data.activities })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    this.getNaturalList()
  },

  onSuiyuan() {
    console.log('click suiyuan')
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