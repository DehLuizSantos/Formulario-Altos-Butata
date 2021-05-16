import React from 'react'
import Header from '../../components/Header'

const PageDashboard = Component =>{
    return class extends React.Component{
        render(){
            return(
                <>
                    <Header />
                    <h1>PG Dashboard</h1>
                </>
            )
        }
    }
}

export default PageDashboard