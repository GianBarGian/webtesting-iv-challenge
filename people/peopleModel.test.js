const request = require('supertest'); 

const db = require('../data/dbConfig.js');
const people = require('./peopleModel');

describe('people test', () => {
    beforeEach(async () => { await db('people').truncate()});
    afterEach(async () => {await db('people').truncate()});
    
    it('should add a person and return that person', async () => {
       const person = await people.insert({ name: "Giacomo" });

       expect(person.name).toBe('Giacomo');
    })

    it("deletes a person correctly and return people", async () => {
        const person = await people.insert({ name: "Pippin" });
        await people.insert({ name: "Sam" });
        await people.insert({ name: "Belba" });
        const peopleArr = await people.remove(person.id);
        const peopleArrGet = await people.getAll();
        expect(peopleArr).toEqual(peopleArrGet);
      });
})

