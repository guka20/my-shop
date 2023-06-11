import "./Footer.scss";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-teritory">
        <div className="company-details">
          <h2>{t("footer.company-name")}</h2>
          <hr />
          <p>{t("footer.company-text")}</p>
        </div>
        <div className="socials">
          <h2>{t("footer.socials")}</h2>
          <hr />
          <p>
            <a href="https://www.facebook.com/" target="_blank">
              Facebook
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/" target="_blank">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/" target="_blank">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://twitter.com/" target="_blank">
              Twitter
            </a>
          </p>
        </div>
        <div className="contact">
          <h2>{t("footer.contact")}</h2>
          <hr />
          <p>{t("footer.address")}</p>
          <p>info@example.com</p>
          <p>+995 598273500</p>
        </div>
      </div>
    </footer>
  );
};
