import React, { useState } from 'react';

const TransparentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    time: '',
    date: '',
    numberOfGuests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen pt-40">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 bg-cover bg-center" style={{backgroundImage: 'url("https://source.unsplash.com/random/800x600")'}}>
          <div className="bg-gradient-to-b from-transparent to-black bg-opacity-75 p-8 md:p-12 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold mb-4">Reserve your table Now</h2>
            <p className="text-lg text-center">Enjoy a delightful dining experience with us!</p>
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-center text-2xl mb-6">Contact Us</h2>
            <div>
              <label htmlFor="name" className="block mb-1 text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1 text-lg">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1 text-lg">Preferred Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1 text-lg">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <div>
              <label htmlFor="numberOfGuests" className="block mb-1 text-lg">Number of Guests</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            >
              Reserve Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransparentForm;
