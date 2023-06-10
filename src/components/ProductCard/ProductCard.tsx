import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
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
    <div className="product-card">
      <img src={image} alt="Card item" width="100%" height="170px" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <span>Price</span> <span>{price}</span>
      </div>
      <div className="buttons">
        <Link to={`/${id}`}>
          <button>View Page</button>
        </Link>
        <button>
          <BsFillCartPlusFill />
        </button>
      </div>
    </div>
  );
};
