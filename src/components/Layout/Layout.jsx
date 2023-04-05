import React from 'react';
import { Container } from './Layout.styled';
import PropTypes from 'prop-types';
import { Searchbar } from '../Searchbar/Searchbar';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Searchbar />
      <main>{children}</main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
