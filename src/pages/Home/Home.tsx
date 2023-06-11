import { ProductList } from "src/components";
import { Carousel } from "./components";
import { useFetch } from "src/Hooks";
import { useContext } from "react";
import "./Home.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { CategoryContext } from "src/context/CategoryContext";
import { useTranslation } from "react-i18next";
Aos.init({
  duration: 300,
  easing: "linear",
});
export const Home = () => {
  const { t } = useTranslation();

  const { category } = useContext(CategoryContext);
  const endPoint =
    category.toLowerCase() === "all" || category.toLowerCase() === ""
      ? "products"
      : `products/category/${category}`;
  const { isLoading, isError, data, error } = useFetch(endPoint);
  console.log(category.toLowerCase());

  const handleScroll = () => {
    console.log(window);
    window.scrollTo(0, 0);
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{JSON.stringify(error)}</div>;
  return (
    <div>
      <Carousel />
      <ProductList data={data.products} />
      <button className="scroll-top" onClick={handleScroll} data-aos="zoom-in">
        {t("scroll-to-top")}
      </button>
    </div>
  );
};
