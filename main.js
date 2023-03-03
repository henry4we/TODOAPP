
// Create an array to store the todo objects
const todoItems = [];

// Define the factory function for creating new todo objects
function addTodo(text) {
  const todo = {
    text: text,
    checked: false,
    id: Date.now()
  };
  todoItems.push(todo);
  console.log(todoItems);
}

const addButton = document.querySelector('#addTask');
addButton.addEventListener('click', () => {
  // Get the task text from the input field
  const inputTask = document.querySelector('#inputTask');
  const text = inputTask.value;
  
  // Check if the task is empty
  if (text === '') {
    alert('Please add something');
    return;
  }
  
  // Add the task to the todoItems array
  addTodo(text);
  
  // Clear the value of the input field
  inputTask.value = '';
  
  // Focus the input field
  inputTask.focus();
});

function renderTodo(text) {
    // Create a new <li> element to contain the task
    const task = document.createElement('li');
    task.textContent = text;
    
    // Add the task to the unordered list
    const todoList = document.querySelector('#todo-list');
    todoList.appendChild(task);
  }

  function addTodo(text) {
    const todo = {
      text: text,
      checked: false,
      id: Date.now()
    };
    todoItems.push(todo);
    console.log(todoItems);
    
    // Render the todo item
    renderTodo(text);
  }

  // Create a button to remove the last added todo item
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';

// Add the button to the input-container div
const inputContainer = document.querySelector('#input-container');
inputContainer.appendChild(removeButton);

removeButton.addEventListener('click', () => {
    // Check if there are any todo items
    if (todoItems.length === 0) {
      alert('There are no items to remove');
      return;
    }
    
    // Remove the last added todo item
    todoItems.pop();
    
    // Remove the corresponding <li> element from the unordered list
    const todoList = document.querySelector('#todo-list');
    todoList.removeChild(todoList.lastChild);
  });

  function renderTodo(text) {
    // Create a new <li> element to contain the task
    const task = document.createElement('li');
    task.textContent = text;
    
    // Add the task to the unordered list
    const todoList = document.querySelector('#todo-list');
    todoList.appendChild(task);
  }

