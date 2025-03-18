import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#FFD700] text-[#000000] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg bg-secondary font-bold ">
          BARTECH
        </Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:text-gray-700">
            Ürünler
          </Link>
          <a
            href="https://wa.me/905323150744"
            className=" hover:text-gray-700"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
