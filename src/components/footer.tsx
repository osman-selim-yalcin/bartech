import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa"; // İkonlar

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("west-bartech@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="bg-[#000000] text-white py-8">
      <div className="container mx-auto">
        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          {/* Adres */}
          <div>
            <p className="font-semibold text-[#FFD700]">Adres</p>
            <p>
              Kayışdağı Mah., Kartal Cd. Karaman Apt. No:122, <br />
              34755 Ataşehir/İstanbul
            </p>
          </div>

          {/* Telefon */}
          <div>
            <p className="font-semibold text-[#FFD700]">Telefon</p>
            <p>GSM: 0532 315 0744</p>
            <p>Tel: 0216 469 22 81</p>
            <p>Fax: 0216 469 22 82</p>
          </div>

          {/* Bize Ulaşın */}
          <div>
            <p className="font-semibold text-[#FFD700]">Bize Ulaşın</p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/westbartech"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 hover:text-[#FFD700] transition-colors mb-2"
            >
              <FaInstagram size={18} />
              Instagram
            </a>

            {/* Mail */}
            <button
              onClick={copyEmail}
              className={`flex items-center justify-center gap-2 hover:text-[#FFD700] transition-colors w-full ${
                copied ? "text-[#FFD700]" : ""
              }`}
            >
              <FaEnvelope size={18} />
              {copied ? "Kopyalandı!" : "Mail"}
            </button>
          </div>
        </div>

        {/* Copyright */}
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
