import React, { useState } from "react";
import {BsFillCartFill} from 'react-icons/bs';
import {AiFillThunderbolt} from 'react-icons/ai';

function ProductImages() {
  const [src, setSrc] = useState(
    "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70"
  );
  return (
    <div>
      <div className="product__images">
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/q/h/8/iphone-13-mlpk3hn-a-apple-original-imag6vpywdtyhbkr.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/q/h/8/iphone-13-mlpk3hn-a-apple-original-imag6vpywdtyhbkr.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/t/e/e/iphone-13-mlpk3hn-a-apple-original-imag6vpyggrjkms3.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/t/e/e/iphone-13-mlpk3hn-a-apple-original-imag6vpyggrjkms3.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/o/g/y/iphone-13-mlpk3hn-a-apple-original-imag6vpynyukqezf.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/o/g/y/iphone-13-mlpk3hn-a-apple-original-imag6vpynyukqezf.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/n/i/l/iphone-13-mlpk3hn-a-apple-original-imag6vpytfdgdfs5.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/n/i/l/iphone-13-mlpk3hn-a-apple-original-imag6vpytfdgdfs5.jpeg?q=70"
              )
            }
          />
          <img
            src="https://rukminim2.flixcart.com/image/128/128/ktketu80/mobile/7/e/u/iphone-13-mlpf3hn-a-apple-original-imag6vzz3yhhhygz.jpeg?q=70"
            onMouseOver={() =>
              setSrc(
                "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/7/e/u/iphone-13-mlpf3hn-a-apple-original-imag6vzz3yhhhygz.jpeg?q=70"
              )
            }
          />
        </div>
        <div>
          <img src={src} />
        </div>
      </div>
      <button className="cart__button"><BsFillCartFill/>Add To Cart</button>
      <button className="buy__button"><AiFillThunderbolt/>Buy Now</button>
    </div>
  );
}

export default ProductImages;
