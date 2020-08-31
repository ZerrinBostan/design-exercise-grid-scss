import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

const Button = ({ text, callback = null, className, icon, ...props }) => (
  <>
    <button
      type="button"
      className={`button button-${className}`}
      callback={callback}
    >
      {text && <h3>{text}</h3>}
      <Icon icon={icon} size={23} />
    </button>
  </>
);

Button.defaultProps = {
  text: null,
  icon: 'notifications-outline',
  className: '',
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
