import React from 'react'
import Filter from '../components/Filter';
import OrderSection from '../components/OrderSection';

function Order() {
  return (
    <div>
        <p style={{fontSize:"12px",marginTop:"50px"}}>Home {">"} My Account {">"} My Orders</p>
        <div className="order__container">
            <Filter />
            <OrderSection />
        </div>
    </div>
  )
}

export default Order