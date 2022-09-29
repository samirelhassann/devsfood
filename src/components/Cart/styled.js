import styled from "styled-components";

export const CartArea = styled.div`
  background-color: #136713;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 30px;
`;

export const CartBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  color: #fff;
`;

export const CartHeader = styled.div`
  width: 290px;
  height: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CartText = styled.div`
  color: #fff;
  font-size: 17px;
  flex: 1;
`;

export const ProductsArea = styled.div``;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProducItem = styled.div`
  display: flex;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
  border-radius: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 13px;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductQtIcon = styled.img`
  width: 13px;
  height:auto;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  margin: 0px 7px;
  font-size: 13px;
  font-weight: bold;
`;
