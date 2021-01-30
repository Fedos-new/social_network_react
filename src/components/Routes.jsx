import React from 'react';
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersСontainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import LoginPage from "./Login/Login";
import Friends from "./Friends/Friends";
import {withSuspense} from "../hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));


const Routes = () => {
    return (<>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/setting' render={() => <Settings/>}/>
            <Route path='/login' render={() => <LoginPage/>}/>
            <Route path='/friends' render={() => <Friends/>}/>
        </>
    )
};

export default Routes;
