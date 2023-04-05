import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { InitialStateGallery } from './InitialStateGallery/InitialStateGallery';

export default class App extends Component {
  state = {
    isShowModal: false,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  // custom methods

  // for toggle modal
  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render() {
    const { isShowModal } = this.state;

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
            <img src="" alt="" />
          </Modal>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
