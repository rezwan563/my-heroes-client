import React from 'react';
import { tabTitle } from '../Shared/UseDocumentTitle/GeneralFunctions';

const Blog = () => {
    tabTitle('Blog - MyHeroes')
    return (
        
        <div className='my-10'>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>Ans: </p>
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>Compare SQL and NoSQL databases?</p>
                <p>Ans: </p>
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is express js? What is Nest JS?</p>
                <p>Ans: </p>
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is MongoDB aggregate and how does it work?</p>
                <p>Ans: </p>
            </div>
        </div>
    );
};

export default Blog;