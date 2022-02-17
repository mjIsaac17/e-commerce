import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5), hsla(0, 0%, 100%, 0.5)),
    url('https://assets.vogue.com/photos/5c1a9399a2dafc2d479ee96a/master/w_1600%2Cc_limit/03-new-minimalism-street-style-trends.jpg')
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 40%;
  ${mobile({ width: '70%' })}
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0 0;
  min-width: 40%;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  width: 40%;

  &:hover {
    background-color: darkslategray;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='Name' />
          <Input placeholder='Last name' />
          <Input placeholder='Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
