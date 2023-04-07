import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { InitialStateGallery } from './InitialStateGallery/InitialStateGallery';
import DefaultImg from 'assets/pbsh.png';
import { ModalDescr, ModalImg } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
//import { Loader } from './Loader/Loader';

export default class App extends Component {
  state = {
    textSearch: '',
    isLoading: false,
    isShowModal: false,
    largeImgUrl: DefaultImg,
    imgTags: 'Oops... there are no images matching your search',
  };

  componentDidMount() {}

  componentWillUnmount() {}

  // custom methods
  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  // for toggle modal
  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };

  render() {
    const { isShowModal, largeImgUrl, imgTags } = this.state;

    console.log('state:', this.state);
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Layout>
          <InitialStateGallery text="Let`s find images together!" />

          {/* render Loading by condition */}

          {/* render modal by condition */}

          {isShowModal && (
            <Modal onClose={this.toggleModal}>
              <ModalImg src={largeImgUrl} alt="" />
              <ModalDescr>{imgTags}</ModalDescr>
            </Modal>
          )}
        </Layout>
        <GlobalStyle />
      </>
    );
  }
}
