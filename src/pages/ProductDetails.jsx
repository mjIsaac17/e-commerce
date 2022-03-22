import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Spinner from '../components/Spinner';
import { publicRequest } from '../helpers/axiosRequests';
import { addProduct } from '../redux/reducers/cartReducer';
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
  max-height: 90vh;
  object-fit: cover;
  max-width: 100%;
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
  padding: 10px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Selected product details
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const handleAmount = (type) => {
    if (type === 'add') setAmount(amount + 1);
    else amount > 1 && setAmount(amount - 1);
  };

  const handleAdd = () => {
    console.log('add to cart');
    dispatch(
      addProduct({
        product: {
          ...product,
          amount,
          color,
          size
        },
        price: product.price * amount
      })
    );
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resp = await publicRequest('get', `products/${id}`);
        if (resp.product) setProduct(resp.product);
      } catch (error) {}
      setLoading(false);
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ImageContainer>
              <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>$ {product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {product.color.map((color) => (
                    <FilterColor
                      key={color}
                      color={color}
                      onClick={() => setColor(color)}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize onChange={(e) => setSize(e.target.value)}>
                    <FilterSizeOption>Select</FilterSizeOption>
                    {product.size.map((size) => (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAmount('reduce')}
                  />
                  <Amount>{amount}</Amount>
                  <Add
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAmount('add')}
                  />
                </AmountContainer>
                <Button onClick={handleAdd}>ADD TO CAR</Button>
              </AddContainer>
            </InfoContainer>
          </>
        )}
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;
