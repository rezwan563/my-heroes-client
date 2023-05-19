import React from 'react';
import img from '/placeholder.jpg'

const SingleToyDetails = () => {
    return (
        <div className='my-10'>
            <div className='border-4 shadow-md border-red-50 mx-2 md:w-1/2 md:mx-auto'>
                <div className='bg-slate-200 p-2 grid grid-rows-2 md:grid-cols-2'>
                    <div className='p-2 grid md:grid-cols-2 order-last md:order-none'>
                        
                        <div className=' p-2'>
                            <p className='text-lg md:text-2xl font-semibold'>Seller Info</p>
                            <p>Name: </p>
                            <p>Email: </p>
                        </div>
                        <div className=' p-2'>
                            <p className='text-lg md:text-2xl  font-semibold'>Product Info</p>
                            <p>Name: </p>
                            <p>Sub-category: </p>
                            <p>Price: </p>
                            <p>Rating: </p>
                            <p>Available Qty.: </p>
                            <p>Details: </p>
                        </div>

                    </div>
                    <div className=''>
                        <img className='md:w-64 mx-auto shadow-sm' src={img} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;