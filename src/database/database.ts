import mongoose from 'mongoose';
import config from '../config/config';
const { Sequelize } = require('sequelize');

(async () => {
    try {
        // opcional
        // const db = await mongoose.connect('mongodb://localhost:27017/back-ionic',{
        //     useNewUrlParser: true,
        //     useUnifiedtopology: true
        // });

        const db = await mongoose.connect(config.mongodbURL);
        console.log('connect sucess bd', db.connection.name);

        //  Option 3: Passing parameters separately (other dialects)
        const sequelize = new Sequelize(config.NAME_DATA_BASE, config.USER_NAME, config.PASSWORD, {
            host: config.SEQUELIZE_URI,
            dialect: config.TIPY_CONNECTION, /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
            dialectModule: require('mysql2'),
        });

        await sequelize.authenticate();
        console.log('connect sucess bd for sequelize', sequelize.getNameDataBase  );


    } catch (error) {
        console.log(error);
    }

})();