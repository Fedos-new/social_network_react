import React from 'react';
import Header from "./Header";
import {logout, setAuthUserData} from '../../redux/auth-reducer';
import {connect} from "react-redux";
import {getStatus} from "../../redux/profile-reducer";


class HeaderContainer extends React.Component {





    render() {
        return <Header
            {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
                       profile={this.props.profile}
                       logout={this.props.logout}
        /> ;
    }

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, { setAuthUserData, getStatus , logout}) (HeaderContainer);
