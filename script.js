let dragElem = null;
let temp = e.target.style.backgroundImage;
e.target.style.backgroundImage = dragElem.style.backgroundImage;
dragElem.style.backgroundImage = temp;
//This should correctly swap the images, but there may be an issue if e.target is not the div that you’re expecting. For example, if the divs contain other elements, e.target could be one of those child elements, not the div itself.

//To ensure that you’re always working with the divs, you can use the closest method to get the nearest ancestor element that matches a given selector. In your case, you can use it to always get the div:

let div = e.target.closest('.image');

let temp = div.style.backgroundImage;
div.style.backgroundImage = dragElem.style.backgroundImage;
dragElem.style.backgroundImage = temp;

function addEventListeners(div) {
    div.addEventListener("dragstart", e => {
        console.log("dragstart event fired for div with id:", e.target.id);
        dragElem = e.target;
    });

    div.addEventListener("dragover", e => {
        e.preventDefault(); // This is necessary to allow dropping
    });

    div.addEventListener("drop", e => {
    e.preventDefault(); // This is necessary to allow dropping

    if (dragElem) {
        // Swap the background images
        let temp = e.target.style.backgroundImage;
        e.target.style.backgroundImage = dragElem.style.backgroundImage;
        dragElem.style.backgroundImage = temp;

        dragElem = null;
    }
});
}

// Get all divs
let divs = document.getElementsByClassName("image");

// Add event listeners to all divs
for(let i=0; i<divs.length; i++) {
    addEventListeners(divs[i]);
}