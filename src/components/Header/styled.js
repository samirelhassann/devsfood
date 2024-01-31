import styled from "styled-components";

import searchImage from "../../assets/search.png";

export const Container = styled.div`
  background-color: #136713;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: auto;
  height: 70px;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${(props) => (props.active ? "300px" : "0px")};
  height: 50px;
  background-color: #fff;
  background-image: url('${searchImage}');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  cursor: pointer;
  transition: all ease .3s;
  font-size: 15px;

  &:focus{
    cursor: text;
  }
`;
