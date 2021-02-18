/*
DOM selection
add event listener
basic validation
create element
append 
*/

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const addButton = document.getElementById('add-button');
const bookList = document.getElementById('book-list');

addButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (title.value === '' || author.value === '' || year.value === '') {
    alert('Please enter All kind of Information');
  } else {
    const tbody = document.getElementById('book-list');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <th>${title.value}</th>
    <th>${author.value}</th>
    <th>${year.value}</th>
    `;
    tbody.appendChild(tableRow);
  }
  title.value = '';
  author.value = '';
  year.value = '';
});
