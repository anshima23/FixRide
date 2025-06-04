import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 90); // Center of the circle at 0 degrees
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                }}
                                className="line w-full h-10"
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                }}
                                className="line w-full h-10"
                            >
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
