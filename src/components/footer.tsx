const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#FFD700] p-4">
      <div className="container mx-auto text-center">
        <p>İletişim: example@example.com | 0123 456 78 90</p>
        <a
          href="https://instagram.com/yourprofile"
          className="text-[#FFD700] hover:text-yellow-200"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
