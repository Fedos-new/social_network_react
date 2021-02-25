import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/components/FormsControls/FormsControls";
import {required} from "../../utils/validator/valodators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/components/FormsControls/FormsControls.module.css"
import comStyle from "../common/style/Container.module.css";
import StandardButton from "../common/components/StandardButton/StandardButton";
import style from './Login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import styles from "../Users/User/User.module.css";
import {PATH} from "../Routes";


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit} className={comStyle.wrapContainer}>
            <div >
                {createField('email', Input, 'email', [required])}
            </div>
            <div>
                {createField('password', Input, 'password', [required], 'password')}
            </div>
            <div>
                {createField(null, Input, 'rememberMe', [], {type: 'checkbox'}, 'remember me')}
            </div>
            {error && <div className={s.formSummaryError}>
                {error}</div>}

            <div>
                <StandardButton>Login  <FontAwesomeIcon icon={faSignInAlt} className={styles.iconBtn}/></StandardButton>
            </div>
        </form>

    )
}


const LoginReduxFrom = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (fromData) => {
        props.login(fromData.email, fromData.password, fromData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return <div className={style.loginWrap}>
        <h1>LOGIN</h1>
        <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
