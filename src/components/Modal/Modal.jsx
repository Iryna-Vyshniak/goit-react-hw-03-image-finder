//import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleBackdropeClick);
  }

  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onClose();
    }
  };

  handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropeClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
