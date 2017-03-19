import React, { PropTypes } from 'react';


const Container =  (props) => {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any.isRequired
}

export default Container;
