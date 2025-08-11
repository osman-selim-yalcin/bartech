const products = [
  {
    id: 1,
    title: "Ürün 1",
    description:
      "Bu, ürün 1'in açıklamasıdır. Ürünün detayları ve özellikleri burada yer alabilir.",
    imageUrl: "/images/image4.jpeg",
  },
  {
    id: 2,
    title: "Ürün 2",
    description:
      "Bu, ürün 2'nin açıklamasıdır. Ürünün detayları ve özellikleri burada yer alabilir.",
    imageUrl: "/images/image5.jpeg",
  },
  // Daha fazla ürün ekleyebilirsiniz
];

const Products = () => {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Ürünler */}
      <div className="container mx-auto px-4 py-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-12`}
          >
            {/* Ürün Resmi */}
            <div className="md:w-1/2">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto rounded shadow-lg"
              />
            </div>

            {/* Ürün Yazısı */}
            <div className="md:w-1/2 md:px-8 mt-4 md:mt-0">
              <h2 className="text-2xl font-bold text-[#FFD700]">
                {product.title}
              </h2>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
