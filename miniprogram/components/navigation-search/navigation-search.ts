// components/navigation-search/navigation-search.ts
Component({
  /**
   * Component properties
   */
  properties: {
    defaultData: {
      type: Object,
      value: {
       title: "我是默认标题"
      },
      observer: function(newVal, oldVal) {}
     }
  },

  /**
   * Component initial data
   */
  data: {
    navBarHeight: getApp().globalData.navBarHeight,
    menuRight: getApp().globalData.menuRight,
    menuBottom: getApp().globalData.menuBottom,
    menuHeight: getApp().globalData.menuHeight,
    region: ["浙江省", "杭州市", "余杭区"],
  },

  /**
   * Component methods
   */
  methods: {
    bindRegionChange(e: any) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }

  }
})
