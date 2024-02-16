import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email, password: password }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            // Handle login success (e.g., redirect to another page)
        } else {
            console.log('Login failed');
            // Handle login failure (e.g., show an error message)
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

}

export default LoginForm;
