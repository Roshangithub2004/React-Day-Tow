import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet}  from 'react-router';
import ClassEleven from './component/ClassEleven';
import ClassTwelth from './component/ClassTwelth';
import Home from './component/Home';
import { useRef } from 'react';


const App = () => {

    // const inpref = useRef();

    // function focusOnInput(){
    //     inpref.current.focus();
    // }

    const [currentCount, setCurrentCount] = useState(1);
    const timer = useRef();

    function startColck(){
        let value = setInterval(function(){
        setCurrentCount(currentCount => currentCount +1);
        }, 1000);
        timer.current = value;
    }

    function stopClock(){
        clearInterval(timer.current)
    }

    return(

        <>
            {currentCount}
            <br />
            <button onClick={startColck}>Start</button>
            <button onClick={stopClock}>Stop</button>

        </>



        // <>
        // Sign up 
        // <input ref={inpref} type=" " placeholder='name' />
        // <input type="text" placeholder='email'/>
        // <button onClick={focusOnInput}>Submit</button>
        // </>
    )
}

// const App = () => {
//   return (
//     <div>

        
//         Home

//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout/>}>
//             <Route path='/neet/online-coacching-class11' element={<ClassEleven/>}/>
//             <Route path='/neet/online-coacching-class12' element={<ClassTwelth/>}/>
//             <Route path='/' element={<Home/>}/>
//             <Route path='*' element={<ErrorPage/>}/>
//             </Route>
//         </Routes>

//       </BrowserRouter>
//     </div>
//   )
// }

// function Layout(){
//     return(
//         <div>
//             <div style={{display:"flex", gap:10}}>
//                 <Link to={{pathname:"/neet", hash:"#hm"}}>Home</Link>
//                 <Link to="/neet/online-coacching-class11">Class 11</Link>
//                 <Link to="/neet/online-coacching-class12">Class 12</Link>
//             </div>
            
//             <div>
//                 <Outlet/>
//             </div>
            

//             Footer | Contact 
//         </div>
//     )
// }


export default App
