import React from 'react';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';
//import PropTypes from 'prop-types';

export const Searchbar = () => {
  return (
    <Header>
      <SearchForm>
        <SearchFormBtn>
          <HiMagnifyingGlass size="24" />
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
