const input = document.getElementsByTagName('input')[0];
const form = document.getElementsByTagName('form')[0];
const ul = document.getElementsByTagName('ul')[0];
const tasks = [
  { text: 'water the flower' },
  { text: 'take out the trash' },
  { text: 'take over the world' },
];

getTasks().then(renderTasks);
// loadTasks();
renderTasks();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(input.value);

  input.value = '';
});

window.addEventListener('storage', (event) => {
  if (event.key === 'tasks') {
    loadTasks();
    renderTasks();
  }
})

function addTask(text) {
  tasks.push({ text });
  renderTasks();
  saveChanges();
}

function renderTasks() {
  ul.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    ul.appendChild(li);
  });
}

function saveChanges() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem('tasks');
  if (data) {
    tasks.splice(0, tasks.length, ...JSON.parse(data));
  }
}

function getTasks() {
  fetch('/api/tasks')
}
