//custom hooks 
import {useState,useEffect} from 'react'
const useFetch=(url)=>{
    const [isPending,setIspending]=useState(true);
const [data,setData]=useState(null);
// const [name,setName]=useState('mario');
const [error,setError]=useState(null);
    useEffect(()=>{
        const abortCont=new AbortController();
        // console.log('use effect run');
        // console.log(blogs)
        // console.log(name);
        //fetch request using useeffect hooks
       setTimeout(()=>{
        fetch(url,{signal:abortCont.signal})
            .then(res=>{
                // console.log(res);
                 if(!res.ok)
                 {
                    throw Error('Could not fetch the data for that resource')
                 }
                return res.json()
            })
            .then((data)=>{
                console.log(data);
                setData(data);
                setIspending(false);
                setError(null);
            })
            .catch((err)=>{
                //  console.log(err.message)
                if(err.name==='AbortError')
                {
                    console.log('fetch aborted')
                }
                else{
                    setError(err.message);
                    setIspending(false)
                }
              
            })
       },1000);
       return ()=> abortCont.abort();
    },[url]);//when ever url changes it re run the whole means useefffect runs again
 return {data,isPending,error}
}
export default useFetch;