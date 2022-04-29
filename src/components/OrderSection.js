import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import OrderComponent from './OrderComponent';

function OrderSection() {
  return (
    <div>
      <div className="input__order">
        <input placeholder="Search your orders here" />
        <button>
          <AiOutlineSearch />
          Search Orders
        </button>
      </div>
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
    </div>
  );
}

export default OrderSection