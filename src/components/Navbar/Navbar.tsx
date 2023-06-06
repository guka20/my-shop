import "./Navbar.scss";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {IoMdArrowDropdown} from 'react-icons/io'
import { useState } from "react";
export const Navbar = () => {
  const [lang,setLang] = useState("ENGLISH");
  const [dropDown,setDropDown] = useState(false)
  const handleChangeLanguage = (langText:string ) =>{
      setLang(langText)      
      setDropDown(false)
  }
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span>PIXORUS</span>
        <span>Customer satisfaction</span>
      </div>
      <div className="auth-cart">
        <button className="auth">
          <HiUserCircle />
        </button>
        <button className="lang" onClick={()=>setDropDown(!dropDown)} onBlur={()=>setDropDown(false)}>
          <span>{lang} <IoMdArrowDropdown/></span>
          <ul className={dropDown?"droped-down":"drop-down"}>
            <li onClick={()=>handleChangeLanguage("ქართული")}>ქართული</li>
            <li onClick={()=>handleChangeLanguage("ENGLISH")}>ENGLISH</li>
          </ul>
        </button>
        <button className="cart">
          <AiOutlineShoppingCart />
          (0)
        </button>
      </div>
    </nav>
  );
};
