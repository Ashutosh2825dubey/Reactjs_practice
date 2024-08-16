import { useState,useEffect } from "react";//we will be using useState hooks
//use effect hooks tutorial 14

import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
//    let name='mario';
// const [name,setName]=useState('mario');//this make the name reactive means whenever it is change using setname method or function the react re render the components
// const [age,setAge]=useState(25);
// const handleClick=(e)=>{
    //     console.log('hello ninjas',e);
    // }
    // the above one is for tutorial purpose
// const [blogs,setBlogs]=useState([
//     // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

// ]);
//all commented aftewr creating a cutom hooks for usage everywhere
// const [isPending,setIspending]=useState(true);
// const [blogs,setBlogs]=useState(null);
// const [name,setName]=useState('mario');
// const [error,setError]=useState(null);

//handle delete below is the test means it just us eto show how we can show the delete thing but in actual it should be done using databses
// const handleDelete=(id)=>{
//     const newBlogs=blogs.filter(blog=>blog.id!==id);
//     setBlogs(newBlogs)

// }
//useeffect run the function in it everytime the componenets are render


//custom hooks import

//commented below because of using custom hooks 
const{data,isPending,error}=useFetch('http://localhost:8000/blogs')

// useEffect(()=>{
    // console.log('use effect run');
    // console.log(blogs)
    // console.log(name);
    //fetch request using useeffect hooks
    //note we cannot use asyn because call back in useeffect is expected to return a function but when make asyn it returns a promise
//    setTimeout(()=>{
//     fetch('http://localhost:8000/blogs')
//         .then(res=>{
//             // console.log(res);
//              if(!res.ok)
//              {
//                 throw Error('Could not fetch the data for that resource')
//              }
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data);
//             setBlogs(data);
//             setIspending(false);
//             setError(null);
//         })
//         .catch((err)=>{
//             // console.log(err.message)
//             setError(err.message);
//             setIspending(false)
//         })
//    },1000)

// },[]);//dependencies array to allow run useeffects when certain crriteria is met
  //here in array we pass the dependencies naem and it is run when ever a state change occurs with the values written in array like name  

// const handleClick=(e)=>{
    //     setName('luigi');
    //     setAge(30);
    //    name='luig
    //    we want like when user click on button name changes but that does not happen until we make the name variable reactive using hooks
    // }
    // const handleClickAgain=(name,e)=>{
    //     console.log('hello'+name,e.target)
    // }
    return (  

        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p> */}
            {/* showing clickevents in react */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e)=>{
                handleClickAgain('mario',e)
            }}>Click me Again</button> */}
            {/* we are not using () when writing function call here because this will invoke it before we click on it but wheen we have to pass an argument to the function we have to so use anonymus function like ()=>{}  */}
        {/* the action or event which invokes a function we get baccess to event object in that function like for second we get access to e in anonymous function */}
     {/*  first test one --{blogs &&<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
    {error && <div> {error}</div>}
     {isPending&& <div> Loading...</div>}
          {data &&<BlogList blogs={data} title="All Blogs!" />}
    
     {/* conditional templating in react to checks if data is there  as fetching and assigning data to blogs takes some time */}
     {/* <button onClick={()=>setName('luigi')}>chnage name</button> */}
     {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs" /> */}
     {/* props are used to pass data to a componenet from one component */}
       {/* can pass more than one value */}
       {/* <p>{name}</p> */}
        </div>

    );
}
 
export default Home;