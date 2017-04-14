/**
 * created by zhao at 2017/4/11
 */

import React, { PropTypes } from 'react'

import Page from '../../../components/page'
import FrozenAccountBank from './frozenAccountBankComponent'
import FrozenAccountPhone from './frozenAccountPhoneComponent'

import './index.scss'

class FrozenAccountType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ""
        }
    }

    componentDidMount() {
        this.setState({
            type: this.props.params.type
        })
    }

    render() {
        let { type } = this.state, component
        if(type == "phone"){
            component = <FrozenAccountPhone />
        }else if(type == "bank"){
            component = <FrozenAccountBank />
        }
        return (
            <Page id="frozen-account-type-view">
                {component}
            </Page>
        )
    }
}

FrozenAccountType.propTypes = {
}

export default FrozenAccountType