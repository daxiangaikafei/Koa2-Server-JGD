/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import Header from '../../components/header'

import './index.scss'

/**安全画像 */
class SafeHead extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        return(
            <Page id="safetyHead-view">
                <Header title="安全画像"></Header>
                <div className="safetyHead-container">
                    <div className="safetyHead-tab-div">
                        <div className="tab-select-title">登录位置</div><div className="tab-select-arror-icon"></div>
                    </div>
                    <div className="content-region"></div>
                    <div className="tab-select-container">
                        <div className="tab-select-list">
                            <div className="tab-select-item selected" data-type="device-lbs">
                                <div className="title">登录位置</div><div className="icon"></div>
                            </div>
                            <div className="tab-select-item" data-type="device-info">
                                <div className="title">登录设备</div><div className="icon"></div>
                            </div>
                            <div className="tab-select-item" data-type="place">
                                <div className="title">收货地址</div><div className="icon"></div>
                            </div>
                            <div className="tab-select-item" data-type="card">
                                <div className="title">换绑次数</div><div className="icon"></div>
                            </div>
                            <div className="tab-select-item" data-type="pass">
                                <div className="title">修改密码次数</div><div className="icon"></div>
                            </div>
                        </div>

                        <div className="tab-select-container-mask"></div>
                    </div>
                </div>
            </Page>
        )
    }
}

SafeHead.propTypes = {
}


export default SafeHead