import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Input = ({ type, ...props }) => (
  <>
    <input className="input" type={type} {...props} />
    <Icon icon="search" size={23} />
  </>
);

Input.defaultProps = {
  type: '',
};

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
