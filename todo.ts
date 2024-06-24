import inquirer from "inquirer"
let todos = [];
let condition = true
while(condition)
    {
let addtask = await inquirer.prompt(
    [
        {
            name:"Todo",
            type:"input",
            message:"Do you want to Add a todo list ?",
        },
        {
            name:"addmore",
            type:"confirm",
            message:"Do you want to Add more Todos",
            default:"false"
        }
    ]
);
todos.push(addtask.Todo)
condition = addtask.addmore
console.log(todos);
    }