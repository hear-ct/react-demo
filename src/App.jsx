import React from 'react'
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom'

import {Home} from './pages/Home'
import {CityList} from './pages/CityList'


export const App = props =>(
    <Router>
        <div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/citylist">城市列表</Link></li>
            </ul>
            <Route path="/home" component={Home} />
            <Route path="/citylist" component={CityList} />
        </div>
    </Router>
)