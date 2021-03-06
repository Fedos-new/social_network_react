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


const LoginForm = ({handleSubmit, error, captchaUrl }) => {

    return (
        <form onSubmit={handleSubmit} className={comStyle.wrapContainer}>
            <div >
                {createField('email', Input, 'email', [required])}
            </div>
            <div>
                {createField('password', Input, 'password', [required], {type: 'password'})}
            </div>
            <div>
                {createField(null, Input, 'rememberMe', [], {type: 'checkbox'}, 'remember me')}
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl &&  createField('Symbols from image', Input, 'captcha', [required])}

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
        props.login(fromData.email, fromData.password, fromData.rememberMe, fromData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={style.loginWrap}>
        <h1>LOGIN</h1>
        <LoginReduxFrom onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
