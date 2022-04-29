import React from "react";
import { AiOutlineSearch, AiOutlineDown, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import {
  BsCoin,
  BsFolderSymlinkFill,
  BsFillChatLeftTextFill,
  BsFillCartFill,
} from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { RiCoupon2Fill } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="custom__header">
      <div className="logo">
        <Link to="/">
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
        </Link>
        <p>
          Explore <span>Plus</span>
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" />
        </p>
      </div>
      <div className="header__middle">
        <input placeholder="Search for products, brands and more" type="text" />
        <AiOutlineSearch style={{ color: "#2874F0", fontSize: "1.5em" }} />
      </div>
      <div className="header__right">
        <h2>
          Ashish <AiOutlineDown className="user__arrow" />
          <div className="user__dropdown">
            <h6>
              <FaUserCircle className="header__icons" />
              My Profile
            </h6>
            <h6>
              <BsCoin className="header__icons" />
              SuperCoin Zone
            </h6>
            <h6>
              <FiPlus className="header__icons" />
              Flipkart Plus Zone
            </h6>
            <h6>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="orders"
              >
                <BsFolderSymlinkFill className="header__icons" />
                Orders
              </Link>
            </h6>
            <h6>
              <AiFillHeart className="header__icons" />
              Wishist
            </h6>
            <h6>
              <BsFillChatLeftTextFill className="header__icons" />
              My Chats
            </h6>
            <h6>
              <RiCoupon2Fill className="header__icons" />
              Coupons
            </h6>
            <h6>
              <GoGift className="header__icons" />
              Gift Cards
            </h6>
            <h6>
              <IoIosNotifications className="header__icons" />
              Notifications
            </h6>
            <h6>
              <BiLogOut className="header__icons" />
              Logout
            </h6>
          </div>
        </h2>

        <h2>
          More <AiOutlineDown className="more__arrow" />
          <div className="more__dropdown">
            <h6>
              <FaUserCircle className="header__icons" />
              Notification Preferences
            </h6>
            <h6>
              <BsCoin className="header__icons" />
              Sell On Flipkart
            </h6>
            <h6>
              <FiPlus className="header__icons" />
              24X7 Customeer Care
            </h6>
            <h6>
              <BsFolderSymlinkFill className="header__icons" />
              Advertise
            </h6>
            <h6>
              <AiFillHeart className="header__icons" />
              Download App
            </h6>
          </div>
        </h2>
        <h2>
          <BsFillCartFill />
          <Link style={{textDecoration:"none",color:"white"}} to='cart' >
          Cart
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Header;
