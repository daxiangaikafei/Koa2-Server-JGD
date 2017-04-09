/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import * as SafeHeadConst from '../reducer/const'
import './index.scss'

class TabSelectContainer extends React.Component {

    constructor(props) {
        super(props)
        
        this.state={
            containerStyle: {height: 0}
        }
    }

    componentDidMount(){
        this.state={
            containerStyle: {height: 0}
        }
    }

    componentWillReceiveProps(nextProps){
        let { isShow } = nextProps
        if(isShow){
            this.setState({containerStyle:{height: "100%"}})
        }else{
            setTimeout(()=>this.setState({containerStyle:{height: 0}}))
        }
    }

    onItemClickHandler(type){
        let {onClickHandler} = this.props
        onClickHandler && onClickHandler(type)
    }

    render(){
        let { isShow, selectType } = this.props
        let listStyle = isShow ? listStyle = { height: "225px"} : listStyle = { height: 0}
        let {containerStyle} = this.state

        return(
            <div className="tab-select-container" style={containerStyle}>
                <div className="tab-select-list" style={listStyle}>
                    <div className={"tab-select-item " + (selectType==SafeHeadConst.SAFE_HEAD_DEVICE_LBS ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(SafeHeadConst.SAFE_HEAD_DEVICE_LBS)}>
                        <div className="title">登录位置</div><div className="icon"></div>
                    </div>
                    <div className={"tab-select-item " + (selectType==SafeHeadConst.SAFE_HEAD_DEVICE_INFO ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(SafeHeadConst.SAFE_HEAD_DEVICE_INFO)}>
                        <div className="title">登录设备</div><div className="icon"></div>
                    </div>
                    <div className={"tab-select-item " + (selectType==SafeHeadConst.SAFE_HEAD_PASS ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(SafeHeadConst.SAFE_HEAD_PASS)}>
                        <div className="title">收货地址</div><div className="icon"></div>
                    </div>
                    <div className={"tab-select-item " + (selectType==SafeHeadConst.SAFE_HEAD_CARD ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(SafeHeadConst.SAFE_HEAD_CARD)}>
                        <div className="title">换绑次数</div><div className="icon"></div>
                    </div>
                    <div className={"tab-select-item " + (selectType==SafeHeadConst.SAFE_HEAD_PASS ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(SafeHeadConst.SAFE_HEAD_PASS)}>
                        <div className="title">修改密码次数</div><div className="icon"></div>
                    </div>
                </div>

                <div className="tab-select-container-mask"></div>
            </div>
        )
    }
}

TabSelectContainer.propTypes = {
    isShow: PropTypes.bool.isRequired,
    selectType: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}


export default TabSelectContainer