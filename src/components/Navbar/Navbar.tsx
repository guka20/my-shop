import "./Navbar.scss";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useFetch } from "src/Hooks";
import { CategoryContext } from "src/context/CategoryContext";
import { SearchContext } from "src/context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import enTranslation from "src/locales/en.json";
import geoTranslation from "src/locales/geo.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    geo: { translation: geoTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
const changeLanguage = (lang: string) => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      geo: { translation: geoTranslation },
    },
    lng: lang,
    fallbackLng: lang,
    interpolation: { escapeValue: false },
  });
};

export const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setCategory } = useContext(CategoryContext);
  const { setSearch } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const { data: categories } = useFetch("products/categories");
  const [lang, setLang] = useState("ENGLISH");
  const [dropDown, setDropDown] = useState(false);

  const handleSearchClick = () => {
    setSearchValue("");
    setSearch(searchValue);
  };

  const handleChangeLanguage = (langText: string, langName: string) => {
    changeLanguage(langName);
    setLang(langText);
    setDropDown(false);
  };
  return (
    <>
      <nav className="nav-bar">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <span>PIXORUS</span>
          <span>Customer satisfaction</span>
        </div>
        <div className="extra-buttons">
          <button
            className="lang"
            onClick={() => setDropDown(!dropDown)}
            onBlur={() => setDropDown(false)}
          >
            <span>
              {lang} <RiArrowDownSFill />
            </span>
            <ul className={dropDown ? "droped-down" : "drop-down"}>
              <li onClick={() => handleChangeLanguage("ქართული", "geo")}>
                ქართული
              </li>
              <li onClick={() => handleChangeLanguage("ENGLISH", "en")}>
                ENGLISH
              </li>
            </ul>
          </button>
          <button className="cart">
            <AiOutlineShoppingCart />
            (0)
          </button>
        </div>
      </nav>
      <hr style={{ width: "100%", height: "1px", backgroundColor: "black" }} />
      <nav className="nav-bar">
        <div className="search-place">
          <input
            type="text"
            placeholder={t("nav-bar.search-here") + "..."}
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search-button" onClick={handleSearchClick}>
            <BsSearch />
          </button>
        </div>
        <div className="left-nav">
          <select
            id="category"
            className="category-list"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">{t("nav-bar.all")}</option>
            {categories &&
              categories?.map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          <div className="login-signup">
            <FaUserAlt /> <Link to="/login">{t("nav-bar.login-signup")}</Link>
          </div>
          <Link to="contact" className="contact-us">
            {t("nav-bar.contactUs")}
          </Link>
        </div>
      </nav>
    </>
  );
};
