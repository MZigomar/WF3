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


document.getElementById("addTask").onclick = function () {
    console.log("Plus button was clicked")
    document.getElementById("addPopup").classList.remove("hidden");
};
document.getElementById("addPopup__form__cancel").onclick = function () {
    console.log("Cancel was clicked")
    document.getElementById("addPopup").classList.add("hidden");
};

document.getElementById("filterTask").onclick = function () {
    console.log("Filter was clicked")
    let popup = document.getElementById("filterPopup");
    popup.classList.contains("hidden") ? popup.classList.remove("hidden") : popup.classList.add("hidden");
};


function remove (i) {
    taskItems.splice(i, 1);
    displayTask();
}

for (let i = 0; i < taskItems.length; i++) {
    document.getElementById("taskList").innerHTML +=
        `<div class="task">
            <p class="task__category">${taskItems[i].category}</p>
            <p class="task__text">${taskItems[i].text}</p>
            <p class="task__delete" onclick="remove(${i})">X</p>
        </div>`;
};

