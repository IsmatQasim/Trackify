// Array to hold department data
let departments = [];
let editIndex = -1; // To track if we're editing an existing department

// Function to show the add/edit form
function showAddForm() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('dept-name').value = '';
    document.getElementById('dept-description').value = '';
    document.getElementById('form-title').innerText = 'Add New Department';
    editIndex = -1; // Reset edit index
}

// Function to hide the form
function hideForm() {
    document.getElementById('form-container').style.display = 'none';
}

// Function to add or update department
function addOrUpdateDepartment() {
    const name = document.getElementById('dept-name').value.trim();
    const description = document.getElementById('dept-description').value.trim();

    if (name === '' || description === '') {
        alert('Please fill in both fields.');
        return;
    }

    if (editIndex === -1) {
        // Add new department
        departments.push({ name, description });
    } else {
        // Update existing department
        departments[editIndex] = { name, description };
        editIndex = -1; // Reset after editing
    }

    hideForm();
    renderTable();
}

// Function to render the table with department data
function renderTable() {
    const tbody = document.getElementById('department-tbody');
    tbody.innerHTML = ''; // Clear the table

    departments.forEach((dept, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dept.name}</td>
            <td>${dept.description}</td>
            <td>
                <button class="edit-btn" onclick="editDepartment(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteDepartment(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to edit a department
function editDepartment(index) {
    const dept = departments[index];
    document.getElementById('dept-name').value = dept.name;
    document.getElementById('dept-description').value = dept.description;
    document.getElementById('form-title').innerText = 'Edit Department';
    document.getElementById('form-container').style.display = 'block';
    editIndex = index;
}

// Function to delete a department
function deleteDepartment(index) {
    departments.splice(index, 1); // Remove department from array
    renderTable(); // Refresh the table
}

// Initial call to render the table (if there are any default values)
renderTable();