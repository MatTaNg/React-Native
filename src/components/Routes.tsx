import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {Home} from './Home/Home'
import {Login} from './Login/Login'
import {Register} from './Register/Register'

export const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" />
            <Scene key = "login" component = {Login} title = "Login" initial = {true} />
            <Scene key = "register" component = {Register} title = "Register" />
        </Scene>
    </Router>

)