import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div`
  height: 60px;
  background-color: #c9e4f6;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({ padding: '10px 0' })}
`;
const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
  align-items: center;
  border: 0.5px solid black;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: '50px' })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '15px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search' />
              <SearchIcon style={{ fontSize: '20px' }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Web E-Commerce</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign in</MenuItem>
            <MenuItem>
              <Badge badgeContent={cartState.quantity} color='primary'>
                <ShoppingCartIcon color='action' />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
