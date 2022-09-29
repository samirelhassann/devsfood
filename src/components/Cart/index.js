import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CartArea,
  CartBody,
  CartHeader,
  CartIcon,
  CartText,
  ProductsArea,
  ProductName,
  ProductInfoArea,
  ProducItem,
  ProductPhoto,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText,
} from "./styled";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const [detailsOpened, setDetailsOpened] = useState(false);

  const handleCartLink = () => {
    setDetailsOpened(!detailsOpened);
  };

  const handleChangeQuantity = (id, quantity) => {
    dispatch({
      type: "CHANGE_PRODUCT_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };

  return (
    <CartArea>
      <CartHeader onClick={handleCartLink}>
        <CartIcon src="/assets/cart.png" />
        <CartText>
          Carrinho <b>{products.length} item(s)</b>
        </CartText>
        {detailsOpened && products.length > 0 && <CartIcon src="/assets/down.png" />}
      </CartHeader>
      <CartBody show={detailsOpened}>
        <ProductsArea>
          {products.map((product, index) => (
            <ProducItem key={index}>
              <ProductPhoto src={product.image} />
              <ProductInfoArea>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>
                  R$ {(product.price * product.quantity).toFixed(2)}
                </ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon
                  src="/assets/minus.png"
                  onClick={() =>
                    handleChangeQuantity(product.id, product.quantity - 1)
                  }
                />
                <ProductQtText>{product.quantity}</ProductQtText>
                <ProductQtIcon
                  src="/assets/plus.png"
                  onClick={() =>
                    handleChangeQuantity(product.id, product.quantity + 1)
                  }
                />
              </ProductQuantityArea>
            </ProducItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
};
