import React from 'react';
import { useMovieFetch} from '../Hooks/useMovieFetch';
import { useParams } from 'react-router';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import Grid from './Grid';
import Spinner from './Spinner';
import NoImage from '../images/no_image.jpg';
import NotFound from './NotFound';
import BreadCrumb  from './BreadCrumb/movie';
import  MovieInfo  from './Info/MovieInfo';
import InfoBar from './InfoBar/movie';
import Actor from './Actor';


const Movie =()=>{
    const {movieId} = useParams();
    
    const { state: movie,loading,error} = useMovieFetch(movieId);
  

    if(loading) return <Spinner />
    if(error) return <NotFound />

    return(
        <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <InfoBar 
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
        />
        <Grid header="Actor">
        {
            movie.actors.map(actor=>
                <Actor key={actor.credit_id}
                imageURL={
                    actor.profile_path?
                    `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    :NoImage
                }
                name={actor.name}
                character={actor.character}

                />
                )
        }
        
        
        </Grid>
    
        

  </>  
    )
}

export default Movie;
