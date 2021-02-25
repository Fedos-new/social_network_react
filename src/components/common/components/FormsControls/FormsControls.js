import React from "react";
import s from "./FormsControls.module.css"
import z from "../../../Profile/MyPosts/MyPosts.module.css"
import {Field} from "redux-form";
import style from "../../../Login/Login.module.css";


const FormControl = ({ meta:{touched,error},children}) => {
    const hasError = touched && error
    return (
        <div className={s.fromControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...resProps} = props
    return (
        <FormControl {...props}> <textarea {...input} {...resProps} className={z.textarea}/> </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...resProps} = props
    return (
        <FormControl {...props}> <input {...input} {...resProps} /> </FormControl>
    )
}

export const createField = (placeholder, component, name, validate, props = {}, text = '') =>
    <div>
        <Field placeholder={placeholder}
               component={component}
               name={name}
               validate={validate}
               className={style.inputLogin}
               {...props}/> {text}
    </div>
