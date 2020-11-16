import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/valodators";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={"login"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={"password"} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxFrom = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData)
    }
    return <div>
        <h1>LOGIN</h1>
       <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
}


export default Login