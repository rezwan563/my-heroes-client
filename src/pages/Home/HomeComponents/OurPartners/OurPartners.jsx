import React from 'react';
import disney from '/Disney_Store_logo.svg.png'
import lego from '/lego.png'
import kiddy from '/kiddy_land.png'
import larkToys from '/larkToys.png'
import americanGirl from '/american.png'


const OurPartners = () => {
    return (
        <div>
            <h3 className='text-2xl md:text-5xl pl-2 md:pl-16 font-bold md:mb-5'>Our Partners</h3>
            <div className='flex justify-around'>
                <img src={disney} className='' alt="" />
                <img src={lego} className='' alt="" />
                <img src={americanGirl} className='w-fit' alt="" />
                <img src={kiddy} className='' alt="" />
                <img src={larkToys} className='' alt="" />
            </div>
        </div>
    );
};

export default OurPartners;