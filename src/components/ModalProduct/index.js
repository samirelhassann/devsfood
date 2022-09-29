import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductButtons,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
} from "./styled";

const MAX_QUANTITY = 10;
const MIN_QUANTITY = 1;

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [data]);

  const handleCancelClick = () => {
    setStatus(false);
  };

  const handleChangeQuantity = (qt) => {
    if (qt > MAX_QUANTITY) setQuantity(MAX_QUANTITY);
    else if (qt < MIN_QUANTITY) setQuantity(MIN_QUANTITY);
    else setQuantity(qt);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        data,
        quantity,
      },
    });

    setStatus(false);
  };

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductIngredients>{data.name}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage
                onClick={() => handleChangeQuantity(quantity - 1)}
                src="/assets/minus.png"
              />
              <ProductQtText> {quantity}</ProductQtText>
              <ProductQtImage
                src="/assets/plus.png"
                onClick={() => handleChangeQuantity(quantity + 1)}
              />
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * quantity).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small onClick={handleCancelClick}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handleAddToCart}>
          Adiciona ao Carrinho
        </ProductButton>
      </ProductButtons>
    </Container>
  );
};
