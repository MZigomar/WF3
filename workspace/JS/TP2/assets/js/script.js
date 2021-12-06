const htmlSections = document.getElementsByTagName("section");
const sections = [].slice.call(htmlSections);

// Get all "li"
const controller = document.getElementById("controller").childNodes;
const lis = [];
controller.forEach(e => {
    e.tagName=="LI" ? lis.push(e) : console.log(); ;
});

// add d-none class
const hide = () => sections.forEach(e => {
    e.classList.add("d-none");
});
// remove select class
const unselect = () => {
    lis.forEach(e => {
        e.classList.remove("select")
    });
}

// add onclick event on all 
lis.forEach(e => {
    e.onclick = () => {
        hide();
        unselect();
        sections[e.attributes[0].value-1].classList.remove("d-none");
        e.classList.add("select");
    };
});

hide();