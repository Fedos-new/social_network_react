import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={"login"}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} component={'input'} name={"rememberMe"} /> remember me
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