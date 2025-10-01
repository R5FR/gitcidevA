const { getTasks, toggleTask, addTask, reset, countDone } = require('../lib/tasks');


beforeEach(() => {
  reset();
});

describe('getTasks', () => {
  test('initial task list is empty', () => {
    expect(getTasks()).toEqual([]);
  });

  test('returns tasks after adding some', () => {
    addTask('Task 1');
    addTask('Task 2');
    
    const tasks = getTasks();
    expect(tasks).toHaveLength(2);
    expect(tasks[0].name).toBe('Task 1');
    expect(tasks[1].name).toBe('Task 2');
  });
});

describe('addTask', () => {
  test('adds a task with correct properties', () => {
    const task = addTask('Test task');
    
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('name', 'Test task');
    expect(task).toHaveProperty('done', false);
    expect(typeof task.id).toBe('number');
  });

  test('increments task IDs', () => {
    const task1 = addTask('First task');
    const task2 = addTask('Second task');
    
    expect(task2.id).toBe(task1.id + 1);
  });

  test('adds task to the task list', () => {
    addTask('New task');
    
    const tasks = getTasks();
    expect(tasks).toHaveLength(1);
    expect(tasks[0].name).toBe('New task');
  });

  test('trims whitespace from task name', () => {
    const task = addTask('  Trimmed task  ');
    
    expect(task.name).toBe('Trimmed task');
  });

  test('throws error for non-string task name', () => {
    expect(() => addTask(123)).toThrow('Task name is required and must be a string');
    expect(() => addTask(null)).toThrow('Task name is required and must be a string');
    expect(() => addTask(undefined)).toThrow('Task name is required and must be a string');
    expect(() => addTask({})).toThrow('Task name is required and must be a string');
  });

  test('throws error for empty task name', () => {
    expect(() => addTask('')).toThrow('Task name cannot be empty');
    expect(() => addTask('   ')).toThrow('Task name cannot be empty');
  });
});

describe('reset', () => {
  test('clears all tasks', () => {
    addTask('Task 1');
    addTask('Task 2');
    
    reset();
    
    expect(getTasks()).toEqual([]);
  });

  test('resets ID counter', () => {
    addTask('Task 1');
    addTask('Task 2');
    
    reset();
    
    const newTask = addTask('New task');
    expect(newTask.id).toBe(1);
  });
});

describe('toggleTask', () => {
  test('toggles task done status from false to true', () => {
    const task = addTask('Test task');
    
    const toggledTask = toggleTask(task.id);
    
    expect(toggledTask.done).toBe(true);
    expect(toggledTask.id).toBe(task.id);
    expect(toggledTask.name).toBe(task.name);
  });

  test('toggles task done status from true to false', () => {
    const task = addTask('Test task');
    toggleTask(task.id); // Set to true
    
    const toggledTask = toggleTask(task.id); // Toggle back to false
    
    expect(toggledTask.done).toBe(false);
  });

  test('throws error for non-existent task', () => {
    expect(() => toggleTask(999)).toThrow('Task not found');
  });

  test('updates the task in the tasks list', () => {
    const task = addTask('Test task');
    toggleTask(task.id);
    
    const tasks = getTasks();
    expect(tasks[0].done).toBe(true);
  });
});

describe('countDone', () => {
  test('returns 0 when no tasks are done', () => {
    addTask('Task 1');
    addTask('Task 2');
    
    expect(countDone()).toBe(0);
  });

  test('returns 0 when no tasks exist', () => {
    expect(countDone()).toBe(0);
  });

  test('returns correct count when some tasks are done', () => {
    const task1 = addTask('Task 1');
    const task2 = addTask('Task 2');
    const task3 = addTask('Task 3');
    
    toggleTask(task1.id);
    toggleTask(task3.id);
    
    expect(countDone()).toBe(2);
  });

  test('returns correct count when all tasks are done', () => {
    const task1 = addTask('Task 1');
    const task2 = addTask('Task 2');
    
    toggleTask(task1.id);
    toggleTask(task2.id);
    
    expect(countDone()).toBe(2);
  });

  test('updates count when task status changes', () => {
    const task = addTask('Test task');
    
    expect(countDone()).toBe(0);
    
    toggleTask(task.id);
    expect(countDone()).toBe(1);
    
    toggleTask(task.id);
    expect(countDone()).toBe(0);
  });
});