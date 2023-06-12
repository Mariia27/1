// import React, { useState } from "react";
// //import { registration, loginUser } from "../../redux/auth/operations";
// //import { useDispatch } from "react-redux";

import style from "./OrderList.module.css";



import { useState } from "react";

const OrderList = () => {
    const [value, setValue] = useState(0);
    const [itemName, setItemName] = useState();
    const [price, setPrice] = useState();

    return (
        <div className={style.list}>
            <div className={style.item}>
                <div className={style.pic}></div>
                <div className={style.info}>
                    <div className={style.text}>
                        <p>name {itemName}</p>
                        <p>Price: {price}</p>
                    </div>
                    <div className={style.number}>
                        <div className={style.values}>
                            {value}
                        </div>
                        <div className={style.arrov}>
                            <button className={style.up} type="button" onClick={() => setValue(value + 1)}>
                                <svg
                                    width="30"
                                    height="12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"
                                        fill="#0c0c0d"
                                    />
                                </svg>
                            </button>
                            <button className={style.down} type="button" onClick={() => setValue(value - 1)}>
                                <svg
                                    width="30"
                                    height="12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"
                                        fill="#0c0c0d"
                                    />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default OrderList;