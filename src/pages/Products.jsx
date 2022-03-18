import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductList from '../components/ProductList';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0' })}
`;

const Select = styled.select`
  padding: 6px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0' })}
`;
const Option = styled.option``;

const Products = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);

  const handleFilters = (e) => {
    if (e.target.value !== '')
      setFilters({ ...filters, [e.target.name]: e.target.value });
    else {
      const newFilters = { ...filters };
      delete newFilters[e.target.name];
      setFilters(newFilters);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select name='color' defaultValue='Color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value=''>All</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' defaultValue='Size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option value=''>All</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select defaultValue='Newest' onChange={handleSort}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Products;
