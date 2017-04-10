/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import * as SafeHeadConst from '../reducer/const'
import './index.scss'

class TabSelectContainer extends React.Component {

    constructor(props) {
        super(props)
        
        this.state={
            containerStyle: {height: 0}
        }
    }

    componentDidMount(){
        this.state={
            containerStyle: {height: 0}
        }
    }

    componentWillReceiveProps(nextProps){
        let { isShow } = nextProps
        if(isShow){
            this.setState({containerStyle:{height: "100%"}})
        }else{
            setTimeout(()=>this.setState({containerStyle:{height: 0}}))
        }
    }

    onItemClickHandler(type){
        let {onClickHandler} = this.props
        onClickHandler && onClickHandler(type)
    }

    render(){
        let { isShow, selectType } = this.props
        let listStyle = isShow ? listStyle = { height: "225px"} : listStyle = { height: 0}
        let {containerStyle} = this.state

        return(
            <div className="tab-select-container" style={containerStyle}>
                <div className="tab-select-list" style={listStyle}>
                    {
                        Object.keys(SafeHeadConst.SAFE_HEAD_SELECT_TAB_LIST).map((type, index)=>{
                            let val = SafeHeadConst.SAFE_HEAD_SELECT_TAB_LIST[type]
                            return (
                                <div key={index} className={"tab-select-item " + (selectType==type ? "selected" : "")} onTouchTap={()=>this.onItemClickHandler(type)}>
                                    <div className="title">{val}</div><div className="icon"></div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="tab-select-container-mask"></div>
            </div>
        )
    }
}

TabSelectContainer.propTypes = {
    isShow: PropTypes.bool.isRequired,
    selectType: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}


export default TabSelectContainer