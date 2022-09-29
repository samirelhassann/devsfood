import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./styled";

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search !== "");

  const handleInputBlur = () => {
    if (search === "") setInputActive(false);
  };

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        type="text"
        placeholder="Type a product..."
        value={search}
        onChange={handleChange}
        active={inputActive}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
    </Container>
  );
};
