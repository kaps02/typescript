import {Router} from "express";
import {Todo} from "../models/todos";

var  todos : Todo [] = [];

const router = Router();


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
const tid = req.params.todoId;

const todoIndex = todos.findIndex((todoItm) => todoItm.id === tid);
if(todoIndex >= 0){
    todos[todoIndex]  = {id:todos[todoIndex].id , text : req.body.text};
    return res.status(200).json({success:true});
}
res.status(404).json({success : true});
});

router.delete('todo/:todoId' , (req ,res)=>{
    todos = todos.filter((todoItm)=>todoItm.id !== req.params.todoId);
    res.status(200).json({message:"deleted successfully"});

})

export default router

