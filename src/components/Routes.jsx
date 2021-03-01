import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
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
    LOGIN: '/login',
    PROFILE: '/profile/:userId?',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTING: '/setting',
    FRIENDS: '/friends',
    USERS: '/users',
}


const Routes = () => {
    return (<>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/profile/'}/>}/>
                <Route path={PATH.DIALOGS} render={withSuspense(DialogsContainer)}/>
                <Route path={PATH.PROFILE} render={withSuspense(ProfileContainer)}/>
                <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
                <Route path={PATH.NEWS} render={() => <News/>}/>
                <Route path={PATH.MUSIC} render={() => <Music/>}/>
                <Route path={PATH.SETTING} render={() => <Settings/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.FRIENDS} render={() => <Friends/>}/>
                <Route path='*' render={() => <div>404 not found</div>}/>
            </Switch>
        </>
    )
};

export default Routes;
