import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div>
                <div className='text-center mx-5 md:space-y-2'>
                    <h2 className='text-xl font-semibold md:text-lg md:font-bold'>Subscribe to our newsletter and get updates on our latest deals</h2>
                    <p className='text-slate-700 text-sm'>Get 20% off on your first purchase just by subscribing our newsletter</p>
                    <div>
                        <input type="email" placeholder='email' className='p-2 border-slate-200 border-2 rounded-md '/>
                        <button className='border p-2 text-white bg-slate-700 rounded-lg'>Subscribe</button>
                    </div>
                    <p><small>You can unsubscribe at any time</small></p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;