import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import RecuperarSenha from '../pages/RecuperarSenha'
import Perfil from '../pages/Perfil'

import BaseLogin from '../containers/Login'
import BaseDashboard from '../containers/Dashborard'


import { History } from '../history'
import PrivateRoute from './privateRoutes'



function Routes(){
    return(
        <BrowserRouter History={History}>
            <Switch>
                <Route path='/' exact component={BaseLogin(Login)} />
                <Route path='/recuperar-senha' exact component={BaseLogin(RecuperarSenha)} />

                <PrivateRoute path='/dashboard' exact component={BaseDashboard(Dashboard)} />
                <PrivateRoute path='/perfil' exact component={BaseDashboard(Perfil)} />      
                           
            </Switch>            
        </BrowserRouter>
    )
}

export default Routes