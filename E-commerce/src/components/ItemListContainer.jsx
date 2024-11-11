import { useEffect, useState } from "react";
import { productMeLi, producMeliCategory } from "../apiMeli";
import Itemlist from "./Itemlist";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [product, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const mostrarProductos = categoryId ? producMeliCategory : productMeLi;
    console.log("categoryId:", categoryId);

    mostrarProductos(categoryId).then((resultado) => {
      console.log("Resultado de la API:", resultado);
      setProducts(resultado);
    }).catch(error => {
      console.error('Error al obtener productos:', error);
    });
  }, [categoryId]);

  return (
    <div>
      <Itemlist product={product} />
    </div>
  );
};

export default ItemListContainer;
