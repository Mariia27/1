import React from "react";
import Button from "../Button/Button";
import style from './Card.css';

function Card(params) {
    return (
        <section className={css.section}>
            {login && <Skeleton />}
            <div className={css.imgBack}>
                <div className={css.container}>
                    {active ? (
                        <AddFormMobile onSubmit={getFormInfo} type={type} />
                    ) : (
                        <div className={css.box}>
                            {!balance && <Comment />}
                            <button className={css.sum} type="button" onClick={goSummary}>
                                Перейти к отчетам
                                <Diagramma className={css.diagramma} />
                            </button>
                            <div className={css.balance}>
                                <p className={css.text}>Баланс:</p>
                                <form className={css.wraper} onSubmit={addBalance}>
                                    <input
                                        className={css.add}
                                        type="number"
                                        min="1"
                                        placeholder="0.00 UAH"
                                        onChange={checkBalance}
                                        value={money}
                                    />
                                    <button className={css.btnAdd} type="submit">
                                        Подтвердить
                                    </button>
                                </form>
                            </div>
                            <div className={css.flex}>
                                <Calendar />
                            </div>
                            <div className={css.mobile}>
                                <MobileList type={type} />
                            </div>
                            <div className={css.descktop}>
                                <AddForm onSubmit={getFormInfo} type={type} />
                                <div className={css.list}>
                                    <List type={type} />
                                </div>
                            </div>
                            <div className={css.boxLinkMin}>
                                <NavLink className={css.link} to={`${match.url}/casts`}>
                                    <button
                                        className={css.btn}
                                        type="button"
                                        onClick={() => setType("costs")}
                                    >
                                        Расход
                                    </button>
                                </NavLink>
                                <NavLink className={css.link} to={`${match.url}/incomes`}>
                                    <button
                                        className={css.btn}
                                        type="button"
                                        onClick={() => setType("incomes")}
                                    >
                                        Доход
                                    </button>
                                </NavLink>
                            </div>

                            <div className={css.boxButton}>
                                <button
                                    className={css.btn}
                                    type="button"
                                    onClick={() => setType("costs")}
                                    style={
                                        type === "costs" ? { color: "orange" } : { color: "black" }
                                    }
                                >
                                    Расход
                                </button>
                                <button
                                    className={css.btn}
                                    type="button"
                                    onClick={() => setType("incomes")}
                                    style={
                                        type === "incomes"
                                            ? { color: "orange" }
                                            : { color: "black" }
                                    }
                                >
                                    Доход
                                </button>
                            </div>
                        </div>
                    )}
                    <div className={css.imgBackKapusta}></div>
                </div>
            </div>
        </section>
    );

}