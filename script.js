let dragElem = null;

// Get all divs
let divs = document.getElementsByClassName("image");

// Add event listeners to all divs
for(let i=0; i<divs.length; i++) {
    divs[i].addEventListener("dragstart", e => {
        console.log("dragging started", e);
        dragElem = e.target;
    });

    divs[i].addEventListener("dragover", e => {
        e.preventDefault(); // This is necessary to allow dropping
    });

    divs[i].addEventListener("drop", e => {
        e.preventDefault(); // This is necessary to allow dropping

        // Swap the divs
        let temp = e.target.outerHTML;
        e.target.outerHTML = dragElem.outerHTML;
        dragElem.outerHTML = temp;

        dragElem = null;
    });
}