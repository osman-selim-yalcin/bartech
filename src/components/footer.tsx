const Footer = () => {
  return (
    // text-[#FFD700] is the color code for gold
    <footer className="bg-[#000000] text-white p-4">
      <div className="container mx-auto text-center">
        <p>example@example.com</p>
        <p>GSM : 0532 315 0744</p>
        <p>Tel: 0216 469 22 81</p>
        <p>Fax: 0216 469 22 82</p>
        <a
          href="https://instagram.com/yourprofile"
          className=" hover:text-yellow-200"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
