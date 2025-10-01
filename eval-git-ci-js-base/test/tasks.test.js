const { getTasks, addTask, reset } = require('../lib/tasks');

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
