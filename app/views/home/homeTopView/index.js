/**
 * created at by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { addAnimationGrade } from '../reducer/actions'

import * as lev from '../../main/reducer/userConst'
import navigate  from '../../../router/navigate'
import classNames from 'classnames'
import * as HomeConst from '../reducer/const'


//导入css
import './index.scss'

class HomeTopView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            securityGrade: 1
        }
    }

    //提高等级按钮事件
    onBnUpgradeHandler(){
        let {securityGrade} = this.props
        if(securityGrade <lev.MaxLevel){
            navigate.push('/safetyGrade')
        }
    }

    //开启按钮事件
    onBnOpenHandler(){
        browserHistory.push('/openTip')
    }

    componentDidMount(){
        this.setState({securityGrade: 1})
    }

    componentWillReceiveProps(nextProps){
        this.setState({securityGrade: nextProps.securityGrade})
    }

    render(){
        let { securityGrade } = this.state
        let { animationGrade, isOpen, addAnimationGrade } = this.props
        let colorObj = HomeConst.ColorLevel[securityGrade-1], isMaxLevel = securityGrade >= lev.MaxLevel
        
        let marks, index, list=[];
        for(index=1; index<=7; index++){
            list.push(index);
        }
        marks = list.map((value, index)=>{
            let classes = "s"+value + " " + (animationGrade == value ? 'selected' : '')
            return (<span className={classes} key={value} onTouchTap={this.props.onBnHelpHandler}>{'S' + value}</span>)
        })

        //没有达到当前等级执行动画
        if(animationGrade < securityGrade){
            let animationTime = securityGrade > 1 ? 1000 / securityGrade : 0
            setTimeout(()=>addAnimationGrade(), animationTime)
        }

        return(
            <div className="home-top-div" style={{background: "radial-gradient("+colorObj.bgColor+")"}}>
                <div className="home-security-circle-div">
                    <div className={'home-security-circle ' + 'circle-s'+securityGrade}></div>
                    <div className="home-security-circle-bg"></div>
                </div>
                
                <div className="home-top-content">
                    { marks }
                    <div className="home-security-title">当前安全等级</div>
                    <div className="home-security-txt">S{ animationGrade }</div>
                    <button className={isMaxLevel ? "max-level btn-upgrade" : "btn-upgrade"} 
                            style={{color : colorObj.fontColor}} 
                            onTouchTap={()=>this.onBnUpgradeHandler()}>
                        { isMaxLevel ? "最高等级" : "提高等级"}
                    </button>
                    <div className="upgrade-tip">尊敬的金戈盾会员，安全等级为S7时，<br />账户发生风险，钱宝优先追偿哦！</div>
                </div>
                { 
                    //未开启
                    isOpen == 1 ? 
                    <button className="btnOpen" style={{"backgroundColor" : colorObj.bnColor}} onTouchTap={this.onBnOpenHandler}>开通会员</button>
                    :
                    <button className="btnClose" onTouchTap={this.props.onCloseHandler}>关闭</button>
                }
            </div>
        ) 
    }
}

HomeTopView.propTypes = {
    securityGrade: PropTypes.number.isRequired,
    animationGrade: PropTypes.number.isRequired,
    isOpen: PropTypes.number.isRequired,
    
    onBnCloseHandler: PropTypes.func,
    onBnHelpHandler: PropTypes.func,
    addAnimationGrade: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    securityGrade: state.userReducer.securityGrade,
    isOpen: state.userReducer.status,
    animationGrade: state.homeReducer.animationGrade,
}) 

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addAnimationGrade } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopView)