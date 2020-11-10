// pages/movie/movie.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['全部', '华语', '好莱坞', '日本', '欧美'],
    num: 0,
    content:[],
    sum:'全部'
  },
  cut(e) {
    this.setData({
      num: e.currentTarget.dataset.i,
      sum:e.currentTarget.dataset.l
    })
    this.jiejou()
    
  },
  jiejou(){
    let that=this
    db.collection('movie').where({
    classify:that.data.sum
    }).get().then(res=>{
      that.setData({
        content:res.data
      })
      
    }).catch(err=>{
      console.log(err);
    })
  },
  skip(e){
wx.navigateTo({
  url: '../movieLsit/movieLsit?id='+e.currentTarget.dataset.i,
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.jiejou()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})