import React from 'react';
import s from './StandardButton.module.css'

const StandardButton = (props) => {

    const {primary,className}= props

    let classname = `${primary ? s.primary : s.default} ${className}`;

    return (
        <button
            className={classname}
            {...props}
        />

    )


}

export default StandardButton;

