/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'

import './index.scss'
import '../../../static/scss/common.scss'

class BottomCloseAlert extends React.Component {

    componentDidMount(){
    }

    render(){
        let { title, msg,  onCloseHandler} = this.props

        return(
            <div className="alert-bottom-close-skin">
                <div className="alert-bottom-close-container">
                    <div className="alert-msg-container">
                        <div className="alert-title">{title}</div>
                        <div className="alert-msg" dangerouslySetInnerHTML={{__html:msg}}></div>
                    </div>
                    <button className="alert-btn-close" onTouchTap={onCloseHandler}></button>
                </div>
            </div>
        )
    }
}

BottomCloseAlert.propTypes = {
    title: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
}


export default BottomCloseAlert