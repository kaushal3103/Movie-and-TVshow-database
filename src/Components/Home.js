import React from 'react';

import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';



import { useHomeFetch } from '../Hooks/useHomeFetch';

import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb/movie';
import Spinner from './Spinner';
import SearchBar from './SearchBar/movie'
import Button from './Button';


const Home =()=>{
   const { state,loading,error,setSearchTerm,searchTerm,setIsLoadingMore} = useHomeFetch();
  
 

  if(error) return <div>Something Went wrong ... </div>

    return (
    <>
   {
       !searchTerm && state.results[1] ?
       <HeroImage 
       image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
       title={state.results[1].original_title}
       text={state.results[1].overview}
       />:null
   }
   <SearchBar setSearchTerm={setSearchTerm} />
   <Grid header={searchTerm?"Search Result":"Popular Movies"}>
       {
           state.results.map(movie=>(
           <Thumb key={movie.id}
           clickable
           image={
               movie.poster_path?IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path:
               NoImage
           }
           movieId = {movie.id}
           />
           )
           )
       }
   </Grid>
   
   {loading && <Spinner/>}
    {
        state.page < state.total_pages && !loading && (
            <Button text="Load More" callback={()=>setIsLoadingMore(true)} />
        )
    }
    </>
    )
}

export default Home;