// note :we are making a json server to get the data and test means get a api for testing

import { Link } from "react-router-dom";


const BlogList = (props) => {//we get access to props object and any props send to a componenet we can receive in props and access in another components
    // we can also use the destructuring in the props like instead of props i can write {vaalue1,value2.....}
    
    const blogs=props.blogs;
    const title=props.title;
    // const handleDelete=props.handleDelete;
    // console.log(props,blogs)
    return ( 
       <div className="blog-list">
        <h2>{title}</h2>
         {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </Link>
          
            {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
        {/* handle delete function is defined is home because it requires re rendering of the data componenets as staehooks are used so it is defined in home as send as a props in bloglist */}
        </div>


       ))}
       </div> 
     );
}
 
export default BlogList;