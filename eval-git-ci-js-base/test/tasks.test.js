const { getTasks, toggleTask, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('is toggle task to done', () => {
  //Arrange
  tasks = [
    {
      id:1,
      name: "fake",
      done: false
    }
  ]
  
  toggleTask(1, tasks)
  expect(tasks[0].done).toBe(true);
});