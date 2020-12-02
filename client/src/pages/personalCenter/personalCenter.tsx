import React, { Component } from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

export default class PersonalCenter extends Component {
  render() {
    return (
      <View>
        <Text>个人中心</Text>
        <AtButton type='primary'>点击获取头像信息</AtButton>
      </View>
    );
  }
}
