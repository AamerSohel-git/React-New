import React from 'react';
import FifthChild from './FifthChild';

const FourthChild = () => {
    return (
        <div>
            <p>I am fourth child of: </p>
            <FifthChild/>
        </div>
    );
};

export default FourthChild;