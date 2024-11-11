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
            to="/category/bicicletas+ruta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Bicicletas de Ruta
          </Link>
        </li>
        <li>
          <Link
            to="/category/bicicleta+montana"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Bicicletas de Montaña
          </Link>
        </li>
        <li>
          <Link
            to="/category/bicicleta+paseo"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Bicicletas de Paseo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

