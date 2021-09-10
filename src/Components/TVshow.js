import React from 'react';
import { useTVFetch} from '../Hooks/useTVFetch';
import { useParams } from 'react-router';
import Spinner from './Spinner'
import NotFound from './NotFound';
import BreadCrumb from './BreadCrumb/tv';
import TvInfo from './Info/TvInfo';
import InfoBar from './InfoBar/tv';
import Actor from './Actor';
import Grid from './Grid';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import NoImage from '../images/no_image.jpg'

const TVshow =()=>{
    const {tvId} = useParams();
   
    const {state:tv,loading,error} = useTVFetch(tvId);
    
    if(loading) return <Spinner />;
    if(error) return <NotFound />;
    
    return (
        <>
<BreadCrumb movieTitle={tv.name} />
<TvInfo tv={tv}  />
<InfoBar
season={tv.number_of_seasons}
episodes={tv.number_of_episodes}

/>
<Grid header="Actors">
    {
        tv.actors.map(actor=>(
            <Actor name={actor.name}
            imageURL={
                actor.profile_path?
                `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                :NoImage
            }
            character={actor.character}
                
            />
        ))
    }

</Grid>

</>
    )
}

export default TVshow ;