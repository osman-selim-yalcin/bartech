import Body from "../components/body";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
