/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'

import Page from '../../../components/page'
import TabItemArrow from '../../../components/ui/tabItemArrow'

import navigate from '../../../router/navigate'
import {RouterConst} from '../../../static/const'

import './index.scss'

class FrozenWayChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    onClickHandler(type){
        navigate.push(RouterConst.ROUTER_FROZEN_ACCOUNT_TYPE + type)
    }

    render() {
        return (
            <Page id="frozen-way-choice-view" title="冻结账号">
                <div className="frozen-way-choice-container">
                    <TabItemArrow title="通过绑定的手机号冻结" onClickHandler={() => this.onClickHandler("phone")} />
                    <TabItemArrow title="通过绑定的银行卡冻结" onClickHandler={() => this.onClickHandler("bank")} />

                    <div className="tip">
                        如上述方式仍无法解决<br />
                        请致电24小时客服热线：<a href='tel:4001558899'>400-155-8899</a>
                    </div>
                </div>
            </Page>
        )
    }
}

FrozenWayChoice.propTypes = {
}

export default FrozenWayChoice