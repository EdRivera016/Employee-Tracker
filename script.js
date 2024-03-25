// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('add-employees-btn');

// Collect employee data
const collectEmployees = function(employeesArray) {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];

  let addEmployee = true;
  
  while (addEmployee) {
    const firstName = prompt('Employee first name:');
    const lastName = prompt('Employee last name:');
    let salary = prompt('Salary of employee:');
  // Check if salary is a number if not default to 0
    salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);
    //Employee Object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
};
//Add the employee object to the employeesArray
employeesArray.push(employee);
//Asks user if they want to add another employee
addEmployee = confirm('DO you wish to add another employee?');
}
return employeesArray;
};
//Call the collectEmployees function to start collecting data
const employeesData = collectEmployees();
//Output the array of employee objects
console.log(employeesData);



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  //Calculate total salary
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });
  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;
  
  console.log(`Average Salary:$${averageSalary.toFixed(2)}| Numbers of Employees: ${employeesArray.length}`)};


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Generate random index within the range of the array lenght
  const randomIndex = Math.floor(Math.random()* employeesArray.length);
  // Retrieve random employee at random index
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`)};

  
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
