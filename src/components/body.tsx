import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const Body = () => {
  const images = [
    "/images/image0.jpeg",
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
    "/images/image9.jpeg",
  ];

  useEffect(() => {
    // Swiper'ı başlat
    new Swiper(".swiper-container", {
      slidesPerView: 3, // Aynı anda görünen slide sayısı
      spaceBetween: 10, // Slide'lar arası boşluk
      loop: true, // Sonsuz döngü
      navigation: {
        nextEl: ".swiper-button-next", // Sonraki buton
        prevEl: ".swiper-button-prev", // Önceki buton
      },
      breakpoints: {
        // Duyarlı ayarlar
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className="container mx-auto p-4 bg-background">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#000000]">Galeri</h2>
        <div className="swiper-container w-full max-w-full overflow-hidden">
          <div className="swiper-wrapper">
            {images.map((img, index) => (
              <div key={index} className="swiper-slide aspect-[16/9]">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
          {/* Navigasyon butonları */}
          {/* <div className="swiper-button-next text-[#FFD700]"></div>
          <div className="swiper-button-prev text-[#FFD700]"></div> */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#000000]">Referanslar</h2>
        <p className="text-[#000000]">Referanslar burada listelenecek.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-[#000000]">Hakkımızda</h2>
        <p className="text-[#000000]">
          Hakkımızda bilgileri burada yer alacak.
        </p>
      </section>
    </div>
  );
};

export default Body;
