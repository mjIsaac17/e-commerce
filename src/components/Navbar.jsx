import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'

const Container = styled.div`
  height: 60px;
  background-color: #eb6f6f;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`
const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  align-items: center;
  border: 0.5px solid black;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`

const Logo = styled.h1`
  font-weight: bold;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
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
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartIcon color='action' />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar
