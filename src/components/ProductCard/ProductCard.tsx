import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 500,
  easing: "linear",
});
type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  id: number;
  description: string;
};
export const ProductCard = ({
  image,
  name,
  price,
  id,
  description,
}: ProductCardProps) => {
  return (
    <div className="product-card" data-aos="zoom-in">
      <img src={image} alt="Card item" width="100%" height="170px" />
      <div className="texture">
        <h2 className="header">
          <Link to={`/products/${id}`}>{name}</Link>
        </h2>
        <p className="description">{description}</p>
        <span className="price">${price}</span>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};
