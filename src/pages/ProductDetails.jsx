import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 90vh;
  object-fit: cover;
  width: 100%;
  ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  align-items: center;
  display: flex;
`;

const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 50%;
  margin: 0 5px;
  height: 20px;
  width: 20px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: 700;
`;

const Amount = styled.span`
  align-items: center;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 5px;
  width: 30px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
  padding: 15px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetails = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImageContainer>
        <InfoContainer>
          <Title>Product name</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae
            animi fugit amet obcaecati accusantium asperiores quisquam, qui sit
            ea! Molestias repellat magnam minus harum sit aut iste consequatur.
            Minus!
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkBlue' />
              <FilterColor color='red' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <Add style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button>ADD TO CAR</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;
