const request = require('supertest'); 
const express = require('express');

const server = require('./server.js');


server.use(express.json());

describe('server test', () => {
    describe(' / GET enpoint',() => {
        it('should test the api is working', async () => {
            const response = await request(server).get('/');
    
            expect(response.status).toEqual(200);
            expect(response.body).toEqual({ api: "up" });
        })
    })

    describe('/people POST endpoint', () => {
        it('should answering with 200 status', async () => {
            const response = await request(server).post('/people').send({ name: 'whatever' })
            expect(response.status).toEqual(200);
        })

        it('should sending a message if the wrong body is passed', async () => {
            const response = await request(server).post('/people').send({n: "m"});

            expect(response.body).toEqual({ message: "Please provide a name for the person."})
        })
    })

    // describe('/people DELETE endpoint', () => {
    //     it('should answering with 200 status', async () => {
    //         const response = await request(server).delete('/people').send({ name: 'whatever' })
    //         expect(response.status).toEqual(200);
    //     })

    // })
})