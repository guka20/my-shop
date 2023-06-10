import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-teritory">
        <div className="company-details">
          <h2>Company name</h2>
          <hr />
          <p>
            This is B2B website where you can buy any type of product whatever
            you want. Buy the best products with the best prices
          </p>
        </div>
        <div className="socials">
          <h2>Socials</h2>
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
          <h2>Contact</h2>
          <hr />
          <p>Georgia, Batumi.</p>
          <p>info@example.com</p>
          <p>+995 598273500</p>
        </div>
      </div>
    </footer>
  );
};
