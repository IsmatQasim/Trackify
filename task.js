document.getElementById('addTaskBtn').addEventListener('click', function() {
    document.getElementById('taskPopup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('taskPopup').style.display = 'none';
});

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const assignedTo = document.getElementById('assignedTo').value;
    const status = document.getElementById('status').value;

    const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = table.rows.length; // Row number
    newRow.insertCell(1).innerHTML = taskName;
    newRow.insertCell(2).innerHTML = dueDate;
    newRow.insertCell(3).innerHTML = assignedTo;
    newRow.insertCell(4).innerHTML = `<span class="${status.toLowerCase()}">${status}</span>`;
    newRow.insertCell(5).innerHTML = '<button>Action</button>';

    document.getElementById('taskForm').reset();
    document.getElementById('taskPopup').style.display = 'none';
});
