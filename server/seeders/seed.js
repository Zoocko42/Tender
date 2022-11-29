const db = require('../config/connection');
const { Parent, Sitter } = require('../models');
const parentSeeds = require('./parentData.json');
const sitterSeeds = require('./sitterData.json')

db.once('open', async () => {
    try {
        await Parent.deleteMany({});
        await Parent.create(parentSeeds);
        await Sitter.deleteMany({});
        await Sitter.create(sitterSeeds);

        console.log('all done');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });
