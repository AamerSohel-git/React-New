import React from 'react';
import FourthChild from './FourthChild';

const ThirdChild = () => {
    return (
        <div>
            <p>I am third child of: </p>
            <FourthChild/>
        </div>
    );
};

export default ThirdChild;