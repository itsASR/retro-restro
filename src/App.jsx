import React from 'react'
import Navbar from './Navbar'
import cv from './covervideo.mp4'
import Cards from './Cards'
import thali from './thali.png'
import arrow from './arrow.svg'
import Reservation from './Reservation'
import Footer from './Footer'
import male from './male.png'
import female from './female.png'
import app from './app.png'
import mobile from './mobile.png'

let a = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.968391618726!2d75.81662412415048!3d26.936216509082435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db17ac3c25705%3A0x4c2ab2ce0134844d!2sGanesh%20kirana%20store!5e0!3m2!1sen!2sin!4v1708352861724!5m2!1sen!2sin"

function App() {
  return (
    <>
      <Navbar></Navbar>

      <section className='relative' id='home'>
        <div className='pb-1 lg:pb-0'>
          <video src={cv} autoPlay loop muted className='ss' />
        </div>
        <div className="tagline  pt-9 pb-5  text-center lg:pb-48">
          <p className='text-2xl md:text-4xl style-script-regular lg:text-6xl lg:px-40 lg:pt-28'>Dinner is such a unique experience that makes you forget everything.</p>
          <button className="bg-green-600 hover:bg-blue-700 text-white py-2  rounded-full mx-auto mt-4 flex  items-center px-5 font-bold lg:mt-16 lg:text-3xl">
            Reserve a Table
          </button>
        </div>
      </section>


      <section className=' new-bg relative py-10 '>

        <div className='lg:px-12 xl:px-0 '>
          <div className='lg:flex lg:justify-evenly lg:px-20 xl:px-0 '>
            <div className='style-script-regular text-5xl w-screen text-center text-red-600 leading-snug lg:w-20 lg:pt-32  lg:text-6xl '><p>Great Rajasthani Thali</p></div>
            <img src={arrow} className='w-72 hidden lg:block r-70 lg:absolute  top-80 left-40 xl:left-60'></img>
            <img src={thali} className='mx-auto lg:ml-32 xl:m-0 xl:ml-52'></img>
            <div className='style-script-regular text-2xl  pt-5 text-center sm:text-3xl lg:w-80 lg:text-6xl lg:mr-6 xl:m-0'><p>Khana nahi, anubhav hai, jo ek Bharatiya thali mein chipa hai...</p></div>
          </div>

          <button className='bg-gray-800 hover:bg-blue-700 text-white rounded-full flex mt-5 items-center px-2 font-bold mx-auto sm:text-3xl lg:text-4xl lg:p-3'>ORDER NOW</button>
        </div>

      </section>

      {/* ______________________________________menu section__________________________ */}

      <section className='new-bg relative'>
        <img src={female} className='absolute w-52 top-80 hidden lg:block'></img>
        <img src={male} className='absolute w-80 top-80 right-0 hidden lg:block'></img>
        <div className='flex justify-center pt-10'>
          <span className='text-5xl style-script-regular lg:text-8xl lg:py-7'>Regular Meal</span>
        </div>
        <div id='menu' className='px-10 sm:flex justify-center'>
          <div id="left">
            <div id="Main_courses" className='Menu-head'>
              <span className='span-style'>Main Courses:</span>
              <ol className='list-style'>
                <li>Butter Chicken (Murgh Makhani) ... 50 Rs</li>
                <li>Dal Makhani ... 30 Rs</li>
                <li>Palak Paneer ... 90 Rs</li>
                <li>Chole ... 90 Rs</li>
              </ol>
            </div>
            <div id="beverages" className='Menu-head'>
              <span className='span-style'>Beverages:</span>
              <ol className='list-style'>
                <li>Mango lassi ... 90 Rs</li>
                <li>Masala Chai ... 90 Rs</li>
              </ol>
            </div>
            <div id="rice" className=''>
              <span className='span-style'>Rice:</span>
              <ol className='list-style'>
                <li>Jeera Rice ... 90 Rs</li>
              </ol>
            </div>
          </div>

          {/* _____________right menu_____________ */}


          <div id="right">
            <div id="bread" className='Menu-head'>
              <span className='span-style'>Breads:</span>
              <ol className='list-style'>
                <li>Naan ... 90 Rs</li>
                <li>Garlic Naan ... 90 Rs</li>
              </ol>
            </div>
            <div id="Desserts" className=''>
              <span className='span-style'>Desserts:</span>
              <ol className='list-style'>
                <li>Gulab Jamun  ... 90 Rs</li>
                <li>Rasgulla ... 90 Rs</li>
              </ol>
            </div>

            <div id="Accompaniments" className='Menu-head'>
              <span className='span-style'>Accompaniments:</span>
              <ol className='list-style'>
                <li>Raita ... 90 Rs</li>
                <li>Papadum ... 90 Rs</li>
              </ol>
            </div>

          </div>

        </div>
      </section>

      <Cards></Cards>


      <div className='relative new-bg'>
        <p className='text-center text-4xl py-10 font-bold md:text-6xl lg:text-8xl'>We are Here</p>
        <iframe src={a} className='w-full h-80 border-2 border-black'></iframe>
        
      </div>

      {/* https://maps.app.goo.gl/epYQmtErkPgmxPALA */}

      {/* _________________________________After Map______________________________________________ */}

      

      <Reservation></Reservation>
      <Footer></Footer>

    </>
  )
}

export default App