import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
