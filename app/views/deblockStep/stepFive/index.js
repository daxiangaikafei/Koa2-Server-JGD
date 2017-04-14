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
    constructor(){
        super();
        this.state = {
            selectIndex:0
        }
        this.handlerChange = this.handlerChange.bind(this);
    }
    componentDidMount(){
        this.props.getFiveData();
    }
    handlerChange(index){   
        this.setState({
            selectIndex:index
        })
    }

    
    render() {
        let {content} = this.props;

        let {selectIndex} = this.state;
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
                                {
                                    content&&content.map( (item, index)=> {
                                        return (
                                        <div className={"package-item "+(selectIndex===index?"selected ":"")}  key={index} onClick={()=>this.handlerChange(index)}  id={'list_'+index}>
                                               <div className="icon"></div>
                                                 <div className="txt-div">
                                                    <div className="title">{item.name}</div>
                                                    <div className="desc f-c">{item.desc}</div>
                                                 </div>
                                              </div>
                                        )
                                    })
                                }
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