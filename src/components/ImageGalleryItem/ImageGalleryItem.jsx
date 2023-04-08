import { Component } from 'react';
import { ListItem, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const {
      item: { tags, webformatURL },
    } = this.props;

    return (
      <ListItem>
        <div>
          <Picture src={webformatURL} alt={tags} loading="lazy" />
        </div>
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
