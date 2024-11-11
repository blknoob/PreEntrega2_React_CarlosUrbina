import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="flex flex-col max-w-64 p-4 bg-gray-200 shadow-lg rounded-lg m-6">
      <img
        src={prod.thumbnail}
        alt={prod.title}
        className="size-full object-cover rounded-t-lg" 
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {prod.title}
        </h2>
        <p className="mt-2 text-gray-700 text-lg">${prod.price}</p>

        <div className="flex flex-col space-y-2 mt-4">
          <button className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
            Comprar ahora
          </button>
          <button className="w-full px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
            Agregar al carrito
          </button>
          <Link
            className="w-full px-4 py-2 text-center bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors"
            to={`/detail/${prod.id}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
