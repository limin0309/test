import React from 'react';
import './index.less';
import logoImg from '../../common/images/logo.png';
// react-addons-css-transition-group 菜单开启/关闭动画引用组件
// https://reactjs.org/docs/animation.html  课堂app对应的github地址介绍 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6  引用现成的动画组件

export default class HomeHeader extends React.PureComponent{
    constructor(){
        super();
        this.state={
            isShow:false,
        }
    }

    changeShow=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        let {isShow} =this.state;
        return(
        <div className="home-header">
            <div className="header-bar">
                <img src={logoImg}></img>
                <div onClick={this.changeShow}>
                    {
                        isShow? <i className="iconfont icon-caidan_shousuo"></i>: 
                        <i className="iconfont icon-caidan_zhankai"></i>
                    }           
                </div>
            </div>
            <div className="header-menu">
            <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {
                    isShow ?<ul>
                    <li>Node课程</li>
                    <li>Html课程</li>
                    <li>Css课程</li>
                    <li>React课程</li>
                </ul>:''
                }
        </ReactCSSTransitionGroup>
        </div>
        </div>
        )
        }
}
