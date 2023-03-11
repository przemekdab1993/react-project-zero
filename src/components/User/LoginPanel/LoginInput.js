import React, {useImperativeHandle, useRef} from "react";

import styles from "./LoginInput.module.css";

const LoginInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activite = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activite
        };
    });

    return (
        <div className={`${styles["login-form-group"]}`} >
            <label className={`${styles["login-form-label"]} ${(props.isValid === false) ? styles["invalid"] : ''}`} htmlFor={props.name}>{props.title}</label>
            <input
                className={`${(props.isValid === false) ? styles["invalid"] : ''}`}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={inputRef}
            />
        </div>
        );
});

export default LoginInput;