const app = getApp()

const request = (url: string, opt: any) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.baseURL + url,
      ...opt,
      success: res => {
        console.log('---request success---')
        resolve(res.data)
      },
      fail: err => {
        console.log()
        console.log('---request fail---')
        reject(err)
      },
    })
  })
}

module.exports = {
  get(url: string, data: any) {
    return request(url, { method: "GET", data })
  },
  post(url: string, data: any) {
    return request(url, { method: "POST", data })
  }
}