import React,{createContext} from 'react';
import FirstChild from './FirstChild';

export  const TestContext = createContext();
export  const UserContext = createContext();

const UseContext = () => {
    const test = [
        {name:"first Name",type:"text"},
        {name:"middel Name",type:"text"},
        {name:"Last Name",type:"text"}
    ]
    const user ="manahil8551@gmail.com"
    return (
        <div>
            
            <h1>React Hook: useContext()</h1>
            <p>This hook is used to manage or share the state between deeply nested components</p>
            <UserContext.Provider value={user}>
            <TestContext.Provider value={test}>
            <FirstChild/>
            </TestContext.Provider>
            </UserContext.Provider>
 
        </div>
    );
};

export default UseContext;