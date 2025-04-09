import React, { useState } from 'react';
import axios from 'axios';

const AddAnimal = () => {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        age: 0,
        price: 0,
        healthStatus: 'Healthy',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/animals', formData)
            .then(() => alert('Animal added successfully'))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="species" placeholder="Species" onChange={handleChange} />
            <input type="text" name="breed" placeholder="Breed" onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} />
            <select name="healthStatus" onChange={handleChange}>
                <option value="Healthy">Healthy</option>
                <option value="Needs Attention">Needs Attention</option>
            </select>
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            <button type="submit">Add Animal</button>
        </form>
    );
};

export default AddAnimal;
