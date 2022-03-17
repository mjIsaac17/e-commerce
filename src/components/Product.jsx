import Favorite from '@mui/icons-material/Favorite';
import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.5s ease;
  width: 100%;
  z-index: 3;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  background-color: #fafafa;
  border-radius: 50%;
  height: 75%;
  position: absolute;
  width: 85%;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 7px;
  transition: all 0.5s ease;
  width: 40px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Container>
        <Circle />
        <Image src={product.img} />
        <Info>
          <Icon>
            <ShoppingCart />
          </Icon>
          <Icon>
            <Search />
          </Icon>
          <Icon>
            <Favorite />
          </Icon>
        </Info>
      </Container>
    </Link>
  );
};

export default Product;
