/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import './index.scss'

/**安全画像 */
class PlaceComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        return(
            <div className="safety-place-container">
                <div class="place-title">最近30天使用的收货地址</div>
                <div class="place-scroll">
                    <div class="no-info place-no-info"><div class="no-data-icon"></div><div class="msg">暂时无法获得数据</div></div>
                    <div class="place-list"></div>
                </div>
            </div>
        )
    }
}

PlaceComponent.propTypes = {
}


export default PlaceComponent