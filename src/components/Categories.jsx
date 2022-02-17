import styled from 'styled-components';
import { categoryItems } from '../data/categories';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: '0', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categoryItems.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
