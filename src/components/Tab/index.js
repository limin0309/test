// 这个组件主要是显示所有页面
import React from 'react';
import {Link} from 'react-router-dom';
import './index.less';
export default class Tab extends React.PureComponent{
    render(){
        return(<nav className="tab">
            <Link to={"/home"}>
                <i className="iconfont icon-shouye-"></i>
                <span>首页</span>    
            </Link>
            <Link to={"/lesson"}>
                <i className="iconfont icon-kecheng"></i>
                <span>我的课程</span>    
            </Link>
            <Link to={"/profile"}>
                <i className="iconfont icon-profile"></i>
                <span>个人中心</span>    
            </Link>
        </nav>)
        }
}

