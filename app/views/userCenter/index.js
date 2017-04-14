/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Page from '../../components/page'

import navigate from '../../router/navigate'

import { getMyPackage } from './reducer/actions'

import './index.scss'

class UserCenter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.getMyPackage()
    }

    onItemHandler(link){
        navigate.push(link)
    }

    render() {
        let { myPackage } = this.props

        return (
            <Page id="user-center-view">
                <div className="user-center-content">
                    <div className="user-center-item" onTouchTap={()=>this.onItemHandler("/changePackage")}>
                        <div className="title">当前套餐为({ myPackage.name })</div>
                        <div className="right-tip-div"><span>修改套餐</span><span className="icon"></span></div>
                    </div>
                    <div className="user-center-item" onTouchTap={()=>this.onItemHandler('/myShield')}>
                        <div className="title">我的金戈盾</div>
                        <div className="right-tip-div"><span>了解当前权益</span><span className="icon"></span></div>
                    </div>
                </div>
            </Page>
        )
    }
}

UserCenter.propTypes = {
    myPackage: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string
    }).isRequired,

    getMyPackage:PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    myPackage: state.userCenterReducer.myPackage,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMyPackage } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter)