const {postButtonService, getAllButtonsService, patchCounterService, deleteButtonService}=require('../services/buttonServices')

//Controller para crear un boton nuevo
const postButton=async(req,res)=>{
    const{name}=req.body;
    try {
        if(name){
            const newButton=await postButtonService(name);
            if(newButton.name){
                res.status(201).json(newButton);
            }else{
                res.status(400).json({error:newButton})
            }
        }else{
            res.status(400).json({error:'Falta el nombre'})
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Controller para obtener todos los botones
const getAllButtons=async(req,res)=>{
    try {
        const allButtons=await getAllButtonsService();
        res.status(200).json(allButtons)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Controller para aumentar el contador de clicks de cada boton segun su id
const patchCounter=async(req,res)=>{
    const{id}=req.params;
    try {
        const allButtons=await patchCounterService(id);
        if(allButtons.length){
            res.status(200).json(allButtons)
        }else{
            res.status(404).json({error:allButtons})
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Controller para eliminar boton segun su id
const deleteButton=async(req,res)=>{
    const{id}=req.params
    try {
        const allButtons=await deleteButtonService(id)
        res.status(200).json(allButtons)
    } catch (error) {
        res.status(500).json({error:error.message});
    }

}

module.exports={
    postButton,
    getAllButtons,
    patchCounter,
    deleteButton
}