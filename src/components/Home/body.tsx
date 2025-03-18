import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const Body = () => {
  const images = [
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image0.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image6.jpeg",
  ];

  useEffect(() => {
    // Swiper'ı başlat
    new Swiper(".swiper-container", {
      slidesPerView: 1, // Aynı anda görünen slide sayısı
      spaceBetween: 10, // Slide'lar arası boşluk
      loop: true, // Sonsuz döngü
      navigation: {
        nextEl: ".swiper-button-next", // Sonraki buton
        prevEl: ".swiper-button-prev", // Önceki buton
      },
      breakpoints: {
        // Duyarlı ayarlar
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className=" p-4 bg-white">
      <section className="mb-4">
        <div className="swiper-container w-full max-w-full overflow-hidden h-[600px]">
          <div className="swiper-wrapper">
            {images.map((img, index) => (
              <div key={index} className="swiper-slide">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
          {/* Navigasyon butonları */}
          {/* <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10 text-[#FFD700] bg-black/50 p-5 rounded-full"></div>
          <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 text-[#FFD700] bg-black/50 p-5 rounded-full"></div> */}
        </div>
      </section>

      <section className="mb-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#000000]">
          İş Ortaklarımız
        </h2>
        <div className="w-16 h-1 bg-[#FFD700] mx-auto mb-3"></div> {/* Çizgi */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src="/logos/ford.png" alt="ford" className="h-30 w-30" />
          <img src="/logos/arcelik.png" alt="arcelik" className="h-30 w-30" />
          <img src="/logos/tofaş.png" alt="tofas" className="h-30 w-30" />
          <img src="/logos/iett.png" alt="iett" className="h-30 w-30" />
          <img src="/logos/toyota.png" alt="toyota" className="h-30 w-30" />
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto px-4 py-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-[#222222]">Hakkımızda</h2>
        <div className="w-16 h-1 bg-[#FFD700] mx-auto mb-3"></div> {/* Çizgi */}
        <p className="text-[#333333] mb-4 font-medium">
          1995 yılından bu yana otomatik kapı sektöründe uzmanlaşan ekibimiz,
          özellikle bariyer üretimi alanındaki deneyimini 2003 yılında BARTECH
          çatısı altında birleştirerek güçlü bir marka haline gelmiştir.
        </p>
        <p className="text-[#333333] mb-4 font-medium">
          15 yılı aşkın tecrübemizle, müşteri memnuniyetini her zaman ön planda
          tutarak sektöre değer katan yenilikçi ve güvenilir çözümler sunuyoruz.
        </p>
        <p className="text-[#333333] mb-4 font-medium">
          Bizi tercih eden iş ortaklarımızın memnuniyeti ve uzun süreli iş
          birliklerimiz, başarımızın en büyük kanıtıdır.
        </p>
        <p className="text-[#333333] font-medium">
          BARTECH olarak, kaliteli hizmet anlayışımızı sürekli geliştirerek
          otomatik kapı ve bariyer sistemlerinde lider konumda olmayı
          hedefliyoruz.
        </p>
      </section>
    </div>
  );
};

export default Body;
