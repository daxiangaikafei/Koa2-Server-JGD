/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Modal from '../../../../components/modal'

import { getUserMobile, getSmsKey, checkSmsKey, gotoFrozenResult } from '../../reducer/actions'

import './index.scss'

class FrozenAccountPhone extends React.Component {
    constructor(props) {
        super(props);
        this.MaxTime = 60
        this.timer = null
        this.state = {
            countTime: 0
        }
    }

    componentDidMount() {
        this.props.getUserMobile()
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
        this.timer = null
    }

    onSendMsgHandler() {
        this.props.getSmsKey().then(data=>{
            data.status == 1 ? this.setState({countTime: this.MaxTime}) : this.props.gotoFrozenResult(data)
        })
    }

    onBnConfirmHandler() {
        var code = this.refs.codeInput.value
        code ? this.props.checkSmsKey(code) : Modal.alert({message: "请出入验证码！"})
    }

    render() {
        let { countTime } = this.state
        let { mobile } = this.props

        let bnSendStr = "获取验证码", bnDisabled = false
        if(countTime>0){
            bnSendStr = countTime + "s"
            bnDisabled = true
            this.timer = setTimeout(()=>this.setState({countTime:countTime-1}), 1000)
        }else{
            this.timer = null
        }

        return (
            <div id="frozen-account-phone-view">
                <div className="frozen-phone-content">
                    <div className="top-div">
                        <div className="title">账号已绑定手机号码</div>
                        <div className="phone-txt">{mobile}</div>
                    </div>
                    <div className="code-div">
                        <div className="code-title">验证码</div>
                        <input ref="codeInput" className="code-input" type="text" placeholder="请输入短信验证码" />
                        <button className="btn-send-code" onTouchTap={()=>this.onSendMsgHandler()} disabled={bnDisabled}>{bnSendStr}</button>
                    </div>
                    <div className="btn-div"><button className="btn-send" onTouchTap={()=>this.onBnConfirmHandler()}>提交</button></div>
                </div>
            </div>
        )
    }
}

FrozenAccountPhone.propTypes = {
    mobile: PropTypes.string.isRequired,

    getUserMobile: PropTypes.func.isRequired,
    getSmsKey: PropTypes.func.isRequired,
    checkSmsKey: PropTypes.func.isRequired,
    gotoFrozenResult: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    mobile: state.frozenReducer.mobile
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserMobile, getSmsKey, checkSmsKey, gotoFrozenResult } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenAccountPhone)