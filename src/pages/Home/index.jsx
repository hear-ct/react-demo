import React, { Component } from 'react'
import { Route } from 'react-router-dom'


import { MyTabBar} from '../../components/MyTabBar'
import { Index } from '../index'
import { HouseList } from '../HouseList'
import { Profile } from '../Profile'
import { News } from '../News'
// 将要显示的页面放到一个数组中，通过循环将数组的值传入子组件中
const tabPages = [
    { path: '/home/index', component: Index, icon: 'ind', name: '首页' },
    { path: '/home/list', component: HouseList, icon: 'findHouse', name: '找房' },
    { path: '/home/news', component: News, icon: 'infom', name: '咨询' },
    { path: '/home/profile', component: Profile, icon: 'ind', name: '我的' },
]
export class Home extends Component {
    // 将数组中的path component的值结构出来放入到一个新的数组
    data = {
        routes: tabPages.map(({ path, component }) => ({ path, component }))
    }
    // 循环出每一个Route标签 没循环出一个Route标签就return一次  并添加key值
    renderRoutes() {
        return this.data.routes.map(i => <Route {...i} key={i.path} />)
    }
    render() {
        return (
            <div>
                {/* 调用循环出Route的方法  页面渲染出内容 */}
                {this.renderRoutes()}
                {/* 调用子组件 并将icon和name值传入子组件 */}
                <MyTabBar {...this.props} tabs={tabPages}/>
            </div>
        )
    }
}