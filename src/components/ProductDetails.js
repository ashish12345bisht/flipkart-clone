import React from "react";
import { IoLocationSharp } from 'react-icons/io5';

function ProductDetails() {
  return (
    <div>
      <h4>APPLE iPhone 13 (Blue, 128 GB)</h4>
      <div className="ratings">
        <button>4.6&#9733;</button>
        <h6>3,453 Ratings & 365 Reviews</h6>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
      </div>
      <p style={{ color: "#388E3C", fontWeight: "500" }}>Extra ₹5000 off</p>
      <h1>₹74,900</h1>
      <h5>Available offers</h5>
      <ul className="offers__list">
        <li>
          <b>Bank Offer</b> ₹5000 Instant Discount on HDFC Credit Card, Credit
          and Debit EMI
        </li>
        <li>
          <b>Bank Offer</b> Flat ₹50 Instant Cashback on Paytm Wallet. Min Order
          Value ₹500. Valid once per Paytm account
        </li>
        <li>
          <b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card
        </li>
        <li>
          <b>Special Price</b> Get extra ₹5000 off (price inclusive of discount)
        </li>
      </ul>
      <div className="exchange">
        <div>
          <input type="radio" id="exchange" name="payment" checked />
          <label for="exchange">
            <p>Buy without Exchange</p>
            <h4>₹74,900</h4>
          </label>
        </div>
        <div>
          <input type="radio" id="wexchange" name="payment" />
          <label for="wexchange">
            <p>Buy with Exchange</p>
            <h4>up to ₹16,000 off</h4>
          </label>
        </div>
      </div>
      <div className="description__container">
        <h5>Delivery</h5>
        <div>
          <div className="location">
            <IoLocationSharp />
            <input />
            <h6>Change</h6>
          </div>
          <h4>Delivery in 2 Days, Tuesday|Free</h4>
        </div>
      </div>
      <div className="highlights">
        <div className="description__container">
          <h5>Highlights</h5>
          <ul>
            <li>128 GB ROM</li>
            <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
            <li>12MP + 12MP | 12MP Front Camera</li>
            <li>A15 Bionic Chip Processor</li>
          </ul>
        </div>
        <div className="description__container">
          <h5>Easy Payment Options</h5>
          <ul>
            <li>No cost EMI starting from ₹12,484/month</li>
            <li>Net banking & Credit/ Debit/ ATM card</li>
          </ul>
        </div>
      </div>
      <div className="description__container">
        <h5>Seller</h5>
        <ul>
          <li>
            7 day seller replacement policy/brand assistance for device issues*
          </li>
          <li>GST invoice available</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
