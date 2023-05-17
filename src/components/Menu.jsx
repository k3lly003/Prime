import React from "react";
import Icon from "./Icon";
import { HiViewGrid } from "react-icons/hi";
import { BiMovie } from "react-icons/bi";
import { BiTv } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";
import { BsFillBookmarkFill } from "react-icons/bs";
import me from "../image/IMG_6227.jpg";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <div className="menu-cont">
        <div className="one">
          <div className="lust">
            <Link to="/">
              <BiMovie className="move" />
            </Link>
          </div>
          <div className="list">
            <Link to="/Categories">
              <HiViewGrid />
            </Link>
          </div>
          <div className="list">
            <Link to="/Movies">
              <TbMovie />
            </Link>
          </div>
          <div className="list">
            <Link to="/Series">
              <BiTv />
            </Link>
          </div>
          <div className="list">
            <Link to="/Saved">
              <BsFillBookmarkFill />
            </Link>
          </div>
        </div>
        <div className="two">
          <Link to="/account">
            <img src={me} className="me" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
