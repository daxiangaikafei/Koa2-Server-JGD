/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import navigate from '../../router/navigate'

import './index.scss'

class FrozenAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bnDisabled: true
        }
    }
    
    componentDidMount(){
    }

    render() {
        let {bnDisabled} = this.state
        return (
            <Page id="frozen-account-view">
               <div className="frozenAccount-container">
                    <div className="frozen-icon"></div>
                    <div className="frozen-tip">发现账号被盗，您可以立即冻结钱宝账号，以防不法分子窃取您账号资产或者损害您其他利益。</div>
                    <div className="frozen-accoutn-div">
                        <span>输入钱宝账号</span>
                        <input className="account-input" type="text" placeholder="手机号码/用户名/邮箱" />
                    </div>
                    <div className="btn-div">
                        <button className="btnNext" disabled={bnDisabled}>下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}

FrozenAccount.propTypes = {
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenAccount)