const fs = require('fs');
const path = require('path');

const employees = [];

const Hussein = {
  name: "Hussein",
  salary: 1000,
  id: 101
};
employees.push(Hussein);

const ahmed = {
  name: "Ahmed",
  salary: 9000,
  id: 102
};

employees.push(ahmed);

employees.push({
  name: "Rick",
  salary: 3000,
  id: 103
});

// write into a json file
fs.writeFileSync("jsondata.json", JSON.stringify(employees));


