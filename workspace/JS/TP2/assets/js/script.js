// Get all sections
const sections = Array.from(document.getElementById("content").children);
// Get all "li"
const liArray = Array.from(document.getElementById("controller").children)
/**
 * Add d-none class 
 * @returns void
 */
const hide = () => sections.forEach(e => e.classList.add("d-none"));
/**
 * Remove the select class
 * @returns void
 */
const unselect = () => liArray.forEach(e => e.classList.remove("select"));


// add onclick event on all 
liArray.forEach(e => {
    e.onclick = () => {
        hide();
        unselect();
        // getAttribute return the attribute value
        sections[e.getAttribute('tabs')-1].classList.remove("d-none");
        e.classList.add("select");
    };
});

const init = () => {
    hide();
    sections[0].classList.remove("d-none");
    liArray[0].classList.add("select");
}

init();