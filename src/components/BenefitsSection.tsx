import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Award",
      title: "Эко-сертификация",
      description:
        "Все продукты проходят строгий контроль качества и имеют сертификаты органического происхождения.",
      color: "text-farm-green",
    },
    {
      icon: "Clock",
      title: "Доставка за 3 часа",
      description:
        "Собираем заказ утром и доставляем в течение 3 часов. Ваши продукты всегда свежие.",
      color: "text-farm-blue-green",
    },
    {
      icon: "CalendarDays",
      title: "Гибкий график",
      description:
        "Выбирайте удобные дни доставки, меняйте состав корзины и ставьте заказы на паузу.",
      color: "text-farm-beige",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-farm-gray mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о качестве продуктов и удобстве наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg farm-card-hover text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center ${benefit.color}`}
              >
                <Icon name={benefit.icon} className="w-8 h-8" />
              </div>

              <h3 className="font-montserrat font-semibold text-xl text-farm-gray mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
