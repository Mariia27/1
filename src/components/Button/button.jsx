import React from "react";
import style from "../Button/button.css";

function Button({ onClick, onSubmit, type, active, text }) {
    return (
        <button
            type={type}
            className={style.button}
            onClick={onClick}
            style={active}
            onSubmit={onSubmit}
        >
            {text}
        </button>
    )

}
export default Button;