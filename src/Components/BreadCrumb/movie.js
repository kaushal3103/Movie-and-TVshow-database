import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

 const BreadCrumb =({movieTitle})=>(
    <div className="BreadCrumb">
        <div className="BCcontent">
            <Link to="/">
                <span className="spana">Home</span>
            </Link>
            <span className="div">|</span>
            <span className="spanb">
                {movieTitle}
            </span>
        </div>
    </div>
)

BreadCrumb.propTypes ={
    movieTitle:PropTypes.string,
}

export default BreadCrumb;