import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const[author,setAuthor]=useState('mario')
    const [isPending,setisPending]=useState(false);
    // Controlled inputs are crucial for managing and synchronizing state in React applications. They provide predictability, easier debugging, better form handling, and adhere to the React philosophy of a single source of truth for UI state. Without controlled inputs, you would lose these benefits and encounter more complexity in managing input values and form submissions.
    const history=useHistory();//forward and backward to history and also redirect 
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        // console.log(blog)
        setisPending(true);
        setTimeout(()=>{
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setisPending(false);
            // history.go(-1);
            history.push('/') //redirect to home page 
        })
    },1000);
    

    }
   
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label > Blog Title: </label>
                <input 
                type="text"
                required
                value={title}
                
                onChange={(e)=>{
                    // console.log(e)
                    // console.log(e.target);
                    // console.log(e.target.value);
                    
                    
                    setTitle(e.target.value)}}
                
                />
                 <label > Blog Body: </label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                    
                </textarea>
                <label >Blog author:</label>
            <select
            value={author}
            onChange={(e)=> setAuthor(e.target.value)} >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
        {!isPending&& <button>Add Blog </button>}
        {isPending&& <button disabled>Adding Blog... </button>}
         {/* <p>{title}</p>
         <p>{body}</p>
         <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;