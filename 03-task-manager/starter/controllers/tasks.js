const { Error } = require('mongoose')
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    // Mongoose models have static helper functions for CRUD operations
    // These return Query objects. Even though these are not Promises
    // we can still use await, since they can be used as a promise
    // given that they have a Query.then() function
    try{
        const tasks = await Task.find({}).exec()
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch (error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try{
        // Set req.params.id with alias taskID
        const {id:taskID} = req.params
        const task =await Task.findOne({_id: taskID}).exec()

        if (!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }catch (error){
        res.status(500).json({msg:error})
    }
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTask, 
    getTask,
    updateTask, 
    deleteTask
}