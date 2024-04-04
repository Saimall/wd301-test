import React, { useState } from 'react';

// First we will import the API_ENDPOINT constant from the `config` folder
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Then we will define the handle submit function
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      
      // extract the response body as JSON data
      const data = await response.json();

      // After successful signin, first we will save the token in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };


    // Then we will use the handleSubmit function with our form
    return (
      <form onSubmit={handleSubmit}>
        
      </form>
    );
  };

  export default SigninForm;