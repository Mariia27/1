import React from 'react';
import OrderList from '../OrderList/OrderList';
import Form from '../Form/Form';
import style from './CartPage.module.css';


function CartPage(params) {
  return (
    <div className={style.cart}>
      <Form />
      <OrderList />

    </div>
  )
}
export default CartPage;