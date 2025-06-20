document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('taskInput');        // was 'todo-input'
    const addBtn = document.getElementById('addTaskButton');   // was 'add-btn'
    const list = document.getElementById('taskList');          // was 'todo-list'

    function addTask() {
        const task = input.value.trim();
        const dueDate = document.getElementById('dueDateInput')?.value || '';
        const category = document.getElementById('categorySelect')?.value || '';
        const priority = document.getElementById('prioritySelect')?.value || '';
        if (task === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <span style="font-size:0.9em;color:#555;margin-left:8px;">${dueDate ? 'Due: ' + dueDate : ''}</span>
            <span style="font-size:0.9em;color:#555;margin-left:8px;">${category}</span>
            <span style="font-size:0.9em;color:#555;margin-left:8px;">${priority}</span>
        `;

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

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            document.querySelector('.main-container').classList.toggle('dark-mode');
            document.querySelector('.input-container').classList.toggle('dark-mode');
        });
    }
});
