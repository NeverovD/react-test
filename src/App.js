import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import LinkBtn from './components/LinkBtn'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer'
import InfoContainer from './containers/InfoContainer'
import Calendar from './components/Calendar'
import './App.css'
//import { Provider } from "react-redux";


const App = () => (

<Router>
    <div>
        <header className="header">
            <div className="top-menu">
                <LinkBtn to="/" label={'Главная'} />
                <LinkBtn to="/profile" label={'Профиль'} />
                <LinkBtn to="/info" label={'Новости'} />
                <LinkBtn to="/calendar" label={'Календарь'} />
                <LinkBtn to="/login" label={'Логин'} />
            </div>
        </header>

        <hr />
        <div className="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/info" component={InfoContainer} />
                <Route path="/login" component={LoginContainer} />
                <PrivateRoute path="/profile" component={ProfileContainer} />
                <PrivateRoute path="/calendar" component={Calendar} />
            </Switch>
        </div>
    </div>
</Router>
);

export default App
