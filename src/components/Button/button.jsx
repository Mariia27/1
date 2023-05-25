import React from "react";
import style from "../Button/Button.css";

function Button({ onClick, onSubmit,
}) {
    return (
        <button
            type={button}
            className={style}
            onClick={onClick}
            //style={active}
            onSubmit={onSubmit}
        >
            add to Cart
        </button>
    )

}
export default Button;