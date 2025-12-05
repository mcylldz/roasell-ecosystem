import React from 'react';
import { BRANDS } from '../../constants';

const Credibility: React.FC = () => {
  return (
    <section className="py-6 md:py-16 bg-roasell-black relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center mb-4 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold font-display mb-2 md:mb-3">
            8 Yıllık Deneyim ve <span className="text-roasell-gold">Dökümantasyon</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-base leading-relaxed hidden md:block">
            8 yıl önce kendi imkanlarımızla başladığımız e-ticaret yolculuğunda; Türkiye, Avrupa ve Amerika'da markalar kurduk.
            <span className="text-white font-semibold"> ARspar</span> ve <span className="text-white font-semibold">ARtonar</span> markalarımızla global devlerle iş birlikleri yaptık.
          </p>
          <p className="text-gray-400 text-xs leading-relaxed md:hidden">
            <span className="text-white font-semibold">ARspar</span> ve <span className="text-white font-semibold">ARtonar</span> markalarımızla 8 yıldır global devlerle iş birliği yapıyoruz.
          </p>
        </div>

        {/* Brand Logos - Tighter on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-70">
          {BRANDS.map((brand, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {brand.image ? (
                <img
                  src={brand.image}
                  alt={brand.name}
                  className={`${brand.className || 'h-8 md:h-12'} w-auto object-contain`}
                />
              ) : (
                <span className="text-base md:text-2xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300 font-display cursor-default">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;