// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  employee = {
    name: `Sam`,
    streetAddress: `11 Broadway`,
  };
  return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, `name`, `Eli`);

function deleteFromEmployeeByKey(employee, key) {
  let { [key]: omit, ...res } = employee;
  return res;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}