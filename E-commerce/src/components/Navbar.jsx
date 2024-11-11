import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/category/accesorios+bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Accesorios Bicicleta
          </Link>
        </li>
        <li>
          <Link
            to="/category/vestimenta+bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Vestimenta Bicicleta
          </Link>
        </li>
        <li>
          <Link
            to="/category/componentes+bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Componentes Bicicleta
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

