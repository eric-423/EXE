const express = require('express');
const { sequelize } = require('./models')
const app = express();
const { rootRouter } = require('./routers/index')
require('dotenv').config();

app.use(express.json())

const path = require('path')
const publicPath = path.join(__dirname, './public')

app.use(express.static(publicPath))

app.use('/api/v1', rootRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log('App Running At Port 5000')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

