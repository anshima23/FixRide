import React from 'react';

function Featured() {
  return (
    <div data-scroll data-scroll-section className='w-full py-20 bg-black'>
        <div className='w-full px-20 border-b-[1px] border-white pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] text-white tracking-tight'>
            Service Providers
            </h1>
        </div>
        <div className='px-10 md:px-20'>
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">  
                <div className='cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh] lg:h-[75vh]'>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1677009541474-1fc2642943c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8fDA%3D" alt="FYDE"/>
                </div>
                </div>
                <div className='cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh] lg:h-[75vh]'>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1661499557724-e1f6eef67ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwd2FzaGVyfGVufDB8fDB8fHww" alt="VISE"/>
                </div>
                </div>
        </div>
        </div>
    </div>
  );
}

export default Featured;