import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/valodators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} component={Input} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={"password"} type={"password"} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                    {props.error}</div>}

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
    if(props.isAuth) {
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

export default connect(mapStateToProps,{login})(Login)