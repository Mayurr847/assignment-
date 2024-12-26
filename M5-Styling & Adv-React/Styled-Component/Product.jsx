// import React from 'react';
import styled from 'styled-components';

// Updated products array with image URLs
const products = [
  { id: 1, name: 'Poteto', price: '50', image: 'https://images7.alphacoders.com/376/thumb-1920-376174.jpg' },
  { id: 2, name: 'Onion', price: '70', image: 'https://produits.bienmanger.com/36700-0w0h0_Organic_Red_Onion_From_Italy.jpg' },
  { id: 3, name: 'Lemon', price: '100', image: 'https://img.freepik.com/premium-photo/lemon-image_862462-1018.jpg' },
  { id: 4, name: 'Green-Cilly', price: '40', image: 'https://img.freepik.com/premium-photo/green-chilly_948023-1815.jpg' },
];

const GridWrapper = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  background-color: #f9f9f9;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: #4caf50;
  font-weight: bold;
`;

function Product() {
  return (
    <GridWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          {/* Render the product image */}
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductCard>
      ))}
    </GridWrapper>
  );
}

export default Product;
