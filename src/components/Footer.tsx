import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-farm-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-farm-beige rounded-full flex items-center justify-center">
                <Icon name="Sprout" className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-lg">
                ГОСАГРОПРОДУКТ
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Свежие фермерские продукты с доставкой по всему городу. Качество,
              проверенное временем.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Овощи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Фрукты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Ягоды
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Зелень
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Подписка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Подарочные сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-farm-beige transition-colors">
                  Корпоративным клиентам
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4" />
                <span>info@gosagro.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="w-4 h-4" />
                <span>Москва, ул. Фермерская, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ГОСАГРОПРОДУКТ. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-farm-beige transition-colors"
            >
              <Icon name="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-farm-beige transition-colors"
            >
              <Icon name="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-farm-beige transition-colors"
            >
              <Icon name="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
