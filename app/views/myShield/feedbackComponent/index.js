/**
 * created by zhao at 2017/3/27
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { onSaveFeedback } from '../reducer/actions'
import * as MyShieldConst from '../reducer/const'
import Modal from '../../../components/modal'
import * as ModalConst from '../../../components/modal/modalConst'

import './index.scss'

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ 
            bnDisabled: true,
            remainWord: 0,
            textValue: ""
        })
    }

    componentDidMount() {
        this.setState({
            bnDisabled: true,
            remainWord: MyShieldConst.MaxFeedBackSize,
            textValue: ""
        })
    }

    onTextAreaChangeHandler(e){
        let val = e.currentTarget.value, bnDisabled, remainWord
        if(val){
            bnDisabled = false
        }else{
            bnDisabled = true
        }

        remainWord = MyShieldConst.MaxFeedBackSize - val.length > 0 ? MyShieldConst.MaxFeedBackSize - val.length : 0

        this.setState({
            bnDisabled: bnDisabled,
            remainWord: remainWord,
            textValue: val
        })
    }

    onTextAreaClickHandler(e){
        // setTimeout(()=>e.currentTarget.scrollIntoViewIfNeeded(), 400)
    }

    onSendFeedBackHandler(e){
        let {textValue} = this.state
        textValue = textValue.trim()
        if(textValue){
            Modal.alert({tip:"反馈已收录，感谢您的支持！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN)
            this.props.onSaveFeedback(textValue).then(data=>{
                Modal.alert({tip:"反馈已收录，感谢您的支持！"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN)
                this.setState({
                    bnDisabled: true,
                    remainWord: MyShieldConst.MaxFeedBackSize,
                    textValue: ""
                })
            })
        }
    }

    render() {
        let { bnDisabled, remainWord, textValue } = this.state
        let { } = this.props

        return (
            <div className="shield-feedback-div">
                <textarea className="feedback-textarea"
                            placeholder="亲爱的宝粉，您对金戈盾有任何意见和期望都可以告诉我们哦！&#13;&#10;意见被采纳将有机会获得定制礼品哦！"
                            maxLength="200"
                            value={textValue}
                            onChange={(e)=>this.onTextAreaChangeHandler(e)}
                            onTouchTap={(e)=>this.onTextAreaClickHandler(e)}/>
                <div className="btn-div"><span className="feedback-tip f-c">剩余<span className="feedback-font-size">{remainWord}</span>字！</span><button className="btn-feedback" disabled={bnDisabled} onTouchTap={()=>this.onSendFeedBackHandler()}>提交</button></div>
            </div>
        )
    }
}

Feedback.propTypes = {
    onSaveFeedback: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onSaveFeedback }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)