import React from 'react';
import disney from '/Disney_Store_logo.svg.png'
import lego from '/lego.png'
import kiddy from '/kiddy_land.png'
import larkToys from '/larkToys.png'
import americanGirl from '/american.png'


const OurPartners = () => {
    return (
        <div>
            <h3 className='text-2xl md:text-5xl pl-2 md:pl-16 font-bold mb-5 '>Our Partners</h3>
            <div className='flex flex-wrap gap-2 md:gap-0 items-center justify-around'>
                <img src={disney} className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src={lego} className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src={americanGirl} className='w-fit border-slate-200 border-2 shadow-xl' alt="" />
                <img src={kiddy} className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src={larkToys} className=' border-slate-200 border-2 shadow-xl' alt="" />
            </div>
        </div>
    );
};

export default OurPartners;