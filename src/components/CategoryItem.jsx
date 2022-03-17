import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 50vh;
  justify-content: center;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
  max-width: 100%;
  ${mobile({ height: '100%', width: '60%' })}
`;
const Info = styled.div`
  background-color: #00000032;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;
const Button = styled.button`
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border: none;
  padding: 10px;
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Link to={`/products/${category.name}`}>
          <Button>Shop now!</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
