/**
 * created by zhao at 2017/3/15
 */

import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getHomeData, closeSecurity } from './reducer/actions'

import Page from '../../components/page'

import CloseComponent from './closeComponent'

import HomeTopView from './homeTopView'
import HomeMenuListView from './homeMenuListView'
import HomeHelpView from './homeHelpView'

import './index.scss'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showHelp: false,
            showClose: false
        }
    }
    
    componentDidMount(){
        this.props.getHomeData()
        this.setState({
            showHelp: false,
            showClose: false
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
    
    render() {
        let { showClose, showHelp } = this.state
        let { lbs, isOpen } = this.props
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
            </Page>
        )
    }
}

Home.propTypes = {
    lbs : PropTypes.string.isRequired,
    isOpen : PropTypes.number.isRequired,

    getHomeData : PropTypes.func.isRequired,
    closeSecurity: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    lbs: state.homeReducer.lbs,
    helpIsShow: state.homeReducer.helpIsShow,

    isOpen: state.userReducer.status,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getHomeData, closeSecurity } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)