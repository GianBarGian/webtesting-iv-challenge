const express = require('express');

const people = require('../people/peopleModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.post('/people', async(req, res) => {
    const person = req.body;
    try {
        if (person.name) {
            const newPerson = await people.insert(person)

            res.status(200).json(newPerson);
        } else {
            res.status(400).json({ message: "Please provide a name for the person."})
        }
    } catch {
        res.status(500).json({ message: "something went wrong" });
    }
})

// server.delete('/people/:id', async (req, res) => {
//     const { id } = req.params;
//     try{
//         const newpeopleArr = await people.remove(id);
//         res.json(newpeopleArr)
//     } catch {
//         res.status(500).json({ message: "something went wrong" });
//     }
// })


module.exports = server;
