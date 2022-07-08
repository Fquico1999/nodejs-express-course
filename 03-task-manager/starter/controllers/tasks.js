const { Error } = require('mongoose')
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    // Mongoose models have static helper functions for CRUD operations
    // These return Query objects. Even though these are not Promises
    // we can still use await, since they can be used as a promise
    // given that they have a Query.then() function
    try{
        const allTasks = await Task.find({}).exec()
        res.status(200).json(allTasks)
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

const getTask = (req, res) => {
    res.json({id:req.params.id})
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