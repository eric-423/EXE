const express = require('express');
const { sequelize } = require('./models')
const app = express();
const { rootRouter } = require('./routers/index')

app.use(express.json())

const path = require('path')
const publicPath = path.join(__dirname, './public')

app.use(express.static(publicPath))

app.use('/api/v1', rootRouter)

app.listen("3000", async () => {
    console.log('App Running At Port 3000')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

