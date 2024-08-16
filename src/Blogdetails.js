import { useHistory, useParams } from 'react-router-dom';
import useFetch from './usefetch';

//we are using it ot get the blogs data based on id 
const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+ id)
    const history=useHistory();

    const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id,{
        method:'DELETE'

    }).then(()=>{
        history.push('/');

    })

   }
    return (
        <div className="blog-details">
        {isPending && <div> Loading...</div>}
        {/* initial is it true but when data load it is changed to different value or false and being as a state hook it is render again */}
        {error && <div> {error} </div>}
        {blog&&(
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>

        )}
        </div>
    );
}

export default BlogDetails;
