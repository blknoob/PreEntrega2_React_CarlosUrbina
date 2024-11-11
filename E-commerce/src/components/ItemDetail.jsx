const ItemDetail = ({ detail }) => {
  return (
    <div className="flex flex-col lg:flex-row max-w-4xl  m-20 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="lg:w-1/2">
        <img
          src={detail.thumbnail}
          alt={detail.title}
          className="w-fit h-72 object-contain rounded-md shadow-lg"
        />
      </div>

      <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 mt-4 lg:mt-0">
          {detail.title}
        </h1>
        <p className="text-xl text-gray-700 font-semibold mt-2">
          ${detail.price}
        </p>
        <p className="text-gray-600 mt-4">{detail.description}</p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
          <button className="w-full sm:w-auto px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors mb-4 sm:mb-0">
            Agregar al carrito
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
