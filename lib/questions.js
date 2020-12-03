module.exports = [
  {
    type: "confirm",
    message: "Are you ready to build your Engineering team?",
    name: "ready",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    name: "role",
    message: "What is your job title?",
    choices: ["Manager", "Engineer", "Intern"],
  }
];
