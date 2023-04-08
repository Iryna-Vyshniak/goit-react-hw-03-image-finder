import PropTypes from 'prop-types';
import { Btn } from './Button.styled';
//import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ children, type = 'button', onClick = null }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

Btn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
};
