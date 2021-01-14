import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/valodators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
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
                <button>Login</button>
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
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)