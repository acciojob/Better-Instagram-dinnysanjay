let dragElem = null;

function addEventListeners(div) {
    div.addEventListener("dragstart", e => {
        console.log("dragging started", e);
        dragElem = e.target;
    });

    div.addEventListener("dragover", e => {
        e.preventDefault(); // This is necessary to allow dropping
    });

    div.addEventListener("drop", e => {
        e.preventDefault(); // This is necessary to allow dropping

        // Swap the divs
        let temp = e.target.outerHTML;
        e.target.outerHTML = dragElem.outerHTML;
        dragElem.outerHTML = temp;

        // Add event listeners to the new divs
        addEventListeners(e.target);
        addEventListeners(dragElem);

        dragElem = null;
    });
}

// Get all divs
let divs = document.getElementsByClassName("image");

// Add event listeners to all divs
for(let i=0; i<divs.length; i++) {
    addEventListeners(divs[i]);
}