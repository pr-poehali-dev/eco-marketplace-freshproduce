import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Клубника садовая",
      price: "450 руб/кг",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: true,
      isSeasonal: true,
    },
    {
      id: 2,
      name: "Томаты черри",
      price: "280 руб/кг",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: true,
      isSeasonal: false,
    },
    {
      id: 3,
      name: "Салат руккола",
      price: "180 руб/упак",
      image:
        "https://images.unsplash.com/photo-1622973585700-34b56e6e4f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: true,
      isSeasonal: false,
    },
    {
      id: 4,
      name: "Огурцы тепличные",
      price: "220 руб/кг",
      image:
        "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: false,
      isSeasonal: false,
    },
    {
      id: 5,
      name: "Морковь молодая",
      price: "160 руб/кг",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: true,
      isSeasonal: true,
    },
    {
      id: 6,
      name: "Зелень микс",
      price: "200 руб/упак",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isEco: true,
      isSeasonal: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-farm-gray mb-4">
            Популярные продукты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Самые свежие и качественные продукты от наших фермеров
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden farm-card-hover"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isEco && (
                    <span className="eco-badge flex items-center gap-1">
                      <Icon name="Leaf" className="w-3 h-3" />
                      ЭКО
                    </span>
                  )}
                  {product.isSeasonal && (
                    <span className="bg-farm-beige text-white text-xs font-semibold px-2 py-1 rounded-full">
                      СЕЗОННОЕ
                    </span>
                  )}
                </div>

                {/* Favorite button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Icon name="Heart" className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-farm-gray mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-farm-blue-green text-lg">
                    {product.price}
                  </span>

                  <Button className="farm-button-primary">
                    <Icon name="Plus" className="w-4 h-4 mr-1" />В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="farm-button-primary text-lg">
            <Icon name="Grid3x3" className="w-5 h-5 mr-2" />
            Все продукты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
