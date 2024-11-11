import { useEffect, useState } from "react";
import { producMeliId } from "../apiMeli";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContain = () => {
  const [detail, setDetail] = useState(null);
  const { detalId } = useParams();

  useEffect(() => {
    producMeliId(detalId).then((resultadiId) => {
      setDetail(resultadiId);
    });
  }, [detalId]);
 

  return <div>{detail && <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContain;
