// import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 10px;
`;

function Footer() {
  return <FooterWrapper>&copy; 2024 ShopEase. All rights reserved.</FooterWrapper>;
}

export default Footer;
