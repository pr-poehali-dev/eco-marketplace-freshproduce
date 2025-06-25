import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SubscriptionPreview = () => {
  const subscriptionBoxes = [
    {
      name: "Семейный",
      price: "2 500 руб/неделя",
      description: "Овощи, фрукты и зелень для семьи из 4 человек",
      items: ["5 кг овощей", "2 кг фруктов", "200 г зелени", "Сезонные ягоды"],
      color: "border-farm-blue-green",
    },
    {
      name: "Фитнес",
      price: "1 800 руб/неделя",
      description: "Идеальный набор для здорового питания",
      items: ["Листовая зелень", "Авокадо", "Ягоды", "Орехи и семена"],
      color: "border-farm-green",
    },
    {
      name: "Сезонный микс",
      price: "1 200 руб/неделя",
      description: "Лучшие сезонные продукты каждую неделю",
      items: ["Сезонные овощи", "Сезонные фрукты", "Травы", "Сюрприз недели"],
      color: "border-farm-beige",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-farm-gray mb-4">
            Удобные подписки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Настройте индивидуальную доставку и получайте свежие продукты
            регулярно
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionBoxes.map((box, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg farm-card-hover border-2 ${box.color}`}
            >
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-bold text-xl text-farm-gray mb-2">
                  {box.name}
                </h3>
                <div className="text-2xl font-bold text-farm-blue-green mb-2">
                  {box.price}
                </div>
                <p className="text-gray-600 text-sm">{box.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {box.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <Icon name="Check" className="w-5 h-5 text-farm-green" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full farm-button-primary">
                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                Выбрать подписку
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
            <Icon
              name="Settings"
              className="w-8 h-8 text-farm-beige mx-auto mb-4"
            />
            <h3 className="font-montserrat font-semibold text-lg text-farm-gray mb-2">
              Гибкие настройки
            </h3>
            <p className="text-gray-600 text-sm">
              Меняйте дни доставки, состав корзины и ставьте подписку на паузу в
              любое время
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPreview;
