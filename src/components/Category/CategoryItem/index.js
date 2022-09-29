import React from "react";
import { Container, CategoryImage } from "./styled";

export default ({ id, title, img, isActive, handleOnClick }) => {
  const handleClick = () => {
    handleOnClick(id);
  };

  return (
    <Container
      data-tip={title}
      data-for="tip-top"
      isActive={isActive}
      onClick={handleClick}
    >
      <CategoryImage src={img} />
    </Container>
  );
};
