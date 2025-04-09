const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

// Fetch all animals
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new animal
router.post('/', async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update an animal
router.put('/:id', async (req, res) => {
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAnimal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete an animal
router.delete('/:id', async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Animal deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
