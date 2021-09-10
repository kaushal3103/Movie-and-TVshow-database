import { useState,useEffect } from "react";

import API from '../API';

export const useTVFetch = tvId=>{
    const [state,setState] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{

           const fetchTV = async() =>{
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchTV(tvId);
            const credits = await API.fetchTVCredits(tvId);

           
            
        setState({
            ...movie,
            actors:credits.cast,
           directors:movie.created_by
           
        })
        setLoading(false);

        }
              
        catch(error){
            setError(true);
        }
    }

    fetchTV();

    },[tvId]);

    return { state,loading,error};
}