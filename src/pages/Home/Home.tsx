import { ProductList } from "src/components";
import { Carousel } from "./components";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductList skip={0} />
    </div>
  );
};
