import React from 'react'

import BaseLogin from './baseLogin'

const baseLogin = Component =>{
    return class extends React.Component{
        render(){
            return(
                <BaseLogin>
                    <Component {...this.props} />
                </BaseLogin>
            );
        }
    }
}

export default baseLogin