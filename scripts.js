// Predefined employees (randomly picked or set by you)
const predefinedEmployees = [
    {
        fullName: "John Doe",
        email: "john@example.com",
        department: "IT",
        employeeID: "12345",
        profilePicUrl: "https://example.com/john-profile.jpg"
    },
    {
        fullName: "Jane Smith",
        email: "jane@example.com",
        department: "HR",
        employeeID: "67890",
        profilePicUrl: "https://example.com/jane-profile.jpg"
    }
];

// Function to load predefined employees when the page loads
function loadPredefinedEmployees() {
    predefinedEmployees.forEach(employee => {
        addEmployeeToList(employee.fullName, employee.email);
        addEmployeeToTable(employee.fullName, employee.employeeID, employee.department, employee.profilePicUrl);
    });
}

// Function to add an employee to the list
function addEmployeeToList(fullName, email) {
    const employeeList = document.getElementById('employeeList');
    const listItem = document.createElement('li');
    
    // Create a clickable link for the employee
    const link = document.createElement('a');
    link.href = '#'; // No actual page to link to, so this can be '#'
    link.textContent = `${fullName} - ${email}`;

    listItem.appendChild(link);
    employeeList.appendChild(listItem);
}

// Function to add an employee to the table
function addEmployeeToTable(fullName, employeeID, department, profilePicUrl) {
    const employeeTable = document.getElementById('employeeTable');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td><a href="${profilePicUrl}" target="_blank">View Profile</a></td>
    `;
    employeeTable.appendChild(newRow);
}

// Event listener for form submission to add new employees
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (no page refresh)

    // Get values from the form fields
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const employeeID = document.getElementById('employeeID').value;
    const profilePicUrl = document.getElementById('profilePicUrl').value;

    // Add the new employee to the list and table
    addEmployeeToList(fullName, email);
    addEmployeeToTable(fullName, employeeID, department, profilePicUrl);

    // Clear the form fields after submission
    document.getElementById('employeeForm').reset();
});

// Load predefined employees on page load
window.onload = function() {
    loadPredefinedEmployees();
};
