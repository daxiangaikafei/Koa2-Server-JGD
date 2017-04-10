/**
 * created by zhao at 2017/3/24
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getPlaceData } from '../reducer/actions'

import './index.scss'

/**安全画像 */
class PlaceComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getPlaceData()
    }

    getShowComponent(){
        let { placeData } = this.props
        if(placeData.length > 0){
            return (
                <div className="place-list">
                    {
                        placeData.map((obj, index) => {
                            return (
                                <div className="place-item" key={index}>
                                    <div className="num">{index + 1}</div>
                                    <div className="right-div">
                                        <div className="place-txt">{obj.addr}</div>
                                        <div className="times-txt">使用{obj.count}次</div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else{
            return <div className="no-info place-no-info"><div className="no-data-icon"></div><div className="msg">暂时无法获得数据</div></div>
        }
    }

    render(){
        
        return(
            <div className="safety-place-item-view">
                <div className="place-title">最近30天使用的收货地址</div>
                <div className="place-scroll">
                    { this.getShowComponent() }                        
                </div>
            </div>
        )
    }
}

PlaceComponent.propTypes = {
    placeData: PropTypes.arrayOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
            addr: PropTypes.string.isRequired,
        })
    ).isRequired,
    getPlaceData: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    placeData: state.safeHeadReducer.devicePlace,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPlaceData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceComponent)