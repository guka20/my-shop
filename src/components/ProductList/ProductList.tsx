import "./ProductList.scss";
import { ProductCard } from "src/components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
type ProductListProps = {
  data: [
    {
      title: string;
      description: string;
      thumbnail: string;
      price: number;
      id: number;
    }
  ];
};

export const ProductList = ({ data }: ProductListProps) => {
  const { t } = useTranslation();

  return (
    <div className="product-list-layout">
      <div className="product-list-header">
        <span className="header">{t("products")}</span>
        <Link to="/products" className="view-all">
          {t("viewAll")}
        </Link>
      </div>
      <div className="product-list">
        {data?.map((l) => (
          <ProductCard
            key={l.id}
            image={l.thumbnail}
            name={l.title}
            description={l.description}
            price={l.price}
            id={l.id}
          />
        ))}
      </div>
    </div>
  );
};
