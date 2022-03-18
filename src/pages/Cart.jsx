import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  border: ${(props) => props.type === 'filled' && 'none'};
  color: ${(props) => props.type === 'filled' && 'white'};
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  flex: 1;
  height: 50vh;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  font-size: ${(props) => props.type === 'total' && '24px'};
  font-weight: ${(props) => props.type === 'total' && '500'};
  justify-content: space-between;
  margin: 30px 0;
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  width: 100%;
`;

const Cart = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(quantity)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {products.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.amount}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.amount}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}

            {/* <Product>
              <ProductDetail>
                <Image src='https://www.seekpng.com/png/full/25-251432_running-shoes-png-transparent-image-nike-running-shoes.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> Nike shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123456
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 9.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product> */}
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
