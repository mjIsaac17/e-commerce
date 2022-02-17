import Send from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  align-items: center;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 50%;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  border: none;
  flex: 9;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
