//import PropTypes from 'prop-types';
import imagesAPI from 'services/getImages';
import React, { Component } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import DefaultImg from 'assets/pbsh.png';
import { toast } from 'react-toastify';
import { notifyOptions } from '../notify/notify';
import { Loader } from '../Loader/Loader';
import ImageErrorView from 'components/ImageErrorView/ImageErrorView';
import { InitialStateGallery } from '../InitialStateGallery/InitialStateGallery';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,

    largeImgUrl: DefaultImg,
  };

  componentDidUpdate(prevProps) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    //console.log(nextValue);
    //   страхуємо від повторного запиту, якщо вже таке слово було введене
    if (prevValue !== nextValue) {
      // console.log('prevValue:', prevValue);
      //console.log('nextValue:', nextValue);
      this.setState({ status: Status.PENDING });

      imagesAPI
        .getImages(nextValue)
        .then(images => {
          //console.log(images);
          this.setState({
            images,
            status: Status.RESOLVED,
          });
          // console.log(this.state.images);
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images, error, status } = this.state;
    //console.log('images: ', images);
    // const { value } = this.props;

    if (status === 'idle') {
      return <InitialStateGallery text="Let`s find images together!" />;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }
    if (images.hits.length === 0) {
      return (
        <ImageErrorView
          message={`Oops... there are no images matching your search... `}
        />
      );
    }
    if (status === 'resolved') {
      toast.success(`Hooray! We found ${images.total} images.`, notifyOptions);
      return (
        <List>
          {images.hits.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              //   showModal={this.toggleModal}
            />
          ))}
        </List>
      );
    }
    /* return (
      <>
        {error && (
          <>
            <ImageErrorView />
            <p>{error.message}</p>
          </>
        )}

        {!value && <InitialStateGallery text="Let`s find images together!" />}
        {isLoading && <Loader loading={isLoading} />}
        {images && (
          <List>
            {images.hits.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
              
              />
            ))}
          </List>
        )}
      </>
    ); */
  }
}
