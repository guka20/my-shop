import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <hr style={{ width: "100%", height: "1px", background: "black" }} />
      <Outlet />
      <Footer />
    </div>
  );
};
