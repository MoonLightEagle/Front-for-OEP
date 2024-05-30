import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for backend requests

type TProps = {
    token:string,
    setToken:(v:string)=>void
}
const Registration : React.FC<TProps> = (props) =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: '',
        address: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event :any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        // Basic form validation (can be enhanced)
        if (!formData.email || !formData.password || !formData.repeatPassword) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }
        if (formData.password !== formData.repeatPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        try {
           /*await axios.post('http://localhost:8080/users', formData);
            setSuccessMessage('Registration successful!');
            setFormData({ // Clear form after successful registration
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                repeatPassword: '',
                phoneNumber: '',
                address: '',
            });*/

            await axios({
                method: 'post',
                url: 'http://localhost:8080/users',
                data: formData,
                headers: {"Bearer":props.token}



            });
            setSuccessMessage('Registration successful!');

        } catch (error) {
            console.error('Registration error:', error); // Log the error for debugging
            setErrorMessage('Registration failed. Please try again later.');
        }
    };

    return (
        <div className="registration-form">
            <h2>Registration</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
