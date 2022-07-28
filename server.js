const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())


const url = 'https://e7994b8f-d826-44c5-a960-6f030f85bb51-southcentralus.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:HwQithiZmequOLQnGnRRTtrr:7ecc7390f3acd47a308202ae7b8a330ec761f96ccfaf831ea2166453f3dd86c1'


app.get('/tickets', async ( req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    }catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json',
            'timestamp': 'new Date().toString()' 
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