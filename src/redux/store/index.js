import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';// 将合并后的reducer插入到store中

// 引入中间件 redux-thunk 可以在action中自由派发动作
import ReduxThunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
// import createhistory from 'history/createHashHistory';
// let history=createHashHistory.createhistory()
// ,routerMiddleware(history)
let middleWare =[ReduxThunk];
// applymiddleWare
export default createStore(reducers,applyMiddleware(...middleWare));
