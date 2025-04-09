import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/animals')
            .then(response => setAnimals(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Animal Inventory</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal._id}>
                        <strong>{animal.name}</strong> - {animal.species} - {animal.breed || 'Unknown Breed'} - ${animal.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
