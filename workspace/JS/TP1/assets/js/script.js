const taskItems = [
    {
        category: 0,
        text: "Premier tache !",
    },
    {
        category: 3,
        text: "Acheter des carottes",
    },
    {
        category: 1,
        text: "Commencer le cours JavaScript",
    },
    {
        category: 2,
        text: "Faire le ménage",
    },
    {
        category: 1,
        text: "Finir le cours JavaScript",
    },
    {
        category: 3,
        text: "Acheter des bananes",
    },
    {
        category: 3,
        text: "Acheter des tomates",
    },
];

const filterList = document.getElementById("filterList");
const filter = document.getElementById("filterTask");
const addTask = document.getElementById("addTask");
const cancel = document.getElementById("addPopup__form__cancel");
const submit = document.getElementById("addPopup__form__submit");
const addPopup = document.getElementById("addPopup");
const filterPopup = document.getElementById("filterPopup");
const taskList = document.getElementById("taskList");
const cat = document.getElementById("filterSelect");
const text = document.getElementById("filterText");



const changeVisibility = (id) => id.classList.contains("hidden") ? id.classList.remove("hidden") : id.classList.add("hidden");

filter.onclick = () => changeVisibility(filterPopup);

addTask.onclick = () => changeVisibility(addPopup);

cancel.onclick = (e) => {
    changeVisibility(addPopup);
    e.preventDefault();
};

submit.onclick = (e) => {
    changeVisibility(addPopup);
    e.preventDefault();
    add(cat.value, text.value);
    document.getElementById("filterText").value = "";
    document.getElementById("filterSelect").value = 0;
}

function update() {
    console.log("updated");
    taskList.innerHTML = "";
    for (let i = 0; i < taskItems.length; i++) {
        taskList.innerHTML +=
            `<div class="task">
                <p class="task__category">${taskItems[i].category}</p>
                <p class="task__text">${taskItems[i].text}</p>
                <p class="task__deconste" onclick="remove(${i})">X</p>
            </div>`;
    };
}

const add = (category, text) => {
    if (text != "") {
        taskItems.push({ category, text })
        update();
    }
}

const remove = (i) => {
    taskItems.splice(i, 1);
    update();
}

for (let i = 0; i < 4; i++)
    cat.innerHTML += `<option value="${i}">${i}</option>`

update();