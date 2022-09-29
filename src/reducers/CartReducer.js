const initialState = {
  products: [],
  address: [],
  discount: 0,
  deliveryTax: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let products = [...state.products];
      const hasProduct = products.some(
        (product) => product.id === action.payload.data.id
      );

      if (hasProduct)
        products = products.map((p) => {
          if (p.id === action.payload.data.id)
            p.quantity = p.quantity + { ...action }.payload.quantity;

          return p;
        });
      else
        products.push({
          ...action.payload.data,
          quantity: { ...action }.payload.quantity,
        });

      return { ...state, products };

    case "CHANGE_PRODUCT_QUANTITY":
      return {
        ...state,
        products: [...state.products]
          .map((product) => {
            if (product.id === action.payload.id)
              product.quantity = action.payload.quantity;

            return product;
          })
          .filter((product) => product.quantity > 0),
      };

    default:
      return { ...state };
  }
};
