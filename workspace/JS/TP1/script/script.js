let taskList = [];

function addTask(c, n) {
    let newTask = {
        category: c,
        name: n,
    }
    taskList.push(newTask);
}


addTask("Ménage", "Hebdomadaire");
addTask("Ecole", "Quotidien");
addTask("Courses", "Mensuel");


console.log(taskList);

console.log("Il y a " + taskList.length + " taches dans la liste.")

let test = 25;
let output = "";

//Condition ? if true    : else;
test > 20 && test < 100 ? output="Oui" : output="Non";

console.log(output);