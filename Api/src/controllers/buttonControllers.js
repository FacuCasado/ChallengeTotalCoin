const {Button}=require('../db');

const postButtonController=async(name)=>{
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

const getAllButtonsController=async()=>{
    const response=await Button.findAll({
        order:[['name','ASC']]
    });
    return response
}

const patchCounterController=async(id)=>{
    const clickedButton=await Button.findByPk(id);
    if(clickedButton){
        clickedButton.counter++;
        clickedButton.save();
        return clickedButton;
    }else{
        return 'Botón no encontrado'
    }
}

module.exports={
    postButtonController,
    getAllButtonsController,
    patchCounterController
}
