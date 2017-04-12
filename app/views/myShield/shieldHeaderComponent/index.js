/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMyShieldInfo } from '../reducer/actions'

import './index.scss'

class ShieldHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMyShieldInfo();
    }

    render() {
        let { realName, userName, openTime, securityGrade, headImg, onBtnViewClasuseHander } = this.props
        let headStyle = {
            background: "url("+ headImg +") no-repeat center",
            backgroundSize: "100%"
        }
        return (
            <div className="my-shield-head-div">
                <div className="my-shield-name-div">
                    <div className="name-left-head-div">
                        <div className="default-head"></div>
                        <div className="real-head" style={headStyle}></div>
                    </div>
                    <div className="name-left-div">
                        <span className="my-shield-nickname">{realName + " "}</span>
                        <span className="my-shield-id">{userName + " "}</span>
                    </div>
                    <div className="name-right-div">
                        <span className="grade-title">当前等级</span>
                        <span className="grade-txt">S{securityGrade}</span>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="shielf-name-line"></div>
                <div className="shield-open-info-div">
                    <div className="info-left-div">
                        <div>
                            <span>开启时间：</span>
                            <span className="date-txt">{openTime}</span>
                        </div>
                        <div className="view-clasuse" onTouchTap={onBtnViewClasuseHander}>查看《<span className="btn-user-clause">金戈盾用户协议</span>》</div>
                    </div>
                    <div className="info-right-div"></div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

ShieldHeader.propTypes = {
    realName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    openTime: PropTypes.string.isRequired,
    securityGrade: PropTypes.number.isRequired,
    headImg: PropTypes.string.isRequired,

    getMyShieldInfo: PropTypes.func.isRequired,
    onBtnViewClasuseHander: PropTypes.func
}

let mapStateToProps = state => ({
    realName: state.myShieldReducer.realName,
    userName: state.myShieldReducer.userName,
    openTime: state.myShieldReducer.openTime,
    securityGrade: state.userReducer.securityGrade,
    headImg: state.userReducer.headImg,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMyShieldInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShieldHeader)