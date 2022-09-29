import React from "react";
import {
  Container,
  ProductPhotoArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductDetails,
  ProdutButtonArea,
  ProductButton,
} from "./styled";

export default ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <Container onClick={handleClick}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R$ {parseFloat(data.price).toFixed(2)}</ProductPrice>
        <ProductDetails>{data.ingredients}</ProductDetails>
      </ProductInfoArea>
      <ProdutButtonArea>
        <ProductButton src="/assets/next.png" />
      </ProdutButtonArea>
    </Container>
  );
};
