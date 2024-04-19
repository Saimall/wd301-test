/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

// First we will import the API_ENDPOINT constant from the `config` folder
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string,
  password: string
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  //State to handle errors..
  const [error, setError] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Then we will define the handle submit function
  const onSubmit:SubmitHandler<Inputs> = async() => {
    // event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        alert("Invalid credentials");
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');

      // extract the response body as JSON data
      const data = await response.json();

      // After successful signin, first we will save the token in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      navigate("/account");

    } catch (error) {
      console.error('Sign-in failed:', error);
      setError(error as React.SetStateAction<null>)
    }
  };

  // Then we will use the handleSubmit function with our form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && 
        <span>{error}</span>
      }
      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          autoFocus
          value={email}
          {...register('email', { required: true })}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          autoFocus
          value={password}
          {...register('password', { required: true })}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray"
        >
          Sign In
        </button>
      </div>

      <br />
      <button className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" id="backToHomeButton">
        <a href="/signup" className='text-bold text-m'>
          New Here? SignUp
        </a>
      </button>
    </form>
  );
};

export default SigninForm;