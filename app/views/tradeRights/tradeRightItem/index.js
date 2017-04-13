/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Modal from '../../../components/modal'
import * as mdalConst from '../../../components/modal/modalConst'
import navigate from '../../../router/navigate'

import './index.scss'

/**交易维权 */
class TradeRightsItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    onClickHandler(){
        let { data } = this.props
        if(data.status){
            navigate.push(data.link)
        }else{
            Modal.alert({message: "功能未开放，敬请期待"})
        }
    }

    render(){
        let { data } = this.props
        return(
            <div className="trade-rights-item" onTouchTap={()=>this.onClickHandler()}>
                <div className={"item_icon " + data.icon}></div>
                <div className="content">
                    <div className="title">{data.title}</div>
                    <div className="sub_title">{data.status ? data.subTitle : "敬请期待！"}</div>
                </div>
                <div className="arrow-icon"></div>
            </div>
        )
    }
}

TradeRightsItem.propTypes = {
    data: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired
}

export default TradeRightsItem