import React from 'react'

function OrderComponent() {
  return (
    <div className="order__component">
      <img style={{width:"100px",height:"100px"}} src="https://rukminim2.flixcart.com/image/kjuby4w0/sari/p/0/i/free-more12-toriox-semi-stitched-original-imafzbfu32scnngh.jpeg" />
      <div>
        <h3>Product Name</h3>
        <p>Product Details</p>
        <p>Seller Name</p>
      </div>
      <h4>₹ Price</h4>
      <div>
          <h2>Delivered on Nov 21,2020</h2>
          <p>Your item has been delivered</p>
      </div>
    </div>
  );
}

export default OrderComponent