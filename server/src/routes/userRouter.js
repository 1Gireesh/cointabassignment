const { Router } = require('express');
const userModel = require('../models/userModel');
const axios = require('axios')


const app = Router();


app.get('/getusers', async (req, res) => {
    const { page = 1, gender = '', limit = 10 } = req.query
    try {

        const users = await userModel.find(gender ? { gender } : {}).skip(page - 1).limit(limit);
        return res.status(200).send(users)

    } catch (e) {
        return res.status(501).send(e.message)
    }
})

app.get('/setusers', async (req, res) => {

    try {
        let r = await axios('https://randomuser.me/api/?results=50')
        await userModel.insertMany(r.data.results)
        res.status(201).send('Data saved successfully!')
    } catch (e) {
        return res.status(501).send(e.message)
    }
})

app.delete('/deleteusers', async (req, res) => {
    try {
        await userModel.deleteMany()
        res.status(200).send('Data deleted successfully!')
    } catch (e) {
        return res.status(501).send(e.message)
    }
})


module.exports = app;