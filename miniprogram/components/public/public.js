// components/public/public.js
const db=wx.cloud.database()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
content:[],
content1:[],
content2:[],
  },
  attached: function() {
    this.sss('index')
    this.sss('star')
    this.sss('movie')
  },
  /**
   * 组件的方法列表
   */
  methods: {
sss(i){
  let that=this
  db.collection(i).skip(parseInt(Math.random()*50)).limit(72).get().then(res=>{
    if(i=='index'){
      that.setData({
        content:res.data
      })
    }else if(i=='star'){
      that.setData({
        content1:res.data
      })
    }else if(i=='movie'){
      that.setData({
        content2:res.data
      })
    }
    
  }).catch(err=>{
    console.log(err);
    
  })
},
skip(e){
  wx.navigateTo({
    url: '../indexLsit/indexLsit?id='+e.currentTarget.dataset.i,
  })
},
skip1(e){
  wx.navigateTo({
    url: '../starLsit/starLsit?id='+e.currentTarget.dataset.i,
  })
},
skip2(e){
  wx.navigateTo({
    url: '../movieLsit/movieLsit?id='+e.currentTarget.dataset.i,
  })
}
  }
})
