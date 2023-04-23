Page({
  data: {
    messages: [],
    inputContent: ''
  },

  onInput(event) {
    this.setData({
      inputContent: event.detail.value
    });
  },

  sendMessage() {
    const content = this.data.inputContent.trim();
    if (!content) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
      return;
    }
    this.addMessage(content, true);
    this.setData({
      inputContent: ''
    });

    // 机器人回复逻辑
    setTimeout(() => {
      this.addMessage('你好', false);
    }, 1000);
  },

  addMessage(content, isSelf) {
    this.setData({
      messages: [
        ...this.data.messages,
        {
          content,
          self: isSelf
        }
      ]
    });
  }
});
