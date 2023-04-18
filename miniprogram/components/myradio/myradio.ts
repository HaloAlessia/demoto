// components/myradio.ts
Component({
  // 使自定义组件有类似于表单控件的行为
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
      value:{//这里的属性名之所以取名value是因为表单控件有name和value属性
          type:String,
          value:"1"
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
      point(e){
          const {index}=e.currentTarget.dataset;
          if(index==1){
              this.setData({//properties和data里的值都可用setData设置
                  value:"1",//1表示男
                  currentIndex:1
              })
          }
          else{
              this.setData({
                  value:"2",//2表示女
                  currentIndex:0
              })
          }
      }
  }
})
