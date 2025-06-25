import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="farm-hero-bg text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Свежесть с грядки —
              <span className="text-farm-beige"> в ваш дом!</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Фермерские продукты высочайшего качества с доставкой за 3 часа.
              Эко-сертифицированные овощи, ягоды и зелень прямо с полей.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="farm-button-primary text-lg">
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Выбрать продукты
              </Button>

              <Button className="farm-button-secondary text-lg">
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Оформить подписку
              </Button>
            </div>

            {/* Статистика */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-farm-beige">
                  1000+
                </div>
                <div className="text-sm text-blue-100">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-farm-beige">
                  24/7
                </div>
                <div className="text-sm text-blue-100">Свежие продукты</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-farm-beige">
                  3ч
                </div>
                <div className="text-sm text-blue-100">Доставка по городу</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Свежие овощи и фрукты"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Truck" className="w-5 h-5 text-farm-green" />
                <span className="text-sm font-semibold text-farm-gray">
                  Доставка за 3 часа
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" className="w-5 h-5 text-farm-green" />
                <span className="text-sm font-semibold text-farm-gray">
                  100% эко-продукты
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
