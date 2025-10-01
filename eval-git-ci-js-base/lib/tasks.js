
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
  if (typeof name !== 'string') {
    throw new Error('Task name is required and must be a string');
  }
  
  const trimmedName = name.trim();
  if (trimmedName === '') {
    throw new Error('Task name cannot be empty');
  }
  
  const task = {
    id: nextId++,
    name: trimmedName,
    done: false
  };
  
  tasks.push(task);
  return task;
}

function reset() {
  tasks = [];
  nextId = 1;
}

function toggleTask(id, tasks) {
  for(i = 0; i < tasks.length; i++)
      if(tasks[i].id == id) 
        tasks[i].done = true;
}

module.exports = { getTasks, addTask, reset, toggleTask };
