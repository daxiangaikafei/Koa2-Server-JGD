/**
 * created by zhao at 2017/3/24
 */

import React, { PropTypes } from 'react'

import Page from '../../components/page'
import TradeRightsItem from './tradeRightItem'

import * as tradeConst from './reducer/const'

import './index.scss'


/**交易维权 */
class TradeRights extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.setState({
            list: tradeConst.TradeRightsItemList
        })
    }

    render(){
        let { list } = this.state

        return(
            <Page id="trade-rights-view">
                <div className="trade-rights-container">
                    <div className="trade-rights-list">
                        {
                            list.map((obj, index) => <TradeRightsItem data={obj} key={index} />)
                        }
                    </div>
                </div>
            </Page>
        )
    }
}

export default TradeRights