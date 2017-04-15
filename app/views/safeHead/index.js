/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'

import TabSelect from './tabSelectComponent'
import CardComponent from './cardComponent'
import DeviceComponent from './deviceComponent'
import PassComponent from './passComponent'
import PlaceComponent from './placeComponent'

import * as SafeHeadConst from './reducer/const'

import './index.scss'


/**安全画像 */
class SafeHead extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabSelectIsShow: false,
            showType: SafeHeadConst.SAFE_HEAD_DEVICE_LBS
        }
    }

    componentDidMount(){
    }

    onShowTabSelect(){
        this.setState({tabSelectIsShow: true})
    }


    onTabSelectChangeHandler(type){
        let state = {tabSelectIsShow: false}
        if(type) state.showType = type
        this.setState(state)
    }

    getComponentByType(type){
        switch(type){
            case SafeHeadConst.SAFE_HEAD_DEVICE_LBS:
            case SafeHeadConst.SAFE_HEAD_DEVICE_INFO:
                return <DeviceComponent showType={type} />
            case SafeHeadConst.SAFE_HEAD_PLACE:
                return <PlaceComponent />
            case SafeHeadConst.SAFE_HEAD_PASS:
                return <PassComponent />
            case SafeHeadConst.SAFE_HEAD_CARD:
                return <CardComponent />
        }
    }

    render(){
        let { tabSelectIsShow, showType } = this.state
        let component = this.getComponentByType(showType)

        return(
            <Page id="safetyHead-view">
                <div className="safetyHead-container">
                    <div className="safetyHead-tab-div" onTouchTap={()=>this.onShowTabSelect()}>
                        <div className="tab-select-title">{SafeHeadConst.SAFE_HEAD_SELECT_TAB_LIST[showType]}</div><div className="tab-select-arror-icon"></div>
                    </div>
                    <div className="content-region">{component}</div>
                    <TabSelect isShow={tabSelectIsShow} selectType={showType} onClickHandler={(type)=>this.onTabSelectChangeHandler(type)}/>
                </div>
            </Page>
        )
    }
}

export default SafeHead