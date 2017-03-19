import React, { PropTypes } from 'react';

const Button = (props) => {
    return (
          <button {...props}>{props.children}</button>
        );
}

Button.defaultProps = {
  children : "Button"
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
