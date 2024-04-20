const schema = require('./generated_js_proto/employees/employees_pb');
const fs = require('fs');

const husseinEmp = new schema.Employee();
husseinEmp.setId(101);
husseinEmp.setName("Hussein");
husseinEmp.setSalary(1000);

const ahmedEmp = new schema.Employee();
ahmedEmp.setId(102);
ahmedEmp.setName("Ahmed");
ahmedEmp.setSalary(9000);

const rickEmp = new schema.Employee();
rickEmp.setId(103);
rickEmp.setName("Rick");
rickEmp.setSalary(5000);

const employees = new schema.Employees();

employees.getEmployeesList().push(husseinEmp);
employees.setEmployeesList(employees.getEmployeesList());
employees.getEmployeesList().push(ahmedEmp);
employees.setEmployeesList(employees.getEmployeesList());
employees.getEmployeesList().push(rickEmp);
employees.setEmployeesList(employees.getEmployeesList());


const seriaBytes = employees.serializeBinary();
console.log("binary " + seriaBytes);

// write to file
fs.writeFileSync("seriabinary", seriaBytes);

const deseriaBytes = schema.Employees.deserializeBinary(seriaBytes);
console.log("deseriabinary", deseriaBytes.toString());