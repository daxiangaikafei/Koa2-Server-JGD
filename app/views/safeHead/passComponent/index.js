/**
 * created by zhao at 2017/3/24
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getPassData } from '../reducer/actions'

import './index.scss'

/**安全画像 */
class PassComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getPassData()
    }

    getTotalByType(type){
        let {devicePass} = this.props
        let obj = devicePass[type]
        return obj ? obj.total || 0 : 0
    }

    getListItemByType(type){
        let {devicePass} = this.props
        let obj = devicePass[type]
        let list = obj ? obj.data || [] : []

        return list.map((obj, index) => {
            return <div className="list-item" key={index}>{ obj.operator_date }</div>
        })
    }

    render(){

        return(
            <div id="safety-pass-item-view">
                <div className="safety-pass-container">
                    <div className="pass-title">最近5条记录</div>

                    <div className="title-div"><span className="title">修改密保问题详情：</span><span className="quert-tip tip">共{this.getTotalByType("protect")}次</span></div>
                    <div className="quest-list list">{this.getListItemByType("protect")}</div>

                    <div className="title-div"><span className="title">修改登录密码详情：</span><span className="login-tip tip">共{this.getTotalByType("login")}次</span></div>
                    <div className="login-list list">{this.getListItemByType("login")}</div>

                    <div className="title-div"><span className="title">修改交易密码详情：</span><span className="trade-tip tip">共{this.getTotalByType("trade")}次</span></div>
                    <div className="trade-list list">{this.getListItemByType("trade")}</div>
                </div>
            </div>
        )
    }
}

PassComponent.propTypes = {
    devicePass: PropTypes.shape({
        protect: PropTypes.shape({
            total: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    operator_date: PropTypes.string.isRequired
                })
            )
        }),
        login: PropTypes.shape({
            total: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    operator_date: PropTypes.string.isRequired
                })
            )
        }),
        trade: PropTypes.shape({
            total: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    operator_date: PropTypes.string.isRequired
                })
            )
        }),
    }).isRequired,
    
    getPassData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    devicePass: state.safeHeadReducer.devicePass,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPassData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PassComponent)