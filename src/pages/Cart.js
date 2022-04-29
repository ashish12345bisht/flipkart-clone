import React,{useState} from "react";

function Cart() {
    const [val,setVal]=useState(1);
  return (
    <div className="cart__main__container">
      <div>
        <div className="cart__location">
          <h4>My Cart(1)</h4>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" />
          <h6>Deliver to</h6>
          <select name="location" id="loca">
            <option value="gurgaon">Gurgaon-12001</option>
          </select>
        </div>
        <div className="cart__product">
          <img src="https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70" />
          <div>
            <h4>Sundry Round, Wayfarer Sunglasses</h4>
            <p>
              For Boys & Girls, Black <br />
              Seller:Sundry Eyewear
            </p>
            <h3>₹330</h3>
          </div>
          <p>Delivery in 2 days, Fri | ₹60</p>
        </div>
        <div className="incr__container">
          <div>
            <button onClick={() => setVal(val - 1)}>-</button>
            <p>{val}</p>
            <button onClick={() => setVal(val + 1)}>+</button>
          </div>
          <h4>SAVE FOR LATER</h4>
          <h4>REMOVE</h4>
        </div>
        <button className="place__order">Place Order</button>
      </div>
      <div className="price__details">
        <h3>PRICE DETAILS</h3>
        <h4>
          <span>Price (1 item)</span>
          <span>₹{2398*val}</span>
        </h4>
        <h4>
          <span>Discount</span>
          <span>-₹{2068*val}</span>
        </h4>
        <h4>
          <span>Delivery Charges</span>
          <span>₹60</span>
        </h4>
        <h4>
          <span>Total Amount</span>
          <span>₹{330*val+60}</span>
        </h4>
        <p>You will save ₹2,008 on this order</p>
      </div>
    </div>
  );
}

export default Cart;
