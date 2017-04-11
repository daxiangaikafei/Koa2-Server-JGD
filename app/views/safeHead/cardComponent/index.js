/**
 * created by zhao at 2017/3/24
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getCardData, getMobileData } from '../reducer/actions'

import './index.scss'
/**安全画像 */
class CardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getCardData()
        this.props.getMobileData()
    }

    getBlankComponent(){
        let {blankList} = this.props
        return blankList.map((obj, index) => {
            return (
                <div className="blank-item" key={index}>
                    <div className="blank-txt-div">
                        <span className="blank-card-id">{obj.card_num}</span>
                        <span className="blank-card-name">{obj.name}</span>
                        <span className="blank-card-date">{obj.blank_date}</span>
                    </div>
                    <div className={obj.lock ? "blank-card-status use" : "blank-card-status lock"}></div>
                </div>
            )
        })
    }

    getMobileComponent(){
        let {mobileList} = this.props
        return mobileList.map((obj, index) => { 
            let old_mobile = obj.old_mobile ? obj.old_mobile : "未知";
            let new_mobile = obj.new_mobile ? obj.new_mobile : "未知";
            return (
                <div className="list-item" key={index}>
                    <span className="info-txt">{old_mobile + "换成" + new_mobile}</span>
                    <span className="date-txt">{obj.mobile_date}</span>
                </div>
            )
        })
    }

    render(){
        let {blankTotal, mobileTotal} = this.props
        return(
            <div className="safety-card-item-view">
                <div className="safety-card-container">
                    <div className="card-title">账户使用至今</div>

                    <div className="title-div"><span className="title">银行卡详情：</span><span className="bank-tip tip">{ "共" + blankTotal + "次" }</span></div>
                    <div className="bank-list list">{this.getBlankComponent()}</div>

                    <div className="title-div"><span className="title">换绑手机号码详情：</span><span className="phone-tip tip">{"共"+mobileTotal+"次"}</span></div>
                    <div className="phone-list list">{this.getMobileComponent()}</div>
                </div>
            </div>
        )
    }
}

CardComponent.propTypes = {
    blankTotal: PropTypes.number.isRequired,
    blankList: PropTypes.arrayOf(
        PropTypes.shape({
            blank_date: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            card_num: PropTypes.number.isRequired,
            lock: PropTypes.bool.isRequired
        })
    ).isRequired,
    mobileTotal: PropTypes.number.isRequired,
    mobileList: PropTypes.arrayOf(
        PropTypes.shape({
            mobile_date: PropTypes.string.isRequired,
            old_mobile: PropTypes.string.isRequired,
            new_mobile: PropTypes.number.isRequired
        })
    ).isRequired,

    getCardData: PropTypes.func.isRequired,
    getMobileData: PropTypes.func.isRequired,
}


let mapStateToProps = state => ({
    blankTotal: state.safeHeadReducer.deviceBankTotal,
    blankList: state.safeHeadReducer.deviceBankList,
    mobileTotal: state.safeHeadReducer.deviceMobileTotal,
    mobileList: state.safeHeadReducer.deviceMobileList,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCardData, getMobileData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)