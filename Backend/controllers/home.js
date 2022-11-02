const Formulario = require("../models/Formulario");


const formulario = async(req, res) =>{
    const {name, email} = req.body;
    try {

        //ver si el email no fue usado
        const formulario = await Formulario.findOne({email});
        if(formulario){
            return res.status(400).json({
                ok: false,
                msg: 'Ya fue enviado un mensaje con ese email'
            });
        }
        
        //Crear un usuario con el modelo
        const dbUser = new Formulario(req.body);
        //Guardar en base de datos
        await dbUser.save();

        return res.status(201).json({
            ok: true,
            msg: 'Mensaje enviado',
            name,
            email
        });
        

        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `No es posible mandar mensaje, hable con el administrador`
        });
    }
}


module.exports ={
    formulario
}