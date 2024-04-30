let dragElem = null;

function addEventListeners(div) {
    div.addEventListener("dragstart", e => {
        dragElem = e.target;
    });

    div.addEventListener("dragover", e => {
        e.preventDefault(); // This is necessary to allow dropping
    });

    div.addEventListener("drop", e => {
        e.preventDefault(); // This is necessary to allow dropping

        // Swap the background images
        let temp = e.target.style.backgroundImage;
        e.target.style.backgroundImage = dragElem.style.backgroundImage;
        dragElem.style.backgroundImage = temp;
    });
}

// Get all divs
let divs = document.getElementsByClassName("image");

// Add event listeners to all divs
for(let i=0; i<divs.length; i++) {
    addEventListeners(divs[i]);
}