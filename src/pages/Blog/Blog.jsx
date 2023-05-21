import React from 'react';
import { tabTitle } from '../Shared/UseDocumentTitle/GeneralFunctions';

const Blog = () => {
    tabTitle('Blog - MyHeroes')
    return (
        
        <div className='my-10'>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>Ans: Access token and refresh token are provided by the servers. These token are used to verify the user. <br /> <br></br>Access token has a validity period. If the user asks some information within this validity period, the server will first verify the user. After user is verified then the server will send a response to the user with the desired data. <br /><br></br> If the validity period of access token expires then <b>refresh token</b> is used to ask for a new access token for the user. And in case the refesh token's validity expires then the users has to complete  their authentication again.</p><br></br>There are two options to store token in client-side <ul><li>Local storage</li><li>Browser memory/cookies</li></ul>
                Although these two options has their limits. But <b>browser memory/cookies</b> is the better option to store access token and refresh token
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>Compare SQL and NoSQL databases?</p>
                <p>Ans: SQL stands for <i>Structured Query Language</i> and NoSQL is the opposite, not structured!. SQL is managed by usign  RDBMS(<i>Relationship Database Management System</i>). It stores data in table format. It is rigid in structure meaning you have to send data according to the table layout. It has predefined schema(<i>a term to indicate how data is stored in relation to other table</i>)</p>
                Some popular examples are: <b>Oracle</b>, <b>MySQL</b><br /><br />NoSQL is managed by usign DBMS(<i>Database Management System</i>). Data is stored as a document in a collection instead of table. Examples: <b>MongoDB</b>,<b>Redis,</b><b></b> It has no predefined schema, so it is flexible to work with.<br/><br />SQL is preferred where data is constant and less likely to change and also requires relation with other data which are stored in other table. <br></br>NoSQL is used
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is express js? What is Nest JS?</p>
                <p>Ans: Express.js is a framework which is flexible and has a large developers community<br /><br />Nest is a newer framework based on Node.js which makes building server side application quickly and efficiently. Nest.js uses Typescript as its programmign language. Typescript allows to catch error at run time.</p>
            </div>
            <div className='md:w-1/2 mx-2 md:mx-auto border-2 shadow-md rounded-md p-2'>
                <p className='text-lg font-bold'>What is MongoDB aggregate and how does it work?</p>
                <p>Ans: MongoDB aggregate is a operation. It group values  on multiple documents, can perform various operations on the grouped values and return a signle result.</p>
            </div>
        </div>
    );
};

export default Blog;