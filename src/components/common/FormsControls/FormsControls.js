import React from "react";
import s from "./FormsControls.module.css"


const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.fromControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...resProps} = props
    return (
        <FormControl {...props}> <textarea {...input} {...resProps}/> </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...resProps} = props
    return (
        <FormControl {...props}> <input {...input} {...resProps}/> </FormControl>
    )
}