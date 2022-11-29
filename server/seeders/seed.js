const db = require('../config/connection');
const { Parent } = require('../models');
const parentSeeds = require('./parentData.json');

db.once('open', async () => {
    try {
        await Parent.deleteMany({});
        await Parent.create(parentSeeds);

        console.log('all done');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });
