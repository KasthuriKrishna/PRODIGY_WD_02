import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vehicles');
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };
        fetchVehicles();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRegisterClick = () => {
        navigate('/register');
    };
    const handleEditClick = () => {
        navigate('/edit');
    };

    return (
        <div>
            <h2>Vehicle Catalog</h2>
            <input
                type="text"
                placeholder="Search by model"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Color</th>
                        <th>Model</th>
                        <th>VIN</th>
                        <th>Year of Manufacture</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.make}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.vin}</td>
                            <td>{vehicle.yearOfManufacture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleRegisterClick}>Register Vehicle</button>
            <button onClick={handleEditClick}>Edit Vehicle</button>
        </div>
    );
};

export default VehicleList;
