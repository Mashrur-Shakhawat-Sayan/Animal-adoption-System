import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalList from './components/AnimalList';
import AddAnimal from './components/AddAnimal';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AnimalList />} />
                <Route path="/add" element={<AddAnimal />} />
            </Routes>
        </Router>
    );
};

export default App;
