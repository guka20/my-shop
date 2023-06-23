import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import img from "src/assets/banner_img1.jpg";
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
  name,
  price,
  id,
  description,
}: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="product-card" data-aos="zoom-in">
      <img src={img} alt="Card item" width="100%" height="170px" />
      <div className="texture">
        <h3 className="header">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>
        <span className="price">${price}</span>
        <button className="add-to-cart">{t("add-to-cart")}</button>
      </div>
    </div>
  );
};
