import {Router} from "express";
import {Todo} from "../models/todos";
import bodyParser from "body-parser";

var  todos : Todo [] = [];

const router = Router();
type reqBody = { text: string};
type paramsBody = {todoId : string};

router.get('/' , (req ,res ,next)=>{
    res.status(200).json({todos : todos});
});

router.post('/todos' , (req ,res)=>{
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : req.body.text,

    };
    todos.push(newTodo);
res.status(200).json({success : true ,  todos : newTodo})
})

router.put('/todos/:todoId' , (req ,res)=>{
    
const params = req.params as paramsBody
const tid = params.todoId;
const body = req.body as reqBody

const todoIndex = todos.findIndex((todoItm) => todoItm.id === tid);
if(todoIndex >= 0){
    todos[todoIndex]  = {id:todos[todoIndex].id , text : body.text};
    return res.status(200).json({success:true});
}
res.status(404).json({success : true});
});
try{
    
router.delete('/todos/:todoId' , (req ,res)=>{
    console.log(req.params.todoId);
    todos = todos.filter((todoItm)=>todoItm.id !== req.params.todoId);

    res.status(200).json({message:"deleted successfully"});

})
}catch(err){
    console.log('error' , err)
}

export default router

