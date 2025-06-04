import React from 'react';

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 flex items-center px-5 sm:px-32 gap-5'>

      {/* First Image: Width increases when other images are hidden */}
      <div className='cardcontainer h-[50vh] w-full sm:w-3/4 lg:w-1/2 flex items-center justify-center'>
        <div className='card relative rounded-xl w-[100%] h-full bg-[#004D43] flex items-center justify-center'>
          <img src="https://plus.unsplash.com/premium_photo-1682126114600-150abefef3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwZWxlY3Ryb25pYyUyMHJlcGFpcnN8ZW58MHx8MHx8fDA%3D" className='max-w-full max-h-full' />
        </div>
      </div>

      {/* Other Two Images: Hidden on Small & Medium Screens */}
      <div className="hidden lg:flex cardcontainer gap-5 w-1/2 h-[50vh]">
        <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img src="https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXV0byUyMEVsZWN0cmljaWFuc3xlbnwwfHwwfHx8MA%3D%3D" className='w-full max-h-full' />
        </div>
        <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img src="https://plus.unsplash.com/premium_photo-1729936564623-147c3d6d0bd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FiJTIwZHJpdmVyc3xlbnwwfHwwfHx8MA%3D%3D" className='max-w-full h-full' />
        </div>
      </div>

    </div>
  );
}

export default Cards;
