import React from 'react'



class BaseDashboard extends React.Component{
    render(){
        return(
            <>
                
                {this.props.children}
            </>
        )
    }
}

export default BaseDashboard