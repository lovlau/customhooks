import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setstate] = useState({
        
        data:null,
        isLoading:false,
        hasError:null

    })

 const getFetch=async()=>{

        setstate({
            ...state,
            isLoading:true
        })

        const resp=await fetch(url)
        const data=await resp.json();

        setstate({
            hasError:null,
            isLoading:false,
            data
        })
        
    }



 useEffect(() => {
   
        getFetch()

 }, [url])
 
 
 
 
    return {
        data:     state.data,
        isLoading:state.isLoading,
        hasError: state.hasError
    };

}
