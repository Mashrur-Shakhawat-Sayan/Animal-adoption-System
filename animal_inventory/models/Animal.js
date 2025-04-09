const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Animal name
    species: { type: String, required: true }, // Species, e.g., Dog, Cat
    breed: { type: String }, // Breed
    age: { type: Number, required: true }, // Age in months
    price: { type: Number, required: true }, // Price in dollars
    healthStatus: { type: String, default: 'Healthy' }, // Health status
    description: { type: String }, // Additional details
    addedDate: { type: Date, default: Date.now }, // Date when added
});

module.exports = mongoose.model('Animal', AnimalSchema);
