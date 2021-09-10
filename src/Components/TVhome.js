
import React from 'react';
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config';
import { useTVhomeFetch} from '../Hooks/useTVhomeFetch';
import HeroImage from './HeroImage';
import SearchBar from './SearchBar/tv';
import Grid from './Grid';
import Thumb from './Thumb/tv';
import NoImage from '../images/no_image.jpg';
import Button from './Button';
import Spinner from './Spinner';
const TVhome =()=>{
const { state1,loading1,error1,setSearchTerm1,searchTerm1,setIsLoadingMore1} = useTVhomeFetch();
  if(error1) return <div>Something Went wrong ... </div>
   return (
       <> 
       {     
         !searchTerm1 && state1.results[1]?
 <HeroImage 
       image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state1.results[1].backdrop_path}`}
       title={state1.results[1].name}
       text={state1.results[1].overview}
      
       />:null
}
    <SearchBar setSearchTerm1={setSearchTerm1} />
    <Grid header="Popular TV shows ">
      {
        state1.results.map(tv=>
          <Thumb key={tv.id}
          clickable
          image={
            tv.poster_path?
            IMAGE_BASE_URL+POSTER_SIZE+tv.poster_path:
            NoImage
          }
          TVid={tv.id}
          

          />
          
          )
      }

    </Grid>
    { loading1 && <Spinner />}
    {
      state1.page < state1.total_pages && !loading1 && (
      <Button text="Loading More" callback={()=>setIsLoadingMore1(true)} />
      )
    }
    



       </>
   )
   

   
};
export default TVhome;

