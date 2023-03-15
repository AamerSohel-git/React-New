import React,{useContext} from 'react';
import {TestContext, UserContext} from "./UseContext"

const FifthChild = () => {
    const test = useContext(TestContext);
    const user = useContext(UserContext);
    return (
        <>
        <div>FifthChild</div>
        <p>User:{user}</p>
        {test.map((item,index)=>{
            return (
                <li key={index}>{item.name}</li>
            )
        })}
        </>
    );
};

export default FifthChild;