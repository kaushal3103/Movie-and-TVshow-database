import { useState,useEffect } from "react";
import API from '../API';

const initialState ={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}

export const useTVhomeFetch=()=>{
    const [searchTerm1,setSearchTerm1] = useState('');
    const [state1,setState1] = useState(initialState);
    const [loading1,setLoading1] = useState(false);
    const [error1,setError1] = useState(false);
    const [isLoadingMore1,setIsLoadingMore1] = useState(false);
    
    const TV = async( page,searchTerm="")=>{

        try {
            setLoading1(true);
            setError1(false);

    const TVs = await API.fetchTVs(searchTerm,page);
    

 setState1(prev=>({
        ...TVs,
        results:
        page > 1 ? [...prev.results,...TVs.results] : [...TVs.results]
    }))
        }
           catch(error){
            setError1(true);
            setLoading1(true);
        }
        setLoading1(false);
    }

    useEffect(() => {
        setState1(initialState);
       TV(1,searchTerm1);
    }, [searchTerm1]);

    useEffect(()=>{
    if(!isLoadingMore1) return;
    TV(state1.page+1,searchTerm1);
    setIsLoadingMore1(false);
    },[state1,searchTerm1,isLoadingMore1])

 return { state1, loading1,error1,setSearchTerm1,searchTerm1,setIsLoadingMore1} ;   
}

