import React from 'react'

import { TabBar } from 'antd-mobile';
import './MyTabBar.css'

export class MyTabBar extends React.Component {
    // 接收父组件传入的值
    state = {
        selectedTab:this.props.location.pathname,
    }
    // 将父组件传入的history值
    changePath(path){
        // 浏览器改变路由地址，之后通过router来渲染页面
        this.props.history.push(path)
        // 将点击的tab栏的path值传给selectedTab
        this.setState({
            selectedTab:path
        })
    }
    // 循环tab栏页面的函数
    renderItemList(){
        // 将tabs从props中提前结构出来
        const {tabs} = this.props;
        // 将循环出来的TabBar.Item标签作为返回值返回
        return tabs.map(({path,name,icon}) =>(
            <TabBar.Item
            icon={<i className={`iconfont icon-${icon}` }></i>}
            selectedIcon={<i className={`iconfont icon-${icon}`}></i>}
            title={name}
            key={path}
            selected={this.state.selectedTab}
            onPress={this.changePath.bind(this,path)}></TabBar.Item>
        ))
    }
    render() {
      return (
        
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#21b97a"
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent>
            {this.renderItemList()}
          </TabBar>
      );
    }
  }