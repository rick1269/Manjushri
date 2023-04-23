// index/index.js
Page({
  goToChat: function () {
    wx.navigateTo({
      url: '../chat/chat',
    });
  },

  exitApp: function () {
    wx.navigateBack({
      delta: 1,
    });
  },
});
