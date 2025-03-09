const Navbar = () => {
  return (
    <nav className="bg-[#FFD700] text-[#000000] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-lg font-bold">Logo</div>
        <div className="space-x-4">
          <a href="/" className=" hover:text-gray-700">
            Anasayfa
          </a>
          <a href="/about" className=" hover:text-gray-700">
            Hakkımızda
          </a>
          <a href="/references" className=" hover:text-gray-700">
            Referanslar
          </a>
        </div>
        <a
          href="https://wa.me/yourphonenumber"
          className=" hover:text-gray-700"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
