import { FaInstagram } from "react-icons/fa"; // Instagram ikonu

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white py-8">
      <div className="container mx-auto">
        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div>
            <p className="font-semibold text-[#FFD700]">E-Posta</p>
            <p>example@example.com</p>
          </div>
          <div>
            <p className="font-semibold text-[#FFD700]">Telefon</p>
            <p>GSM: 0532 315 0744</p>
            <p>Tel: 0216 469 22 81</p>
            <p>Fax: 0216 469 22 82</p>
          </div>
          <div>
            <p className="font-semibold text-[#FFD700]">Sosyal Medya</p>
            <a
              href="https://instagram.com/yourprofile"
              className="flex items-center justify-center hover:text-[#FFD700] transition-colors"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright Bilgisi */}
        <div className="border-t border-[#333333] pt-4 text-center">
          <p className="text-sm text-[#888888]">
            © {currentYear} BARTECH. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
