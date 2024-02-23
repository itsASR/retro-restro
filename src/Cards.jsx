import React from 'react'
import south from './south.png'
import north from './north.png'
import breakfast from './breakfast.jpg'
import continental from './continental.png'
import chinese from './chinese.png'
import dessert from './dessert.png'

function Cards() {
    return (
        <>
        <p className='text-center new-bg text-4xl pt-20 font-bold md:text-6xl text-red-500 font-serif'>Select More | Eat More</p>
            <div id="cards" className='grid grid-cols-1 md:grid-cols-3 md:px-6 gap-10 new-bg py-20 place-items-center [&>*]:py-6 [&>*]:rounded-3xl [&>*]:bg-white  [&>*]:text-red-600'>
                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={south} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">South Indian</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>


                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={north} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">North Indian</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={breakfast} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">Breakfast</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>


                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={continental} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">Continental</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>


                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={chinese} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">Chinese</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>


                <div className="max-w-sm overflow-hidden shadow-lg cursor-pointer" onClick={() => {alert("will update soon")}}>
                    <img className="w-40 mx-auto -pb-5" src={dessert} alt="Sunset in the mountains" />
                    <div className="px-6 ">
                        <div className="font-bold text-4xl mb-3 text-center ">Dessert</div>
                        <p className="text-gray-700 text-2xl font-bold pt-2">
                        From the Coast to Your Plate: Dive into South Indian Flavors!
                        </p>
                    </div>
                </div>


                              






            </div>
        </>
    )
}

export default Cards