import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { InitialStateGallery } from './InitialStateGallery/InitialStateGallery';
import DefaultImg from 'assets/pbsh.png';
import { ModalDescr, ModalImg } from './App.styled';

export default class App extends Component {
  state = {
    isShowModal: false,
    largeImgUrl: DefaultImg,
    imgTags: 'Oops... there are no images matching your search',
  };

  componentDidMount() {}

  componentWillUnmount() {}

  // custom methods

  // for toggle modal
  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render() {
    const { isShowModal, largeImgUrl, imgTags } = this.state;

    return (
      <Layout>
        {/* test button */}
        <button type="button" onClick={this.toggleModal}>
          Test Open Modal
        </button>
        <InitialStateGallery text="Let`s find images together!" />
        {/* render modal by condition */}
        {isShowModal && (
          <Modal onClose={this.toggleModal}>
            <ModalImg src={largeImgUrl} alt="" />
            <ModalDescr>{imgTags}</ModalDescr>
          </Modal>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
