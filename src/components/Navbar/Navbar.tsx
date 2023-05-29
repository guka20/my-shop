import "./Navbar.scss";
import { BiSearch } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span>PIXORUS</span>
        <span>Customer satisfaction</span>
      </div>
      <div className="search-bar">
        <input type="text" id="search" placeholder="Search product" />
        <label htmlFor="search" className="search-icon">
          <BiSearch />
        </label>
      </div>
      <div className="auth-cart">
        <button className="auth">
          <HiUserCircle />
        </button>
        <button className="cart">
          <AiOutlineShoppingCart />
          (0)
        </button>
      </div>
    </nav>
  );
};
