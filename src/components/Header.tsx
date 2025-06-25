import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-farm-blue-green rounded-full flex items-center justify-center">
              <Icon name="Sprout" className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-montserrat font-bold text-xl text-farm-blue-green">
              ГОСАГРОПРОДУКТ
            </h1>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-farm-gray hover:text-farm-blue-green transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-farm-gray hover:text-farm-blue-green transition-colors"
            >
              Подписка
            </a>
            <a
              href="#"
              className="text-farm-gray hover:text-farm-blue-green transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-farm-gray hover:text-farm-blue-green transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Корзина и кнопки */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-farm-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="py-2 text-farm-gray hover:text-farm-blue-green transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="py-2 text-farm-gray hover:text-farm-blue-green transition-colors"
              >
                Подписка
              </a>
              <a
                href="#"
                className="py-2 text-farm-gray hover:text-farm-blue-green transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="py-2 text-farm-gray hover:text-farm-blue-green transition-colors"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
