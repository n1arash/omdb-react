import React,{PropTypes} from 'react';

const Row = (props) => {
    return(
      <div className="row" {...props} >
        {props.children}
      </div>
    )
}

Row.propTypes = {
  children :  PropTypes.any.isRequired
}

export default Row
