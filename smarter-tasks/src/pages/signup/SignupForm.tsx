/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

console.log('API_ENDPOINT:', API_ENDPOINT);

type Inputs = {
    organisationName: string
    userName: string
    userEmail: string
    userPassword: string
}

const SignupForm: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    //State to handle errors..
    const [error, setError] = useState(null);

    const [organisationName, setOrganisationName] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = async() => {
        // event.preventDefault();

        try {
            const response = await fetch(`${API_ENDPOINT}/organisations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword }),
            });

            if (!response.ok) {
                throw new Error('Sign-up failed');
            }

            // extract the response body as JSON data
            const data = await response.json();

            // if successful, save the token in localStorage
            localStorage.setItem('authToken', data.token);

            // if successful, save the user info in localStorage
            localStorage.setItem("userData", JSON.stringify(data.user));

            console.log('Sign-up successful');

            navigate("/account");

        } catch (error) {
            console.error('Sign-up failed:', error);
            setError(error as React.SetStateAction<null>);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error &&
                <span>{error}</span>
            }
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
                <input type="text"
                    {...register('organisationName', { required: true })}
                    id="organisationName" 
                    autoFocus
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
                {errors.organisationName && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
                <input
                    type="text"
                    {...register('userName', { required: true })}
                    id="userName"
                    autoFocus
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                />
                {errors.userName && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                    type="email"
                    {...register("userEmail", {required : true})}
                    id="userEmail"
                    value={userEmail}
                    autoFocus
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" 
                    />
                    {errors.userEmail && <span>This field is required</span>}
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Password:</label>
                <input
                    type="password" 
                    {...register("userPassword", {required : true})}
                    id="userPassword" 
                    autoFocus
                    value={userPassword} 
                    onChange={(e) => setUserPassword(e.target.value)} 
                    className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" 
                />
                {errors.userPassword && <span>This field is required</span>}
            </div>
            <button 
                type="submit" 
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">
                Sign up
            </button>
        </form>
    );
};

export default SignupForm;