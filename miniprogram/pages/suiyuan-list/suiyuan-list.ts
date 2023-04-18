// pages/pufo-list/pufo-list.ts
const { get } = require('../../utils/request')

Page({

  /**
   * Page initial data
   */
  data: {
    id: 0,
    blogtext:{},   
    isShow:false,
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
  goBlog:function(event) {
    this.setData({
      isShow:true
    })
    let blogtext = event.currentTarget.dataset.blogtext
    // blogtext = JSON.stringify(blogtext)
    console.log(blogtext); 
    wx.navigateTo({
      url:'../../pages/blog-story/blog-story?blogtext='+blogtext,
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    this.getNaturalList()
  },

  handleButtonClick: function () {
    // Handle button click event
    console.log('Button clicked')
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