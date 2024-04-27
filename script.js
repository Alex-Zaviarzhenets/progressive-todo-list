const input = document.getElementsByTagName('input')[0];
const form = document.getElementsByTagName('form')[0];
const ul = document.getElementsByTagName('ul')[0];
const tasks = []

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTaskToArray(input.value);
  addTask()
  input.value = '';
})

// function addTask(text) {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

function addTaskToArray(text) {
  tasks.push(text);
}

function addTask(text) {
 ul.innerHTML = '';
 tasks.forEach((task) => {
   const li = document.createElement('li');
   li.textContent = task;
   ul.appendChild(li);
 })
}
