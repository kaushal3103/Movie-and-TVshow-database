import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Thumb=({image,movieId,clickable})=>(
  
<div className="Thumb">

{
  clickable?(
  
    <Link to={`/${movieId}`}>

    <img src={image} alt ="movie-thumb"className="img3" />
    </Link>


  ):<img src={image} alt ="movie-thumb"className="img3" />
}
  

</div>
    )
 
Thumb.propTypes = {
image: PropTypes.string,
movieId: PropTypes.number,
clickable: PropTypes.bool,
}


export default Thumb;
