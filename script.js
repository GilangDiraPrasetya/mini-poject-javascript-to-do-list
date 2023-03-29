window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list = document.querySelector('#tasks');

  if (typeof Storage !== 'undefined') console.log('available');
  else console.log('oopps');

  function syncLocalStorage(activity, item);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;
    if (todo == '') return alert('List Tidak Boleh Kosong!');

    alert('List Berhasil Ditambahkan');

    const todoList = document.createElement('div');
    todoList.classList.add('task');

    const todoContent = document.createElement('div');
    todoContent.classList.add('content');

    todoList.appendChild(todoContent);

    const todoInput = document.createElement('input');
    todoInput.classList.add('text');
    todoInput.type = 'text';
    todoInput.value = todo;
    todoInput.setAttribute('readonly', 'readonly');

    todoContent.appendChild(todoInput);

    todoInput.focus();

    const todoActions = document.createElement('div');
    todoActions.classList.add('actions');

    const todoEdit = document.createElement('button');
    todoEdit.classList.add('edit');
    todoEdit.innerText = 'Edit';

    const todoDelete = document.createElement('button');
    todoDelete.classList.add('delete');
    todoDelete.innerText = 'Delete';

    todoActions.appendChild(todoEdit);
    todoActions.appendChild(todoDelete);

    todoList.appendChild(todoActions);

    list.appendChild(todoList);

    input.value = '';

    todoEdit.addEventListener('click', (e) => {
      if (todoEdit.innerText.toLowerCase() == 'edit') {
        todoEdit.innerText = 'Save';
        todoInput.removeAttribute('readonly');
        todoInput.focus();
      } else {
        todoEdit.innerText = 'Edit';
        todoInput.setAttribute('readonly', 'readonly');
        alert('List Berhasil Diperbarui');
      }
    });

    todoDelete.addEventListener('click', (e) => {
      list.removeChild(todoList);
      alert('List Berhasil Dihapus');
    });
  });
});
