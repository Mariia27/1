import React, { useState } from "react";
//import { registration, loginUser } from "../../redux/auth/operations";
//import { useDispatch } from "react-redux";

import style from "./Form.module.css";

export default function Form({ props }) {
    // const dispatch = useDispatch();
    const [email, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [isActiv, setIsActiv] = useState(true);

    const waitCheck = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "email") {
            setMail(value);
        }
        if (name === "name") {
            setName(value);
        }
        if (adress === 'adress') {
            setAdress(value)
        }
    };

    const waitPhone = (e) => {
        setPhone(e.target.value);
    };

    const handleChangeForm = () => {
        setIsActiv(!isActiv);
    };

    const handlSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            phone,
            adress,
        };
        submitUser(user);
        setMail("");
        setPhone("");
        setName("");
        setAdress("");
    };

    const submitUser = async ({ name, email, phone, adress }) => {
        const options = {
            name,
            email,
            phone,
            adress,
        };

        // switch (isActiv) {
        //     case true:
        //         return await dispatch(registration(options));
        //     case false:
        //         return await dispatch(loginUser({ email, password }));
        //     default:
        //         return "I cannot login user";
        // }
    };

    return (
        <div className={style.wrapper}>
            <form className={style.form} onSubmit={handlSubmit} autoComplete="off">
                {isActiv && (
                    <label className={style.label}>
                        <p className={style.description}>Name:</p>
                        <input
                            className={style.input}
                            type="text"
                            name="name"
                            value={name}
                            required
                            onChange={waitCheck}
                        />
                    </label>
                )}
                <label className={style.label}>
                    <p className={style.description}>Email:</p>
                    <input
                        className={style.input}
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={waitCheck}
                    />
                </label>
                <label className={style.label}>
                    <p className={style.description}>Phone:</p>
                    <input
                        className={style.input}
                        type="phone"
                        name="phone"
                        required
                        value={phone}
                        onChange={waitPhone}
                    />
                </label>
                <label className={style.label}>
                    <p className={style.description}>Adress:</p>
                    <input
                        className={style.input}
                        type="adress"
                        name="adress"
                        value={adress}
                        required
                        onChange={waitCheck}
                    />
                </label>
                <div className={style.formButton}>
                    <button className={style.button} onClick={handleChangeForm} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );

}
