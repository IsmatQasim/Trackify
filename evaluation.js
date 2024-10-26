document.addEventListener("DOMContentLoaded", function() {
    // Show the modal when "Add New Evaluation" button is clicked
    document.getElementById("add-evaluation-btn").onclick = function() {
        document.getElementById("evaluation-form").style.display = "block";
    };

    // Close the modal when the "X" (close) button is clicked
    document.getElementById("close-modal").onclick = function() {
        document.getElementById("evaluation-form").style.display = "none";
    };

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById("evaluation-form")) {
            document.getElementById("evaluation-form").style.display = "none";
        }
    };

    // Handle the form submission
    document.getElementById("evaluation-form-submit").onsubmit = function(event) {
        event.preventDefault(); // Prevent page refresh on form submission

        // Get values from the form inputs
        const task = document.getElementById("task").value;
        const name = document.getElementById("name").value;
        const evaluator = document.getElementById("evaluator").value;
        const performance = document.getElementById("performance").value;

        // Get the table body to add a new row
        const tableBody = document.getElementById("table-body");
        const rowCount = tableBody.rows.length;

        // Insert a new row at the end of the table
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = rowCount + 1;
        row.insertCell(1).innerHTML = task;
        row.insertCell(2).innerHTML = name;
        row.insertCell(3).innerHTML = evaluator;
        row.insertCell(4).innerHTML = performance;
        row.insertCell(5).innerHTML = `
            <button class="edit-btn" onclick="editEntry(this)">Edit</button>
            <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
        `;

        // Hide the modal and reset the form
        document.getElementById("evaluation-form").style.display = "none";
        document.getElementById("evaluation-form-submit").reset();
    };
});

// Function to delete a row from the table
function deleteEntry(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Placeholder function to edit a row (expand as needed)
function editEntry(button) {
    alert("Edit functionality can be implemented here.");
}
