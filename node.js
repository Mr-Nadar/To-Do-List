document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('taskInput');        // was 'todo-input'
    const addBtn = document.getElementById('addTaskButton');   // was 'add-btn'
    const list = document.getElementById('taskList');          // was 'todo-list'

    function addTask() {
        const task = input.value.trim();
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        // Optional: Add a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✕';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.background = 'transparent';
        removeBtn.style.border = 'none';
        removeBtn.style.color = '#fff';
        removeBtn.style.cursor = 'pointer';
        removeBtn.onclick = function () {
            list.removeChild(li);
        };

        li.appendChild(removeBtn);
        li.style.background = '#fcb69f';
        li.style.margin = '6px 0';
        li.style.padding = '8px';
        li.style.borderRadius = '5px';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';

        list.appendChild(li);
        input.value = '';
        input.focus();
    }

    addBtn.addEventListener('click', addTask);
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') addTask();
    });
});
