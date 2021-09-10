
import React from 'react';
import { Wrapper } from './Infostyles';
import Thumb from '../Thumb/movie';
import { IMAGE_BASE_URL,POSTER_SIZE} from '../../config';
import NoImage from '../../images/no_image.jpg';
import PropTypes from'prop-types'

 const MovieInfo =({movie})=>(
     
     <Wrapper backdrop={movie.backdrop_path}> 
     <div className="Infocontent">
         
        <Thumb image={
            movie.poster_path?
            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:
            NoImage
        }
        clickable={false}
        alt="movie-thumb"
       
        />

    <div className="Infotext">
        <h2 className="title">{movie.title}</h2>
        <br/>
        <h3 className="plot">PLOT</h3>
        <br/>
        <p className="overview">{movie.overview}</p>
        <br/>
        <div className="rating-directors">
            <div className="rate">
                <h3 className="rating">RATING</h3>
                <div className="score">
                    {movie.vote_average}
                </div>
            </div>
       <div className="director">

<h3 className="dir">DIRECTOR{movie.directors.length > 1 ? 'S':''}</h3>
{
    movie.directors.map(director =>(
        <p key={director.credit_id} className="p6">
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

 MovieInfo.propTypes={
     movie:PropTypes.object,
 }

 export default MovieInfo;
