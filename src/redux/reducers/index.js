import {combineReducers} from 'redux';
import {home} from './home';
import {routerReducer} from 'react-router-redux'
// state=>state.home=>state.home.currentLesson
// 路由的状态 state.router.xx
export default combineReducers({
    home,
    router:routerReducer
});// 导出合并后的reducer