import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publicRequest } from '../helpers/axiosRequests';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ProductList = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category ? `products?category=${category}` : 'products'
        );
        if (res.statusText === 'OK') setProducts(res.data.products);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  // Filter products
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((product) =>
          Object.entries(filters).every(([key, value]) =>
            product[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  // Sort products
  useEffect(() => {
    switch (sort) {
      case 'asc':
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;

      case 'desc':
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;

      // newest by default
      default:
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
    </Container>
  );
};

export default ProductList;
