const {postButtonController, getAllButtonsController, patchCounterController}=require('../services/buttonServices')

const postButton=async(req,res)=>{
    const{name}=req.body;
    try {
        if(name){
            const newButton=await postButtonController(name);
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

const getAllButtons=async(req,res)=>{
    try {
        const allButtons=await getAllButtonsController();
        res.status(200).json(allButtons)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const patchCounter=async(req,res)=>{
    const{id}=req.params;
    try {
        const clickedButton=await patchCounterController(id);
        if(clickedButton.name){
            res.status(200).json(clickedButton)
        }else{
            res.status(404).json({error:clickedButton})
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports={
    postButton,
    getAllButtons,
    patchCounter
}