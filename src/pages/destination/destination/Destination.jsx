import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Destination = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>this is destination page</h1>
        </div>
    );
};

export default Destination;