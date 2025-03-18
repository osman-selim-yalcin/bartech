import Body from "../components/Home/body";
import Footer from "../components/Home/footer";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
