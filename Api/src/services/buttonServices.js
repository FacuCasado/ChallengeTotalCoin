const {Button}=require('../db');

//Crea un nuevo boton en la base de datos
const postButtonService=async(name)=>{
    const[newButton, created]=await Button.findOrCreate({
        where:{name:name},
        defaults:{name:name}
    });
    if(created){
        return newButton
    }else{
        return 'Botón ya existente'
    }
}

//Obtiene todos los botones de la base de datos
const getAllButtonsService=async()=>{
    const response=await Button.findAll({
        order:[['name','ASC']]
    });
    return response
}

//Aumenta el contador de clicks de un boton en la base de datos
const patchCounterService=async(id)=>{
    const clickedButton=await Button.findByPk(id);
    if(clickedButton){
        clickedButton.counter++;
        clickedButton.save();
        const allButtons=await Button.findAll();
        return allButtons
    }else{
        return 'Botón no encontrado'
    }
}

//Elimina un boton de la base de datos
const deleteButtonService=async(id)=>{
    const deleteButton=await Button.findByPk(id);
    if(deleteButton){
        await deleteButton.destroy();
        const allButtons=await Button.findAll();
        return allButtons
    }else{
       return('No se pudo eliminar el botón')
    }
}

module.exports={
    postButtonService,
    getAllButtonsService,
    patchCounterService,
    deleteButtonService
}
