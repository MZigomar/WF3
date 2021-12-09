document.onkeydown = detectKey;

const square = document.getElementById('square');

function detectKey(e) {
    let limitLeft = document.getElementById('area').offsetWidth - 58;
    let limitTop = document.getElementById('area').offsetHeight - 58;
    let posLeft = square.offsetLeft;
    let posTop = square.offsetTop;
    e = e || window.event;
    if (e.key == 'ArrowUp' && posTop > 0)
        square.style.top = (posTop - 50) + "px";
    else if (e.key == 'ArrowDown' && posTop < limitTop)
        square.style.top = (posTop + 50) + "px";
    else if (e.key == 'ArrowLeft' && posLeft > 0)
        square.style.left = (posLeft - 50) + "px";
    else if (e.key == 'ArrowRight' && posLeft < limitLeft)
        square.style.left = (posLeft + 50) + "px";
}