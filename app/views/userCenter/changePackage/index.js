/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../../components/page'
import PackageItem from './packageItem'

import Modal from '../../../components/modal'
import * as ModalConst from '../../../components/modal/modalConst'

import navigate from '../../../router/navigate'

import { getMyPackage, setSelectPkgId, sendChangePackage } from '../reducer/actions'

import './index.scss'

class ChangePackage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getMyPackage()
    }
    

    onBnChangeHandler(){
        let { nextPackage, selectPkgId, myPackage, pkgs, sendChangePackage, getMyPackage } = this.props
        let toPackage = pkgs.find((obj)=>obj.pkgId == selectPkgId)

        if(nextPackage && nextPackage.pkgId == selectPkgId) return
        if(!toPackage) return

        let msg = "本次支付"+toPackage.amount+"元，到期日期："+toPackage.endDate+"，将于"+toPackage.feeStartDate+"凌晨2：00扣费，后续将默认自动扣费。请保持账户始终有余额。如需停止服务，请于登录首页主动关闭。"
        Modal.ask({message:msg, style:{textAlign:"left"}}).then(data=>{
            if(data == ModalConst.YES){
                let opt = {
                    fromPkgId: myPackage.pkgId,
                    toPkgId: selectPkgId
                }
                sendChangePackage(opt).then(data=>{
                    Modal.alert({message: "修改成功!"}, ModalConst.MODAL_SUCCESS_ALERT_SKIN)
                    getMyPackage()
                })
            }
        })
    }
    
    getPackageItems(){
        let { myPackage, nextPackage, pkgs, selectPkgId, setSelectPkgId } = this.props

        return pkgs.map((obj, index) => {
            let isNext = nextPackage && nextPackage.pkgId && nextPackage.pkgId == obj.pkgId ? true : false
            if(myPackage.pkgId != obj.pkgId) 
            return <PackageItem key={index} nextPkg={isNext} selected={obj.pkgId == selectPkgId} data={obj} onItemHandler={()=>setSelectPkgId(obj.pkgId)} />
        })
    }

    getBnDisabled(){
        let { nextPackage, selectPkgId } = this.props
        if(selectPkgId){
            if(nextPackage && nextPackage.pkgId == selectPkgId) return true
            return false
        }
        return true
    }

    render() {
        let { myPackage } = this.props
        return (
            <Page id="change-package-view" title="修改套餐">
                <div className="charge-package-container">
                    <div className="charge-package-title-div">您当前的套餐为</div>
                    <div className="charge-current-package-div">
                        <div className="package-name">{myPackage.name}</div>
                        <div className="package-desc">{myPackage.desc}</div>
                    </div>
                    <div className="charge-package-title-div">可修改为下列套餐</div>
                    <div className="change-package-list">
                        {this.getPackageItems()}
                    </div>
                    <button className="btn-change" disabled={this.getBnDisabled()} onTouchTap={()=>this.onBnChangeHandler()}>确认修改</button>
                </div>
            </Page>
        )
    }
}

ChangePackage.propTypes = {
    myPackage: PropTypes.shape({
        amount: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        feeStartDate: PropTypes.string.isRequired,
        pkgType: PropTypes.number.isRequired,
        pkgId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
    nextPackage: PropTypes.object,
    pkgs: PropTypes.array.isRequired,
    selectPkgId: PropTypes.number.isRequired,

    setSelectPkgId: PropTypes.func.isRequired,
    sendChangePackage: PropTypes.func.isRequired,
    getMyPackage: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    myPackage: state.userCenterReducer.myPackage,
    nextPackage: state.userCenterReducer.nextPackage,
    pkgs: state.userCenterReducer.pkgs,
    selectPkgId: state.userCenterReducer.selectPkgId
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setSelectPkgId, sendChangePackage, getMyPackage } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePackage)