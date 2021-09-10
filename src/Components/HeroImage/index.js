import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './HeroImageStyles';

const HeroImage = ({image,title,text}) =>(
    <Wrapper image={image} >
        <div className="HIcontent">
            <div className="HItext">
                <h1 className="h1">{title}</h1>
                <p className="p1">{text}</p>
            </div>
        </div>
    </Wrapper>
)

HeroImage.propTypes ={
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default HeroImage;