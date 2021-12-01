
let task1 = {
    name: "tache 1",
    category: "chiant",
};
let task2 = {
    name: "tache 2",
    category: "rapide",
};
let task3 = {
    name: "tache 3",
    category: "très long",
};

let taskList=[];

taskList.push(task1);
taskList.push(task2);
taskList.push(task3);

console.log(taskList.length);

taskList.pop();

console.log(taskList.length);


console.log(taskList[0]);