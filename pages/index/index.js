//index.js
//获取应用实例
const app = getApp();

var canvas, canvas_w, canvas_h, ctx, finger_start_x, finger_start_y;

Page({
  onLoad: function () {
    wx.createSelectorQuery().select('.cvs').boundingClientRect (function (res) {
      canvas = res;
      canvas_w = res.width;
      canvas_h = res.height;
      ctx = wx.createCanvasContext('gameboard');
      ctx.drawImage("images/word1r.png", 0, 0, canvas_w, canvas_h);
      ctx.globalCompositeOperation = "source-atop";
      ctx.draw();
    }).exec();
    wx.createSelectorQuery().select('.upground').boundingClientRect(function (res) {
      var canvas2 = res;
      var canvas2_w = res.width;
      var canvas2_h = res.height;
      var ctx2 = wx.createCanvasContext('upground');
      ctx2.drawImage("images/word1.png", 0, 0, canvas2_w, canvas2_h);
      ctx2.globalCompositeOperation = "source-atop";
      ctx2.draw();
    }).exec();
  },
  gametouchstart:function(e){
    var finger_x = e.touches[0].x;
    var finger_y = e.touches[0].y;
    ctx.beginPath();
    ctx.arc(finger_x, finger_y, canvas_w/20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.draw(true);
  },
  gametouchmove: function (e) {
    var finger_x = e.touches[0].x;
    var finger_y = e.touches[0].y;
    ctx.beginPath();
    ctx.arc(finger_x, finger_y, canvas_w / 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.draw(true);
  },
  gametouchend: function (e) {
  },
  restart:function(e){
    ctx.drawImage("images/word1r.png", 0, 0, canvas_w, canvas_h);
    ctx.draw(true);
  }
});
