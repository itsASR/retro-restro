import React from 'react'
import logo from './logo.png'
import fb from './fb.png'
import insta from './insta.svg'
import twitter from './twitter.svg'
import msg from './msg.svg'



function Footer() {
    return (
        <>
            <footer className='bg-black '>
                <div className='border-b-2 pb-16  border-white'>
                    <div id="upperFooter" className='lg:flex lg:justify-evenly'> 
                        <div>
                            <img src={logo} className='mx-auto'></img>
                        </div>
                        <div className='pl-5 lg:pt-20'>
                            <span className='text-white text-3xl font-bold'>Our Location:</span>
                            <p className='text-xl font-semibold py-2 text-white pt-5'>38, Bajrang Bhawan, Mohan Nagar, Nahargarh Road, Jaipur Rajasthan -302001</p>
                            <p className='text-xl font-semibold py-2 text-white'>+91-9680415819</p>
                            <p className='text-xl font-semibold py-2 text-white'>asreyanshsharma@gmail.com</p>

                        </div>

                    </div>
                    <div className='flex pt-5 justify-center xl:-mt-20'>
                        <button className='bg-gray-800 hover:bg-blue-700 text-white  px-3 py-1 rounded-full  font-bold sm:text-2xl'>ORDER NOW</button>
                        <button className='bg-gray-800 hover:bg-blue-700 ml-5 text-white px-3 py-1 rounded-full font-bold sm:text-2xl'>LOGIN</button>
                    </div>
                </div>
                <div className='pt-8 flex justify-center'>
                    <p className='text-white  font-bold'>FOLLOW US ON SOCIAL MEDIA</p>
                </div>
                <div className='flex justify-center pt-1 pb-5'>
                    <img src={fb} className='w-14 px-2'></img>
                    <img src={insta} className='w-10 px-2'></img>
                    <img src={twitter} className='w-10 px-2'></img>
                    <img src={msg} className='w-10 px-2'></img>
                </div>
            </footer>
        </>
    )
}

export default Footer