import React from 'react';
import {Wrapper} from './Infostyles';
import Thumb from '../Thumb/tv';
import NoImage from '../../images/no_image.jpg';
import {IMAGE_BASE_URL,POSTER_SIZE} from '../../config';
import PropTypes from 'prop-types';

const TvInfo =({tv})=>(
  
    <Wrapper backdrop={tv.backdrop_path}>
        <div className="Infocontent">
            <Thumb image =
                {
                 tv.poster_path ?
                `${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`
                :NoImage
                }
            clickable={false}
            alt="tv thumb"
            />
        <div className="Infotext">
            <h2 className="title">{tv.name}</h2>
            <br/>
            <h3 className="plot">PLOT</h3>
            
            <p className="overview">{tv.overview}</p>
            <br/>
            <div className="date">
            <h4 className="daten">First episode air date : {
                tv.first_air_date
                }</h4>
            
            <h4 className="daten">Last episode air date : {
                tv.last_air_date
                }</h4>
                </div>
            <br/>
        <div className="rating-directors">
            <div className="rate">
                <h3 className="rating"> RATING </h3>
                <div className="score">
                    {tv.vote_average}
                </div>
       </div>
<div className="director">
<h3 className="dir">DIRECTOR{tv.directors.length>1? 'S':''}</h3>
{
    tv.directors.map(director=>(
        <p key={director.credit_id} className="p6" >
            {director.name}
        </p>
    ))
}

</div>


        </div>
        </div>

        </div>

    </Wrapper>
)

TvInfo.propTypes={
     tv:PropTypes.object,
 }


export default TvInfo;