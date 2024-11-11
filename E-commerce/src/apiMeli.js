export const productMeLi = async () => {
  const resp = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=bicicletas"
  );
  const datos = await resp.json();
  return datos.results;
};

export const producMeliId = async (id) => {
  const respId = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productId = await respId.json();
  return productId;
};

export const producMeliCategory = async (categoryId) => {
  const respCategory = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}`
  );
  const datosCategory = await respCategory.json();
  const dataCategory = datosCategory.results;

  return dataCategory;
};

