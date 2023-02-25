import React,{createContext} from 'react';
import FirstChild from './FirstChild';

export const DataContext = createContext();

const UseContext = () => {
    const data = "useContext hook";

    return (
        <div>
            <h1>React Hook: useContext()</h1>
            <p>This hook is used to manage or share the state between deeply nested components</p>
            <DataContext.Provider value={data}>
            <FirstChild/>
            </DataContext.Provider>
 
        </div>
    );
};

export default UseContext;