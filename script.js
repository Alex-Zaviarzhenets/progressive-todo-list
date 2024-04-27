const input = document.getElementsByTagName('input')[0];
const form = document.getElementsByTagName('form')[0];
const ul = document.getElementsByTagName('ul')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(input.value);
  input.value = '';
})

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

