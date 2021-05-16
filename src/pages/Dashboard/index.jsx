import React, { Component } from 'react'

import BaseDashboard from './baseDashboard'

function Dashboard(){
    return (
        <BaseDashboard>
            <Component {...this.props} />
        </BaseDashboard>
    )
}

export default Dashboard