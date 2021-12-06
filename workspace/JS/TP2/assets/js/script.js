const htmlSections = document.getElementsByTagName("section");
const sections = [].slice.call(htmlSections);

const controller = document.getElementById("controller").childNodes;
const lis = [];
controller.forEach(e => {
    e.tagName=="LI" ? lis.push(e) : console.log(); ;
});

const hide = () => sections.forEach(e => {
    e.classList.add("d-none");

});
const unselect = () => {
    lis.forEach(e => {
        e.classList.remove("select")
    });
}

lis.forEach(e => {
    e.onclick = () => {
        hide();
        unselect();
        sections[e.attributes[0].value-1].classList.remove("d-none");
        e.classList.add("select");
    };
});

hide();