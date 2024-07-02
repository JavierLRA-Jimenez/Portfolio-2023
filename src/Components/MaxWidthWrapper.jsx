import React from 'react';
import PropTypes from 'prop-types';

const MaxWidthWrapper = ({ children, className }) => {
  return (
    <div className={` mx-auto w-full max-w-screen-xl px-2.5 md:px-4 ${className}`}>
      {children}
    </div>
  );
};

MaxWidthWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MaxWidthWrapper.defaultProps = {
  className: '',
};

export default MaxWidthWrapper;
