import { Outlet } from "react-router";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
