/**
 * created by zhao at 2017-3-23
 */
import React , { PropTypes } from 'react'

import './index.scss'

class CloseComponent extends React.Component{

    onClickHandler(type){
        let { onClickHandler } = this.props
        onClickHandler&&onClickHandler(type)
    }

    render(){
        return(
            <div className="security-close-alert">
                <div className="alert-close-container">
                    <div className="error-icon"></div>
                    <div className="alert-content">
                        关闭后将失去对账号的安全保护和金戈盾的其他功能。<br />
                        <span className="red">如关闭后又重新开启每次增加1元/天/账号。</span><br />
                        请慎重考虑关闭功能！<br />
                    </div>
                    <div className="alert-button-div">
                        <button className="alert-button-yes" onTouchTap={()=>this.onClickHandler(true)}>确认关闭</button>
                        <button className="alert-button-no" onTouchTap={()=>this.onClickHandler(false)}>暂不关闭</button>
                    </div>
                </div>
            </div>
        )
    }
}

CloseComponent.propTypes = {
    onClickHandler: PropTypes.func
}

export default CloseComponent