import mongoose from 'mongoose';
import config from '../config/config';

(async () => {
    try {
        // opcional
        // const db = await mongoose.connect('mongodb://localhost:27017/back-ionic',{
        //     useNewUrlParser: true,
        //     useUnifiedtopology: true
        // });
        const db = await mongoose.connect(config.mongodbURL);
        console.log('connect sucess bd', db.connection.name);

    } catch (error) {
        console.log(error);
    }

})();