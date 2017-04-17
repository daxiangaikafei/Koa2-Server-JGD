/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getHomeData, closeSecurity, onCloseBroadCast } from './reducer/actions'

import Page from '../../components/page'

import CloseComponent from './closeComponent'

import HomeTopView from './homeTopView'
import HomeMenuListView from './homeMenuListView'
import HomeHelpView from './homeHelpView'
import NewestBroadCast from '../../components/ui/newestBroadCast'

import navigate from '../../router/navigate'
import { RouterConst } from '../../static/const'

import './index.scss'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showHelp: false,
            showClose: false,
        }
    }
    
    componentDidMount(){
        this.props.getHomeData()
        this.setState({
            showHelp: false,
            showClose: false,
        })
    }

    onShowHelpComponent(){
        this.setState({showHelp: true})
    }

    onHideHelpComponent(){
        this.setState({showHelp: false})
    }

    /**显示关闭提示 */
    onShowCloseComponent(){
        this.setState({showClose: true})
    }

    /**关闭关闭提示 */
    onHideCloseComponent(type){
        if(type) this.props.closeSecurity()
        this.setState({showClose: false})
    }

    onBroadCastHandler(id){
        this.props.onCloseBroadCast()
        if(id){
            navigate.push(RouterConst.ROUTER_BROADCAST_INFO + id)
        }
    }
    
    render() {
        let { showClose, showHelp } = this.state
        let { lbs, isOpen, showNewest, newest } = this.props
        let MenuListData = {
            lbs: lbs,
            isOpen: isOpen
        }
        return (
            <Page id="home-page">
                <div className="home-container">
                    <HomeTopView 
                        onBnCloseHandler={()=>this.onShowCloseComponent()}
                        onBnHelpHandler={()=>this.onShowHelpComponent()} />
                    <HomeMenuListView data={MenuListData} />
                </div>
                { showHelp ? (<HomeHelpView onClickHandler={()=>this.onHideHelpComponent()} />) : ""}
                { showClose ? <CloseComponent onClickHandler={(type)=>this.onHideCloseComponent(type)} /> : ""}
                { showNewest ? <NewestBroadCast data={newest} onClickHandler={(id)=>this.onBroadCastHandler(id)} /> : ""}
            </Page>
        )
    }
}

Home.propTypes = {
    lbs : PropTypes.string.isRequired,
    isOpen : PropTypes.number.isRequired,
    showNewest: PropTypes.bool.isRequired,
    newest: PropTypes.shape({
        type: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        format_date: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    }),

    getHomeData : PropTypes.func.isRequired,
    closeSecurity: PropTypes.func.isRequired,
    onCloseBroadCast: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    lbs: state.homeReducer.lbs,
    helpIsShow: state.homeReducer.helpIsShow,
    showNewest: state.homeReducer.showNewest,
    newest: state.homeReducer.newest,

    isOpen: state.userReducer.status,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getHomeData, closeSecurity, onCloseBroadCast } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)