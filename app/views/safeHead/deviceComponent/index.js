/**
 * created by zhao at 2017/3/24
 */
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { geDeviceLBSData, getDeviceData } from '../reducer/actions'
import ReactEcharts from 'echarts-for-react'

import * as SafeHeadConst from '../reducer/const'

import './index.scss'

/**设备信息 */
class DeviceComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.sendData(this.props.showType)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.showType != nextProps.showType){
            this.sendData(nextProps.showType)
        }
    }

    sendData(type){
        if(type == SafeHeadConst.SAFE_HEAD_DEVICE_LBS){
            this.props.geDeviceLBSData()
        }else if(type == SafeHeadConst.SAFE_HEAD_DEVICE_INFO){
            this.props.getDeviceData()
        }
    }

    getTitle(list){
        let { showType, deviceData } = this.props
        if(showType == SafeHeadConst.SAFE_HEAD_DEVICE_LBS){
            return "近30天您一共在"+list.length+"个不同的地方登陆"
        }else{
            return "近30天您一共在"+list.length+"个不同的设备登陆"
        }
    }

    formatEchartData(list){
        const MaxCnt = 4, result = []
        let qt = {name: "其他", value: 0};
        list.forEach(function(obj, index) {
            if(index < MaxCnt){
                result.push({value: obj.value, name: obj.name}) 
            }else{
                qt.value += obj.value
            }
        })

        if(qt.value > 0) result.push(qt)
        return result
    }

    getEChartsOption(list){
        let allCnt = 0, data = this.formatEchartData(list)
        data.map(obj => allCnt+= obj.value)
        let option = {
            backgroundColor: '#fff',
            title: {
                text: '总计',
                subtext: allCnt + '次',
                x: 'center',
                y: '24%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12.5,
                    color: '#90909b'
                },
                subtextStyle: {
                    fontSize : 14,
                    color : '#90909b'
                },
            },

            series: [{
                type: 'pie',
                radius: ['25%', '50%'],
                center : ['50%', '32%'],
                color: SafeHeadConst.SafeHeadColorArr,
                hoverAnimation : false,
                label: {
                    normal: {
                        //formatter: '{b}\n{d}%',
                        formatter : function(val){
                            var res = "";
                            if(val.name){
                                var maxLen = 6, len = Math.ceil(val.name.length / maxLen);
                                for(var i = 0; i < len; i++){
                                    res += val.name.substring(i*maxLen, (i+1)*maxLen) + "\n";
                                }
                            }else{
                                res = val.name + "\n";
                            }
                            res += val.percent + "%";
                            return res
                        },
                        textStyle: {
                            color: '#90909b',
                            fontWeight: 'normal',
                            fontSize: 12
                        },
                        //position: 'outsideTop'
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                    }
                },
                data: data
            }]
        }
        return option
    }

    getShowComponent(){
        let { deviceData } = this.props
        let title= this.getTitle(deviceData)
        if(deviceData && deviceData.length){
            let MaxCnt = 4
            let listItems = deviceData.map((obj, index) => {
                let lbsIndex = index > MaxCnt ? MaxCnt : index;
                return <li className="device-lbs-item" key={index}><div className={"icon " + "lbs_"+lbsIndex}>{obj.count}</div><div className="name">{obj.name}</div></li>
            })
            let onEvents = {
                'click': (data)=>this.onChartClick(data),
            }
            return (
                <div className="device-info">
                    <div className="device-title">{title}</div>
                    <div className="device-scroll">
                        <div className="device-canvas">
                            <ReactEcharts option={this.getEChartsOption(deviceData)} onEvents={onEvents}/>
                        </div>
                        
                        <div className="device-list-container">
                            <div ref="wrapper" className="wrapper">
                                <ul className="device-list">{listItems}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="no-info device-no-info"><div className="no-data-icon"></div><div className="msg">暂时无法获得数据</div></div>
            )
        }
    }

    onChartClick(data){
        this.refs.wrapper.scrollLeft = data.dataIndex * 120
    }

    render(){
        let component = this.getShowComponent()
        return(
            <div id="safety-device-item-view">
                <div className="safety-device-container">
                    {component}
                </div>
            </div>
        )
    }
}

DeviceComponent.propTypes = {
    showType: PropTypes.string.isRequired,
    deviceData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired,

    geDeviceLBSData: PropTypes.func.isRequired,
    getDeviceData: PropTypes.func.isRequired,
}


let mapStateToProps = state => ({
    deviceData: state.safeHeadReducer.deviceData,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ geDeviceLBSData, getDeviceData } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceComponent)