// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById("add-employees-btn");

const collectEmployees = function() {
  const employeesArray = [];

  let addEmployee = true;

  while (addEmployee) {
      const firstName = prompt("Enter employee's first name:");
      const lastName = prompt("Enter employee's last name:");
      let salary = prompt("Enter employee's salary:");
      
      // Check if salary is a number, default to 0 if not
      salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

      // Create an employee object
      const employee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
      };

      // Add the employee object to the employeesArray
      employeesArray.push(employee);

      // Ask the user if they want to add another employee
      addEmployee = confirm("Do you want to add another employee?");
  }

  return employeesArray;
};

// Call the collectEmployees function to start collecting employee data
const employeesData = collectEmployees();
console.log(employeesData); // Output the array of employee objects
  
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // Calculate total salary
  employeesArray.forEach(employee => {
      totalSalary += employee.salary;
  });

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
};

const getRandomEmployee = function(employeesArray) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Retrieve the random employee at the random index
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};
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
