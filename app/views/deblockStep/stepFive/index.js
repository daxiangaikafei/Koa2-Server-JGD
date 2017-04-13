/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../../../components/page'
import './index.scss'
import '../common.scss'
import { getFiveData } from './reducer/actions'

class stepFive extends React.Component {
    
    componentDidMount(){
        this.props.getFiveData();
    }

    
    render() {
        let {content} = this.props;
        return (
            <Page id="safety-grade-view">
                <div className="step5-container step-container">
                   <div className="step-region">
                           <div className="step-container stepfive-bg"></div>
                    </div>
                      <div className="step5-main step-main">
                            <div className="blue step5-title">恭喜您通过身份验证！</div>
                            <div className="step5-desc">账号被封是否是由于账号风险较大呢？<br />欢迎订购金戈盾保障账号安全。<br />自助解封是内置于金戈盾的一项服务</div>
                            <div className="list-title">请选择下列订阅套餐：</div>
                            <div className="package-list">
                                {/*<div className="package-item" data-pid="1">
                                    <div className="icon">
                                </div>
                                <div className="txt-div">
                                    <div className="title">基础收费按天版</div>
                                    <div className="desc f-c">1.00元/天，第一次开启使用服务费为1.00元/天/账号；
                                        停止服务后重新开启每次增加1.00元/天/账号</div>
                                    </div>
                                </div>*/}
                           </div>
                            <button className="deblocking-btnNext">下一步</button>
                        </div>
                    
                </div>
            </Page>
        )
    }
}
stepFive.propTypes = {
}

let mapStateToProps = state => ({
    content:state.stepFiveReducer.content,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFiveData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(stepFive)
// export default SafeGrade