
//to add more componenet we have nest this is the root componenet its like a tree where here like app is the root 
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './create';
import BlogDetails from './Blogdetails';
import NotFound from './not found';
function App() {
  const title='Welcome to the new blog';
  const likes=50// react convert any datatypes to string before output
  //const person={name:yoshi,age:30} we cannot output object or booleans
  const link="http://www.google.com"
  
  return (
    <Router>
    <div className="App">
      <Navbar /> 
      {/* navbar another componenet nested inside the app componenet */}
     <div className="content">
      {/* <h1>{title}</h1> */}
      {/* returning dynamic values in templates */}
      {/* <p>Liked {likes} times</p> */}
      {/* <p>{"hello ninjas"}</p> */}
      {/* <p>{[1,2,3,45,5]}</p> */}
      {/* <p>{Math.random()*10}</p> */}
      {/* <a href={link}>Google</a> */}
      {/* href link cann alao be dynamic  */}
      {/* <Home></Home> */}
      {/* showing how to use route in react so that for every request that client make we dont need ot go to the server to fetch the html page and we can get that thing done in user browser only */}
      <Switch>
        {/* switch allows render only one page at a time without  switch all pages having match would have been render to tell react to match only the exact we have to use exact keyword */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blogs/:id">
         <BlogDetails/>
        </Route>
        <Route path="*"> 
        {/* it i slike catch any other route other than the above and it is placed at he bootom to otherwise it will match any */}
          <NotFound/>
        </Route>
      </Switch>
     </div>

    </div>

    </Router>
  );
}

export default App;//export the component in componenet we have jsx templates which are converted to html by babel 
