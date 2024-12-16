import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LayoutSignin() {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State to display feedback messages
  const [message, setMessage] = useState<string | null>(null);

  // Handler to manage input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // **Client-Side Validation**
    if (!formData.username.trim()) {
      setMessage('Username is required.');
      return;
    }

    if (!formData.password.trim()) {
      setMessage('Password is required.');
      return;
    }

    try {
      // Send data to the backend
      const response = await axios.post<string>(
        'https://9z87tp-3500.csb.app/auth/login', // Replace with your actual endpoint
        {
          username: formData.username,
          password: formData.password,
        },
      );

      // Handle successful response
      if (response.data) {
        setMessage(response.data);
      } else {
        setMessage('Unexpected response from the server. Please try again.');
      }
      console.log('Form Data Sent:', formData);
      console.log('Response:', response.data);
    } catch (error: any) {
      // Handle errors
      setMessage(error.response?.data?.message || 'An error occurred during sign-in.');
    }
  };

  return (
    <div className="bg-Background/Bottom bg-[url('assets/particle.svg')] bg-no-repeat bg-center bg-cover text-center w-full mt-0 p-10 relative border-Primary/Dark border-solid box-border border-2 rounded-b-3xl mb-28 sm:p-10 md:p-14 lg:p-16 xl:p-20">
      <form onSubmit={handleSubmit}>
        <h3 className='text-3xl text-white m-6 pt-10'>SIGN IN</h3>
        <input
          type='text'
          placeholder='Username'
          className='bg-inputbox-Sign rounded-3xl p-3 w-3/4 text-l m-6 md:w-2/3 lg:w-1/2 xl:w-1/3'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <input
          type='password'
          placeholder='Password'
          className='bg-inputbox-Sign rounded-3xl p-3 w-3/4 text-l m-6 md:w-2/3 lg:w-1/2 xl:w-1/3'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        {message && <p className='text-l text-red-500 m-6'>{message}</p>}
        <p className='text-l text-white m-6'>
          Don't have an account?{' '}
          <Link to='/signup' className='font-bold'>
            Sign up!
          </Link>
        </p>
        <button className='w-32 h-10 rounded-xl bg-white text-xl text-Primary/Dark m-6 hover:bg-Primary/Dark hover:text-white'>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LayoutSignin;

