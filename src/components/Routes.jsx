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

export const PATH = {
    LOGIN:'/login',
    PROFILE:'/profile/:userId?',
    ERROR_404:'/404',
    DIALOGS:'/dialogs',
    NEWS:'/news',
    MUSIC:'/music',
    SETTING: '/setting',
    FRIENDS: '/friends',
    USERS: '/users',
}



const Routes = () => {
    return (<>
            <Route path={PATH.DIALOGS} render={withSuspense(DialogsContainer)}/>
            <Route path={PATH.PROFILE} render={withSuspense(ProfileContainer)}/>
            <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
            <Route path={PATH.NEWS} render={() => <News/>}/>
            <Route path={PATH.MUSIC} render={() => <Music/>}/>
            <Route path={PATH.SETTING} render={() => <Settings/>}/>
            <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
            <Route path={PATH.FRIENDS} render={() => <Friends/>}/>
        </>
    )
};

export default Routes;
