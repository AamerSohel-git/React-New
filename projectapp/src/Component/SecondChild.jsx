import React from 'react';
import ThirdChild from './ThirdChild';

const SecondChild = () => {
    return (
        <div>
            <p>I am second child of: </p>
            <ThirdChild/>
        </div>
    );
};

export default SecondChild;