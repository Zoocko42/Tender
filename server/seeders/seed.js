const db = require('../config/connection');
const { Parent, Sitter, SitterReq } = require('../models');
const parentSeeds = require('./parentData.json');
const sitterSeeds = require('./sitterData.json');
const sitterReqs = require('./sitterReq.json');

db.once('open', async () => {
    try {
        await Parent.deleteMany({});
        await Parent.create(parentSeeds);
        await Sitter.deleteMany({});
        await Sitter.create(sitterSeeds);
        await SitterReq.deleteMany({});
        await SitterReq.create(sitterReqs);

        console.log('all done');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });
