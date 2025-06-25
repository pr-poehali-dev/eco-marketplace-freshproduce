import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GiftCertificates = () => {
  const certificates = [
    { value: "1 000 руб", popular: false },
    { value: "2 500 руб", popular: true },
    { value: "5 000 руб", popular: false },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-farm-gray mb-6">
              Подарочные сертификаты
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Подарите близким возможность наслаждаться свежими фермерскими
              продуктами. Красивый дизайн сертификата и мгновенная доставка на
              email.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={`relative border-2 rounded-lg px-6 py-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    cert.popular
                      ? "border-farm-blue-green bg-farm-blue-green/5"
                      : "border-gray-200 hover:border-farm-beige"
                  }`}
                >
                  {cert.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-farm-green text-white text-xs px-2 py-1 rounded-full">
                      Популярный
                    </div>
                  )}
                  <div className="font-montserrat font-semibold text-farm-gray">
                    {cert.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="w-5 h-5 text-farm-green" />
                <span className="text-gray-700">
                  Мгновенная доставка на email
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" className="w-5 h-5 text-farm-green" />
                <span className="text-gray-700">Срок действия — 1 год</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" className="w-5 h-5 text-farm-green" />
                <span className="text-gray-700">Персональное поздравление</span>
              </div>
            </div>

            <Button className="farm-button-primary text-lg">
              <Icon name="Gift" className="w-5 h-5 mr-2" />
              Купить сертификат
            </Button>
          </div>

          {/* Right content - Certificate preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-farm-blue-green to-farm-beige p-8 rounded-2xl shadow-2xl text-white">
              <div className="text-center mb-6">
                <Icon name="Award" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-2xl mb-2">
                  Подарочный сертификат
                </h3>
                <p className="text-sm opacity-90">ГОСАГРОПРОДУКТ</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">2 500 ₽</div>
                <p className="text-sm opacity-90">
                  на покупку фермерских продуктов
                </p>
              </div>

              <div className="border-t border-white/20 pt-4 text-center">
                <p className="text-xs opacity-75">
                  Действителен до: 31.12.2025
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-farm-green rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-farm-beige rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCertificates;
