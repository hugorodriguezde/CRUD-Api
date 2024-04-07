
const Location = require('../models/Map');


exports.saveLocation = async (req, res) => {
    try {
        const { name, latitude, longitude } = req.body;

        
        const location = new Location({
            name,
            latitude,
            longitude
        });

        await location.save();
        res.status(201).json(location);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getLocations = async (req, res) => {
    try {
        
        const locations = await Location.find();
        res.json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};