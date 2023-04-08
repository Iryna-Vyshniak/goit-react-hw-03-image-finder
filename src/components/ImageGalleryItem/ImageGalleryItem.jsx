import { ListItem, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item }) => {
  console.log(item);
  return (
    <ListItem>
      <div>
        <Picture src={item.webformatURL} alt={item.tags} loading="lazy" />
      </div>
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};
