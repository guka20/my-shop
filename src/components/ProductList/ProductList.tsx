import "./ProductList.scss";
import { ProductCard } from "src/components";
import { Link } from "react-router-dom";

type ProductListProps = {
  skip: number;
};

export const ProductList = ({ skip }: ProductListProps) => {
  return (
    <div className="product-list-layout">
      <div className="product-list-header">
        <span className="header">Products</span>
        <Link to="/products" className="view-all">
          View All
        </Link>
      </div>
      <div className="product-list">
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={1}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={2}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={3}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={4}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={5}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={6}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={7}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={8}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={9}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={10}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={11}
        />
        <ProductCard
          image="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          name="Headphones"
          description="An apple mobile which is nothing like apple"
          price={20}
          id={12}
        />
      </div>
    </div>
  );
};
