import React, { useState } from 'react'
import reservationBG from './reservationBG.jpg'


function Reservation() {
    const [formdata, setformdata] = useState("");
    return (
        <>
            <div className='relative'>
                <img src={reservationBG} className='w-screen h-full absolute -z-10 ' ></img>
                <div className='bg-black  w-screen  absolute top-10 right-0 -z-10 opacity-0.5 w90'></div>
                <div className='lg:flex lg:justify-evenly'>
                    <div className='pt-16 '>
                        <p className='text-6xl font-bold text-white text-center lg:text-9xl lg:mt-40'>Reserve</p>
                        <p className='text-2xl font-bold text-center text-yellow-400 lg:text-4xl'>Your Table Now</p>
                    </div>
                    <div className=' pt-5 px-10 lg:pt-20 lg:px-0 lg:w-96'>
                        <form >
                            <div>
                            <input className='text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 pt-6 border-y-2 border-white focus:outline-none focus:border-blue-700' type='text' placeholder='Full Name' onChange={(e) => { setformdata(e.target.value) }} value={formdata} 
                            ></input>
                            <br></br>
                            <input className='text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 border-b-2 border-white focus:outline-none focus:border-blue-700' type='text' placeholder='Email ID'></input><br></br>


                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder='Phone Number'
                                className='text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 border-b-2 border-white focus:outline-none focus:border-blue-700'
                            /><br></br>

                            <input
                                type="time"
                                id="time"
                                name="time"
                                className= 'text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 border-b-2 border-white focus:outline-none focus:border-blue-700'
                            /><br></br>

                            <input
                                type="date"
                                id="date"
                                name="date"
                                className = 'text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 border-b-2 border-white focus:outline-none focus:border-blue-700'
                            /><br></br>

                            <input
                                type="number"
                                id="numberOfGuests"
                                name="numberOfGuests"
                                placeholder='Number of Guests'
                                className= 'text-white placeholder-white relative font-bold bg-transparent my-4 w-full px-4 pb-4 border-b-2 border-white focus:outline-none focus:border-blue-700'
                            /><br></br>


                            <button
                                type="submit"
                                className=" mb-20 w-full bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                            >Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Reservation