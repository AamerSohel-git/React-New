import React from 'react';
import SecondChild from './SecondChild';

const FirstChild = () => {
    return (
        <div>
            <p>I am first Child of: </p>
            <SecondChild/>
        </div>
    );
};

export default FirstChild;