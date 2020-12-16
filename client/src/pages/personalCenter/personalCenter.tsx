import React, { Component } from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton, AtCard  } from 'taro-ui'

export default class PersonalCenter extends Component {
  componentWillMount(){}

  componentDidMount(){}

  componentDidShow(){}

  componentDidHide(){}

  render() {
    return (
      <View>
        <Text>个人中心</Text>
        <AtButton type='primary'>点击获取头像信息</AtButton>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          这也是内容区 可以随意定义功能
        </AtCard>
      </View>
    );
  }
}
