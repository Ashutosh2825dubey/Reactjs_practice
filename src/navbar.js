import {Link} from 'react-router-dom';
const Navbar = () => {//arrow functions for componenets inside here we have to return some kinds of templates
    return ( 
<nav className="navbar">
    <h1>The Dojo Blog</h1>
    <div className="links">
        <Link to="/">Home</Link>
        {/* we can add dynamic inline css measn we can pass javascript object where css name is the key and css value is the value */}
        <Link to="/create" 
        // style={{
        //     color:"white",
        //     backgroundColor:'#f1356d',
        //     // we use camocase here because when using css in jsx - stands for minus so use 
        //     borderRadius:'8px'
        
        // }}
        >New Blog</Link>
    </div>
</nav>

     );
}
 
export default Navbar ;