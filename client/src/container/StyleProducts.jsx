import styled from "styled-components";
import { PopularProducts } from "./data";
import StyleProduct from "./StyleProduct";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #e5e5e5;
`;

const Products = () => {
  return (
    <Container>
      {PopularProducts.map((item) => (
        <StyleProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;