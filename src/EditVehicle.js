import React, { useState } from 'react';
import axios from 'axios';

const UpdateVehicle = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [updatedVehicle, setUpdatedVehicle] = useState({
        make: '',
        model: '',
        color: '',
        vin: '',
        yearOfManufacture: ''
    });

    const handleChange = (e) => {
        setVehicleId(e.target.value);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/vehicles/${vehicleId}`, updatedVehicle);
            alert('Vehicle updated successfully!');
        } catch (error) {
            console.error('Error updating vehicle:', error);
            alert('Error updating vehicle. Please try again.');
        }
    };

    // Function to handle changes in updated vehicle data
    const handleVehicleChange = (e) => {
        setUpdatedVehicle({ ...updatedVehicle, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Update Vehicle</h2>
            <label>Enter Vehicle ID:</label>
            <input type="text" value={vehicleId} onChange={handleChange} />

            {/* Input fields for updated vehicle data */}
            <div>
                <label>Make:</label>
                <input type="text" name="make" value={updatedVehicle.make} onChange={handleVehicleChange} />
            </div>
            <div>
                <label>Model:</label>
                <input type="text" name="model" value={updatedVehicle.model} onChange={handleVehicleChange} />
            </div>
            <div>
                <label>Color:</label>
                <input type="text" name="color" value={updatedVehicle.color} onChange={handleVehicleChange} />
            </div>
            <div>
                <label>VIN:</label>
                <input type="text" name="vin" value={updatedVehicle.vin} onChange={handleVehicleChange} />
            </div>
            <div>
                <label>Year of Manufacture:</label>
                <input type="text" name="yearOfManufacture" value={updatedVehicle.yearOfManufacture} onChange={handleVehicleChange} />
            </div>

            {/* Button to trigger the update */}
            <button onClick={handleUpdate}>Update Vehicle</button>
        </div>
    );
};

export default UpdateVehicle;
