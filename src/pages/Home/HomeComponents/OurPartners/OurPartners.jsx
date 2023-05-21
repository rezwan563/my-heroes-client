import React from 'react';


const OurPartners = () => {
    return (
        <div>
            <h3 className='text-2xl md:text-5xl pl-2 md:pl-16 font-bold mb-5 '>Our Partners</h3>
            <div className='flex flex-wrap gap-2 md:gap-0 items-center justify-around'>
                <img src="https://i.ibb.co/MMjJDyx/Disney-Store-logo-svg.png" className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src="https://i.ibb.co/M264QRH/lego.png" className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src='https://i.ibb.co/BKMZcPg/american.png' className='w-fit border-slate-200 border-2 shadow-xl' alt="" />
                <img src="https://i.ibb.co/pfcHy4V/kiddy-land.png" className=' border-slate-200 border-2 shadow-xl' alt="" />
                <img src='https://i.ibb.co/kQrXR0K/larkToys.png' className=' border-slate-200 border-2 shadow-xl' alt="" />
            </div>
        </div>
    );
};

export default OurPartners;