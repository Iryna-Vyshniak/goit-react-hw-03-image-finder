import React from 'react';
import { Container } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
