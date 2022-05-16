const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

const url = ''
const token = 'AstraCS:HwQithiZmequOLQnGnRRTtrr:7ecc7390f3acd47a308202ae7b8a330ec761f96ccfaf831ea2166453f3dd86c1'

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json' 
        },
        data: formData
    }
    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.listen(PORT, () => console.log('server running on PORT ' + PORT))