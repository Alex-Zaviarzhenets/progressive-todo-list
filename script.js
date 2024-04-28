const input = document.getElementsByTagName('input')[0];
const form = document.getElementsByTagName('form')[0];
const ul = document.getElementsByTagName('ul')[0];
const tasks = [
  { text: 'water the flower' },
  { text: 'take out the trash' },
  { text: 'take over the world' },
];

renderTasks();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(input.value);
  
  input.value = '';
});

function addTask(text) {
  tasks.push({ text });
  renderTasks();
}

function renderTasks() {
  ul.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    ul.appendChild(li);
  });
}
