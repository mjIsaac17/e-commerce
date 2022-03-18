import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Spinner = ({ color = 'black', size = 150 }) => {
  return (
    <Container>
      <ScaleLoader color={color} size={size} loading={true} />
    </Container>
  );
};

export default Spinner;
