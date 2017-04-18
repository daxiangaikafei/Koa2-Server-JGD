// 文件名称: page.js
//
// 创 建 人: zhao
// 创建日期: 2017/3/14
// 描    述: page

import React from 'react'

import DocumentTitle  from 'react-document-title'

import './index.scss'

class Page extends React.Component{
    render(){
        return (
            <div className='ui-view-transitioning lt-ui-page' id={this.props.id}>
                <DocumentTitle title={this.props.title || "金戈盾"} />
                {this.props.children}
            </div>
        );
    }
};

export default Page;