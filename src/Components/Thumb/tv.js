import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Thumb =({image,clickable,TVid})=>(
<div className="Thumb">
    {
        clickable ? (
            <Link to ={`${TVid}`} >
            <img src={image} alt="thumb" className="img3" />
            </Link>
        ):(
            <img src={image} alt="thumb" className="img3" />
        )
    }
</div>
)
Thumb.propTypes = {
image: PropTypes.string,
TVid: PropTypes.number,
clickable: PropTypes.bool,
}


export default Thumb ;