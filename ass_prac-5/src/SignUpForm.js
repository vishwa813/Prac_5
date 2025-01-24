// src/SignUpForm.js
import React, { useState } from 'react';
import './App.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
        dob: '',
        gender: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.mobile) errors.mobile = 'Mobile is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.dob) errors.dob = 'Date of Birth is required';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.username) errors.username = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        if (isFormValid) {
            console.log('Form submitted:', formData);
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            address: '',
            dob: '',
            gender: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
        setFormErrors({});
        setIsFormValid(false);
    };

    return (
        <div>
            <h1>Sign-Up Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {formErrors.name && <span>{formErrors.name}</span>}
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                    {formErrors.mobile && <span>{formErrors.mobile}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <span>{formErrors.email}</span>}
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    {formErrors.address && <span>{formErrors.address}</span>}
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    {formErrors.dob && <span>{formErrors.dob}</span>}
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {formErrors.gender && <span>{formErrors.gender}</span>}
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    {formErrors.username && <span>{formErrors.username}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
                </div>
                <div>
                    <button type="submit" disabled={!isFormValid}>Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;