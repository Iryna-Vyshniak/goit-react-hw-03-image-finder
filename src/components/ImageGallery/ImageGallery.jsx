//import PropTypes from 'prop-types';
import imagesAPI from 'services/getImages';
import React, { Component } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
//import DefaultImg from 'assets/pbsh.png';
// import { toast } from 'react-toastify';
// import { notifyOptions } from '../notify/notify';
import { Loader } from '../Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { InitialStateGallery } from '../InitialStateGallery/InitialStateGallery';
import { Button } from 'components/Button/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    value: '',
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    totalPages: 0,
  };

  // перевіряємо, щоб в пропсах змінився запит
  // y static відсутній this, тому дублюємо в state - search: ''
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    //console.log(nextValue);
    //   страхуємо від повторного запиту, якщо вже таке слово було введене
    if (prevValue !== nextValue || prevState.page !== page) {
      // console.log('prevValue:', prevValue);
      //console.log('nextValue:', nextValue);
      this.setState({ status: Status.PENDING });

      // перевіряємо чи є помилка, якщо є - записуємо null
      if (this.state.error) {
        this.setState({ error: null });
      }
      imagesAPI
        .getImages(nextValue, page)
        .then(images => {
          //console.log(images);
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          }));
          // console.log(this.state.images);
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  // custom methods
  handleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, error, status, page, totalPages } = this.state;
    //console.log('images: ', images);

    if (status === 'idle') {
      return <InitialStateGallery text="Let`s find images together!" />;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }
    if (images.length === 0) {
      return (
        <ImageErrorView
          message={`Oops... there are no images matching your search... `}
        />
      );
    }

    if (status === 'resolved') {
      //toast.success(`Hooray! We found ${images.total} images.`, notifyOptions);
      return (
        <>
          <List>
            {images.map(image => (
              <ImageGalleryItem key={image.id} item={image} />
            ))}
          </List>
          {images.length > 0 && status !== 'pending' && page <= totalPages && (
            <Button status="load" onClick={this.handleLoad}>
              Load More
            </Button>
          )}
        </>
      );
    }
  }
}
