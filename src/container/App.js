// 这个组件主要是显示所有页面
import React from 'react';
import Tab from '../components/Tab/index'
import {connect} from 'react-redux';// 组件链接redux
class App extends React.PureComponent{
    render(){
        console.log(this.props.router,'>')

        return(<div className="wrap">
          {this.props.children}
         <Tab path={this.props.router.location.pathname}/>
        </div>)
        }
}

export default connect(
  (state)=>({
    router:state.router// 将状态中的router映射成router属性
  })
  // mapStateToProps 获取状态的，把所有的状态映射成属性
  // mapDispatchToProps 把所有的action映射成属性
  )(App)

  //  控制台  _store.getState() 