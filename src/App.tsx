import { Outlet } from "react-router";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScroolToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
