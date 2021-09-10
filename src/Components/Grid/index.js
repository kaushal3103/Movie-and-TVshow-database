import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({header,children}) =>(
    <div className="Grid">
   
    <h1 className="header" >{header}</h1>
  
    <div className="Gcontent">
       {children}
    </div>
</div>
)
Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid;