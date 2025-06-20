// Task Management App Enhancements

// 1. Categories & Color Tags
const categories = {
    Work: '#ffb347',
    Personal: '#77dd77',
    Shopping: '#aec6cf'
};

// 2. Due Dates & Reminders
function isOverdue(dueDate) {
    return new Date(dueDate) < new Date();
}

// 3. Drag & Drop Reordering
// Use a library like SortableJS or implement HTML5 drag-and-drop

// 4. Task Priority
const priorities = {
    Low: 'green',
    Medium: 'orange',
    High: 'red'
};

// 5. Persistent Storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// 6. Dark/Light Mode Toggle
document.getElementById('themeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
}

// 7. Motivational Quotes
const quotes = [
    "You can do it!",
    "Stay positive, work hard!",
    "Every day is a fresh start."
];
function showRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteBox').textContent = quote;
}

// 8. Task Completion Animation
function showConfetti() {
    // Use a confetti library or simple canvas animation
}