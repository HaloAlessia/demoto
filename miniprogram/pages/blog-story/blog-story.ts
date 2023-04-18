// pages/blog-story/blog-story.ts
const { get } = require('../../utils/request')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    blogtext:{},
    activities: [], // Set the URL for the cross-origin page
    buttonText: '开始' // Set the text for the button
  },
  // async getActivityrInfo() {
  //   const url = '/api/activity/info'
  //   let that = this;
  //   const query = {
  //     id: that.data.id
  //   }
  //   const res = await get(url, query)
  //   console.log('data===', res)
  //   this.setData({ activities: res.data.activities })
  // },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      blogtext: options.blogtext
    });
    // this.getActivityrInfo();
  },
  handleButtonClick: function () {
    // Handle button click event
    console.log('Button clicked')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})