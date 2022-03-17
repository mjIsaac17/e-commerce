import styled from 'styled-components';
import { popularProducts } from '../data/products';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
