/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import navigate from '../../router/navigate'

import './index.scss'

class PayFine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount(){
    }

    render() {
        let selectOptions, bnDisabled, bbAmt,bqAmt, moneyDesc
        return (
            <Page id="pay-fine-view">
                <div className="pay-fine-container">
                    <div className="select-div">
                        <span>选择申诉类型：</span>
                        <select className="type-select">
                            {selectOptions}
                        </select>
                    </div>
                    <div className="desc-div">
                        <p>{moneyDesc}</p>
                        <div className="pay-content">
                            <div>本次需缴纳罚金：</div>
                            <div>
                                <div><span className="red fine-rmb">{bbAmt}</span> 元</div>
                                <div><span className="red fine-bq">{bqAmt}</span> 宝券</div>
                            </div>
                        </div>
                    </div>
                    <div className="password-div" >
                        <span>输入交易密码</span><input type="password" className="password-input" placeholder="请输入交易密码" />
                    </div>
                    <div className="btn-div"><button disabled={bnDisabled} className="btnPay">确认支付</button></div>
                </div>
                <div className="notPay-container">
                    <div className="sucess-icon"></div>
                    <div className="desc">无违规行为！</div>
                </div>
            </Page>
        )
    }
}

PayFine.propTypes = {
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PayFine)