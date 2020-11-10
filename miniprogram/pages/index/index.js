// miniprogram/pages/index/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    num: 0,
    num1: 0,
    content:[],
    content1:[],
    content2:[],
    sum:0,
    tabs: [{
        name: '首页',
        option: '../index/index'
      },
      {
        name: '电影资讯',
        option: '../movie/movie'
      },
    
      {
        name: '明星资讯',
        option: '../star/star'
      },
      {
        name: '预告片',
        option: '../prevue/prevue'
      }
    ],
    tab:['最新','华语','海外'],
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  ggg: function () {

  },
  search() {
    this.show = !this.show
    this.setData({
      show: this.show
    })
  },
  biases(e) {
    this.setData({
      num: e.currentTarget.dataset.i
    })

  },
  toData(e) {
    this.setData({
      sum: e.currentTarget.dataset.index
    })
    wx.navigateTo({
   url : '../starLsit/starLsit?id=' + this.data.sum
    })
  },
  skip(e){
    this.setData({
      num1: e.currentTarget.dataset.i,
    })
    this.jikou()
  },
  skip2(e){
    wx.navigateTo({
      url: '../indexLsit/indexLsit?id='+e.currentTarget.dataset.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  jikou(){
    var that = this
    db.collection('index').where({
classify:this.data.num1
    })
      .get()
      .then(res => {
        that.setData({
        content2:res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  },
  onLoad: function (options) {
    this.jikou()
    var that = this
    db.collection('lunbo')
      .get()
      .then(res => {
        that.setData({
          background: that.data.background.concat(res.data)
        })
      })
      .catch(err => {
        console.log(err);
      });
      // one
      db.collection('star').skip(parseInt(Math.random()*20)).limit(30)
      .get()
      .then(res => {
        that.setData({
          content: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
      // two
      db.collection('star').skip(parseInt(Math.random()*30)).limit(60)
      .get()
      .then(res => {
        that.setData({
          content1: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
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