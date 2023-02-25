import React,{useContext} from 'react';
import {DataContext} from "./UseContext"

const FifthChild = () => {
    const data = useContext(DataContext);
    return (
        <div>
            <p>I am fifth child of: {data} </p>
        </div>
    );
};

export default FifthChild;