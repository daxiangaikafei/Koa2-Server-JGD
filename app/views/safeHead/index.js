/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import Header from '../../components/header'


import TabSelect from './tabSelectComponent'
import CardComponent from './cardComponent'
import DeviceComponent from './deviceComponent'
import PassComponent from './passComponent'
import PlaceComponent from './placeComponent'

import safeHeadConst from './reducer/const'

import './index.scss'

/**安全画像 */
class SafeHead extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabSelectIsShow: false,
            showType: safeHeadConst.SAFE_HEAD_DEVICE_LBS
        }
    }

    componentDidMount(){
    }

    onShowTabSelect(){
        this.setState({tabSelectIsShow: true})
    }


    onTabSelectChangeHandler(type){
        this.setState({
            tabSelectIsShow: false,
            showType: type
        })
    }

    render(){
        let { tabSelectIsShow, showType } = this.state
        return(
            <Page id="safetyHead-view">
                <Header title="安全画像"></Header>
                <div className="safetyHead-container">
                    <div className="safetyHead-tab-div" onTouchTap={()=>this.onShowTabSelect()}>
                        <div className="tab-select-title">登录位置</div><div className="tab-select-arror-icon"></div>
                    </div>
                    <div className="content-region"></div>
                    <TabSelect isShow={tabSelectIsShow} selectType={showType} onClickHandler={(type)=>this.onTabSelectChangeHandler(type)}/>
                </div>
            </Page>
        )
    }
}

SafeHead.propTypes = {
}


export default SafeHead