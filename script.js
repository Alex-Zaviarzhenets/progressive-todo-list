const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];


button.addEventListener('click', (event) => {
  event.preventDefault();
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementsByTagName('ul')[0].appendChild(li);
  input.value = '';
})