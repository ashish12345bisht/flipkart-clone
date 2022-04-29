import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
function Footer() {
  return (
    <div className="footbar">
      <div className="footbar__top">
        <div>
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>Flipkart Wholesale</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQs</p>
          <p>Report Infringement</p>
        </div>
        <div>
          <h4>POLICY</h4>
          <p>Return Policy</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>EPR Compliance</p>
        </div>
        <div>
          <h4>SOCIAL</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
        <div>
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </p>
        </div>
        <div>
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            Telephone: 1800 202 9898
          </p>
        </div>
      </div>
      <div className="footbar__bottom">
        <h4>
          <BsFillBagFill className="footer__icons" />
          Sell On Flipkart
        </h4>
        <h4>
          <MdStars className="footer__icons" />
          Advertise
        </h4>
        <h4>
          <IoMdGift className="footer__icons" />
          Gift Cards
        </h4>
        <h4>
          <AiFillQuestionCircle className="footer__icons" />
          Helpdesk
        </h4>
        <h4>© 2007-2022 Flipkart.com</h4>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" />
      </div>
    </div>
  );
}

export default Footer;
