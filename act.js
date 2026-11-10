// Array manipulation: filter active users and get their names
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeNames); 