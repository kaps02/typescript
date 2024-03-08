import {Router} from "express";
import {Todo} from "../models/todos";

const todos : Todo [] = [];

const router = Router();


router.get('/' , (req ,res ,next)=>{
    res.status(200).json({todos : todos});
});

router.get('/todos' , (req ,res)=>{
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : req.body.text,

    };
    todos.push(newTodo);

})

export default router
