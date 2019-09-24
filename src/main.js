import React from 'react';
import {render} from 'react-dom';
import Home from './container/Home/index';
import Lesson from './container/Lesson/index';
import Profile from './container/profile/index';
import App from './container/App';
import { hashHistory } from 'react-router';


// 引入公有样式
import './common/css/index.less' // html不支持less，所以在main中引
// 引用store
import {Provider} from 'react-redux';
import store from './redux/store'

// 想查看redux是否建立
window._store=store;// 将store挂在window上，store里有方法可以获取状态getState（）

// 使用react-router-redux 将路由中的信息存储到redux中
import {ConnectedRouter} from 'react-router-redux';
// import createhistory from 'history/createHashHistory';
// import createHashHistory from 'history';

// Warning: Please use `require("history").createHashHistory` instead of `require("history/createHashHistory")`. Support for the latter will be removed in the next major release.
// let history=createhistory()

// HashRouter 主要是#       browserRouter主要是/
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
// 这里应该渲染的是App组件 ，外层要增加路由组件
render(
<Provider store={store}>
<HashRouter >
    <App>
    <Switch>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/lesson"} component={Lesson}></Route>
        <Route path={"/profile"} component={Profile}></Route>
        <Redirect to="/home" /> 
    </Switch>
    </App>
</HashRouter></Provider>,document.getElementById('app'))