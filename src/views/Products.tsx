const products = [
  {
    id: 1,
    title: "Ürün 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc non porta placerat, nunc quam varius risus, sit amet luctus nulla nisl sed libero. Curabitur ac orci quis tortor sodales ultrices.",
    imageUrl: "/images/image4.jpeg",
  },
  {
    id: 2,
    title: "Ürün 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac feugiat arcu. Integer luctus sapien sed arcu laoreet, ac fermentum augue fermentum. Pellentesque habitant morbi tristique senectus et netus.",
    imageUrl: "/images/image5.jpeg",
  },
  {
    id: 3,
    title: "Ürün 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis, elit vitae pharetra hendrerit, magna ligula vehicula nunc, id elementum eros magna ut ligula.",
    imageUrl: "/images/image6.jpeg",
  },
];

const Products = () => {
  return (
    <div className="font-poppins bg-white text-black">
      {/* Ürünler */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#FFD700]">Ürün</span> Listemiz
        </h1>

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-16`}
          >
            {/* Ürün Resmi */}
            <div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Ürün Yazısı */}
            <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-[#FFD700] border-b-2 border-[#FFD700] inline-block pb-1">
                {product.title}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
