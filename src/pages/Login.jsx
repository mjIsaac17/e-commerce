import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import { login } from '../redux/apiRequests/userRequests';
import { loginSetError } from '../redux/reducers/userReducer';
import { mobile } from '../responsive';

const Container = styled.div`
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5), hsla(0, 0%, 100%, 0.5)),
    url('https://assets.vogue.com/photos/600f359c1a8b914c890bc33c/4:3/w_1600%2Cc_limit/Paris%2520Couture%2520SS21%2520day%25201%2520by%2520STYLEDUMONDE%2520Street%2520Style%2520Fashion%2520Photography_95A0173FullRes.jpg')
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
  width: 25%;
  ${mobile({ width: '70%' })}
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  min-width: 40%;
  padding: 10px;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 15px 20px;
  width: 40%;

  &:hover {
    background-color: darkslategray;
  }
`;

const Link = styled.a`
  cursor: pointer;
  margin: 5px 0;
  font-size: 15px;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const { formValues, handleInputChange } = useForm({
    username: '',
    password: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) login(dispatch, formValues);
  };

  const isFormValid = () => {
    if (
      formValues.username.trim() === '' ||
      formValues.password.trim() === ''
    ) {
      dispatch(loginSetError('All fields are required'));
      return false;
    }
    return true;
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder='Username'
            name='username'
            onChange={handleInputChange}
          />
          <Input
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
            type='password'
          />
          {error !== '' && <Error>{error}</Error>}
          <Button>Login</Button>
          <Link>Do not you remember your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
