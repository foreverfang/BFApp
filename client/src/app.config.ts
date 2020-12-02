export default {
  pages: [
    'pages/index/index',
    'pages/personalCenter/personalCenter'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  tabBar: {
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/personalCenter/personalCenter",
        "text": "我的"
      }
    ]
  }
}
