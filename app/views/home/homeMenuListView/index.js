/**
 * created by zhao at 2017-3-17
 */
import React, { PropTypes } from 'react'


import HomeMenuItem from '../homeMenuItem'
import Modal from '../../../components/modal'

import navigate from '../../../router/navigate'

import * as ModalConst from '../../../components/modal/modalConst'
import * as HomeConst from '../reducer/const'
import { RouterConst } from '../../../static/const'


class HomeMenuListView extends React.Component{
    //菜单点击事件
    onClickHandler(link){
        if(link != ""){
            let isAlert, { data } = this.props, isOpen = data.isOpen
            if(HomeConst.HOME_MEMBER_LIST.find(value => value == link) && isOpen == 1){
                isAlert = true
            }
            if(isAlert){
                Modal.alert({}, ModalConst.MODAL_ALERT_MEMBER_SKIN).then(function(data){
                    if(data == ModalConst.YES) navigate.push(RouterConst.ROUTER_OPEN_TIP);
                })
            }else{
                navigate.push(link);
            }
        }
    }

    render(){
        let { data } = this.props, isOpen = data.isOpen
        let items = HomeConst.MenuList.map((obj, index)=>{
            let str = obj.id == HomeConst.HOME_FOOT ? data.lbs : ""
            let iconStatus = HomeConst.HOME_MEMBER_LIST.find(value => value == obj.link) && isOpen == 1 ? false : true
            return (<HomeMenuItem key={index} descRealStr={str} iconStatus={iconStatus} menuData={obj} clickHandler={()=>this.onClickHandler(obj.link)} />)
        })

        return(
            <div className="home-open-bottom-div">
                {items}
            </div>
        )
    }
}

HomeMenuListView.propTypes = {
    data : PropTypes.shape({
        lbs: PropTypes.string.isRequired,
        isOpen: PropTypes.number.isRequired
    }).isRequired
}

export default HomeMenuListView