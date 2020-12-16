export default {
  pages: [
    'pages/index/index',
    'pages/personalCenter/personalCenter'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fffffb',
    navigationBarTitleText: 'BFApp',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  tabBar: {
    "color": "#7A7E83",
    "selectedColor": "#33a3dc",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./public/images/index.png",
        "selectedIconPath": "./public/images/index_active.png"
      },
      {
        "pagePath": "pages/personalCenter/personalCenter",
        "text": "我的",
        "iconPath": "./public/images/personal_center.png",
        "selectedIconPath": "./public/images/personal_center_active.png"
      }
    ]
  }
}
