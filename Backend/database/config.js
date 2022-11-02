const mongoose = require("mongoose");


const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true

            
        });

        console.log('base de datos conectada...');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos');
    }
};

module.exports = {
    dbConnection
}