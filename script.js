let dragElem = null;

function addEventListeners(div) {
    div.addEventListener("dragstart", e => {
        dragElem = e.target;
    });

    div.addEventListener("dragover", e => {
        e.preventDefault();
    });

    div.addEventListener("drop", e => {
        e.preventDefault();

        // Swap the divs
        let parent = dragElem.parentNode;
        let next = dragElem.nextElementSibling === e.target ? dragElem : dragElem.nextElementSibling;

        // Move `dragElem` to its new position
        e.target.parentNode.insertBefore(dragElem, e.target);

        // Move `e.target` to its new position
        parent.insertBefore(e.target, next);
    });
}

// Get all divs
let divs = document.getElementsByClassName("image");

// Add event listeners to all divs
for(let i=0; i<divs.length; i++) {
    addEventListeners(divs[i]);
}