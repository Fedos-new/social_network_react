import React from 'react';
import s from './StandardButton.module.css'

const StandardButton = (props) => {

    const {primary,className} = props

    const classnameFinal = `${primary ? s.primary : s.default} ${className}`;

    return (
        <button
            {...props}
            className={classnameFinal}
        />
    )
}

export default StandardButton;

