const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    re.send('create task')
}

const getTask = (req, res) => {
    re.send('get single task')
}

const updateTask = (req, res) => {
    re.send('update task')
}

const deleteTask = (req, res) => {
    re.send('delete task')
}


module.exports = {
    getAllTasks,
    createTask, 
    getTask,
    updateTask, 
    deleteTask
}