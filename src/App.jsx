import React, { useState } from 'react';
import LoginFrom from './LoginFrom';

const App = () =>{

   // let count= 1;
    const state = useState();

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count+1);
    }

    return(
        <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
            { LoginFrom() }
        </div>
        </>
    )
}

export default App;
