/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import Header from '../../components/header'

import './index.scss'

/**安全画像 */
class DeviceComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        return(
            <div class="safety-device-container">
                <div class="device-info">
                    <div class="device-title"></div>
                    <div class="device-scroll">
                        <div class="device-canvas"></div>
                        
                        <div class="device-list-container">
                            <div class="wrapper">
                                <ul class="device-list"></ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="no-info device-no-info"><div class="no-data-icon"></div><div class="msg">暂时无法获得数据</div></div>
            </div>
        )
    }
}

DeviceComponent.propTypes = {
}


export default DeviceComponent