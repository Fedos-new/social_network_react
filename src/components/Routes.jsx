import React from 'react';
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersСontainer";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import LoginPage from "./Login/Login";
import Friends from "./Friends/Friends";


const Routes = () => {
    return (<>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
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
