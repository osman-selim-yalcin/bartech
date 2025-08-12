import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const HomePage = () => {
  const swiperRef = useRef<Swiper | null>(null);

  const images = [
    "/images/image0.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image6.jpeg",
  ];

  const logos = [
    "/logos/ford.png",
    "/logos/arcelik.png",
    "/logos/tofaş.png",
    "/logos/iett.png",
    "/logos/toyota.png",
  ];

  useEffect(() => {
    swiperRef.current = new Swiper(".hero-swiper", {
      modules: [Autoplay, Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 700,
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        1024: { slidesPerView: 1, spaceBetween: 10 },
      },
    });

    return () => {
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, []);

  return (
    <main className="font-poppins bg-white text-black">
      {/* HERO */}
      <section className="relative">
        <div className="hero-swiper w-full h-[70vh] md:h-[80vh] overflow-hidden">
          <div className="swiper-wrapper">
            {images.map((img, i) => (
              <div className="swiper-slide relative" key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev !text-white !left-4"></div>
          <div className="swiper-button-next !text-white !right-4"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-sm max-w-3xl">
              Otomatik Kapı & Bariyer Sistemlerinde Güven ve Dayanıklılık
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl">
              1995'ten beri yenilikçi çözümler, hızlı servis ve güçlü
              referanslarla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* NEDEN BARTECH */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center">
          Neden <span className="text-[#FFD700]">BARTECH</span>?
        </h2>
        <div className="w-32 h-1.5 bg-[#FFD700] mx-auto mt-3 mb-8"></div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Sağlam Üretim</h3>
            <p className="text-gray-600 mt-2">
              Yoğun kullanıma dayanıklı, uzun ömürlü bariyer ve kapı sistemleri.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Hızlı Servis</h3>
            <p className="text-gray-600 mt-2">
              Türkiye genelinde kurulum ve servis desteği.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Uygun Maliyet</h3>
            <p className="text-gray-600 mt-2">
              İhtiyacınıza göre ölçeklenebilir çözümler.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center">İş Ortaklarımız</h2>
          <div className="w-32 h-1.5 bg-[#FFD700] mx-auto mt-3 mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-auto object-contain opacity-80 grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl container mx-auto py-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-[#222222]">Hakkımızda</h2>
          <div className="w-32 h-1.5 bg-[#FFD700] mx-auto mb-3"></div>{" "}
          <p className="text-[#333333] mb-4 font-medium">
            1995 yılından bu yana otomatik kapı sektöründe uzmanlaşan ekibimiz,
            özellikle bariyer üretimi alanındaki deneyimini 2003 yılında BARTECH
            çatısı altında birleştirerek güçlü bir marka haline gelmiştir.
          </p>
          <p className="text-[#333333] mb-4 font-medium">
            15 yılı aşkın tecrübemizle, müşteri memnuniyetini her zaman ön
            planda tutarak sektöre değer katan yenilikçi ve güvenilir çözümler
            sunuyoruz.
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
        </div>
      </section>

      {/* ABOUT */}
      {/* <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center text-center">
          <div>
            <div className="mb-6">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-3">Hakkımızda</h2>
                <div className="w-24 h-1.5 bg-[#FFD700]"></div>
              </div>
            </div>

            <p className="text-[#333333] mb-4 font-medium">
              1995 yılından bu yana otomatik kapı sektöründe uzmanlaşan
              ekibimiz, özellikle bariyer üretimi alanındaki deneyimini 2003
              yılında BARTECH çatısı altında birleştirerek güçlü bir marka
              haline gelmiştir.
            </p>
            <p className="text-[#333333] mb-4 font-medium">
              15 yılı aşkın tecrübemizle, müşteri memnuniyetini her zaman ön
              planda tutarak sektöre değer katan yenilikçi ve güvenilir çözümler
              sunuyoruz.
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
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/image2.jpeg"
              alt="BARTECH"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HomePage;
