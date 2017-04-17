/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'
import Modal from '../../components/modal'

import { checkFrozenAccount } from './reducer/actions'

import './index.scss'

class FrozenAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bnDisabled: true,
            accountName: ""
        }
    }
    
    componentDidMount(){
        this.setState({
            bnDisabled: true,
            accountName: ""
        })
    }

    onChangeHandler(e){
        let value = e.currentTarget.value
        let bnDisabled = value ? false : true
        this.setState({
            bnDisabled: bnDisabled,
            accountName: value
        })
    }

    onBnNextHandler(){
        let { accountName } = this.state
        if(accountName){
            this.props.checkFrozenAccount(accountName)
        }else{
            Modal.alert({message: "请输入钱宝账号！"})
        }
    }

    render() {
        let { accountName, bnDisabled} = this.state
        return (
            <Page id="frozen-account-view" title="冻结账号">
               <div className="frozenAccount-container">
                    <div className="frozen-icon"></div>
                    <div className="frozen-tip">发现账号被盗，您可以立即冻结钱宝账号，以防不法分子窃取您账号资产或者损害您其他利益。</div>
                    <div className="frozen-accoutn-div">
                        <span>输入钱宝账号</span>
                        <input className="account-input" 
                                type="text"
                                defaultValue={accountName}
                                onChange={(e)=>this.onChangeHandler(e)}
                                placeholder="手机号码/用户名/邮箱" />
                    </div>
                    <div className="btn-div">
                        <button className="btnNext" disabled={bnDisabled} onTouchTap={()=>this.onBnNextHandler()}>下一步</button>
                    </div>
                </div>
            </Page>
        )
    }
}

FrozenAccount.propTypes = {
    checkFrozenAccount: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkFrozenAccount } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenAccount)