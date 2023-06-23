import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "src/Hooks";
import img from "src/assets/banner_img1.jpg";
import "./Product.scss";
export const Product = () => {
  const { id } = useParams();
  const { data: product } = useFetch(`products/${id}`);

  return (
    <div className="product-page">
      <div className="image-and-texture">
        <img src={img} alt="image" className="image" />
        <ul className="texture">
          <li>
            <b>Title: </b>
            {product.title}
          </li>
          <li>
            <b>Category: </b>
            {product.category}
          </li>
          <li>
            <b>Description: </b>
            {product.description}
          </li>
          <li className="price">
            <b>Price: </b>
            {product.price}
          </li>
          <li>
            <button className="add-to-cart">Add To Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
