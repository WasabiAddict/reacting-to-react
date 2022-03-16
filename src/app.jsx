import React, {useEffect, useState} from 'react';
import Greeter from "./components/Greeter";

const App = () => {
    const [username, setUsername] = useState("")
    const [loaded, setLoaded] = useState(false);
    console.log(username) //""

    useEffect(() => {
            setTimeout(() => {
                setLoaded(true)
            }, 3000);
    }, []);

    if(loaded) {
        return (
            <div>
                <h1>This is the way.</h1>
                <Greeter name="Josh" phrase="hello, there"/>
                <Greeter name="Turner" phrase="you're lagging, "/>
    
                
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
    
                <p>you're lagging lagging as {username} </p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>website loading...</h1>
                <button onCLick={() => setLoaded(true)}>load website!</button>
            </div>
        )
    }
}

export default App;