import React, { useState } from 'react';
import axios from 'axios';

const VehicleRegistrationForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        make: '',
        color: '',
        model: '',
        vin: '',
        yearOfManufacture: '' // Adjusted field name
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/vehicles', formData);
            alert('Vehicle registered successfully!');
            // Clear form fields after successful registration
            setFormData({
                id: '',
                make: '',
                color: '',
                model: '',
                vin: '',
                yearOfManufacture: '' // Adjusted field name
            });
        } catch (error) {
            console.error('Error registering vehicle:', error);
            alert('Error registering vehicle. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
            </label>
            <label>
                Make:
                <input type="text" name="make" value={formData.make} onChange={handleChange} />
            </label>
            <label>
                Color:
                <input type="text" name="color" value={formData.color} onChange={handleChange} />
            </label>
            <label>
                Model:
                <input type="text" name="model" value={formData.model} onChange={handleChange} />
            </label>
            <label>
                VIN:
                <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
            </label>
            <label>
                Year of Manufacture:
                <input type="text" name="yearOfManufacture" value={formData.yearOfManufacture} onChange={handleChange} /> {/* Adjusted field name */}
            </label>
            <button type="submit">Register Vehicle</button>
        </form>
    );
};

export default VehicleRegistrationForm;
