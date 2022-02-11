import React, { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {
  const [state, setstate] = useState({data:null, loading:true,error:null});
    const isMounted = useRef(true);
    useEffect(() => {
        return ()=> isMounted.current = false; 
    }, []);
  
    useEffect(() => {
        setstate({
            loading:true,
            error:null,
            data:null
        })
        fetch(url).then(resp =>resp.json())
        .then(data=>{

            if (isMounted.current){
               setstate({
                loading:false,
                error:null,
                data
            }) 
            } else{
                console.log('setstate no se llamo');
            }

            
        }).catch((error)=>{
            setstate({
                data:null,
                loading:false,
                error:'No se pudo caragar la info'
            })
        })
        
    }, [url]);
    return state;
}

export default useFetch
