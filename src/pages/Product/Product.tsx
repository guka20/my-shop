import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "src/Hooks";
import img from "src/assets/banner_img1.jpg";
import "./Product.scss";
import { useTranslation } from "react-i18next";
export const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: product, isLoading, isError } = useFetch(`products/${id}`);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>There is a problem</div>;
  }
  return (
    <div className="product-page">
      <button className="back" onClick={() => navigate("/")}>
        {t("back")}
      </button>
      <div className="image-and-texture">
        <img src={img} alt="image" className="image" />
        <ul className="texture">
          <li>
            <b>{t("title")}: </b>
            <br />
            {product.title}
          </li>
          <li>
            <b>{t("category")}: </b>
            <br />

            {product.category}
          </li>
          <li>
            <b>{t("description")}: </b>
            <br />
            {product.description}
          </li>
          <li className="price">
            <b>{t("price")}: </b>
            {product.price}$
          </li>
          <li> 
            <button className="add-to-cart">{t("add-to-cart")}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
