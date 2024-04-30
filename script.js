//your code here
let dragElem = null;

// Get all images
let images = document.getElementsByClassName("image");

// Add event listeners to all images
for(let i=0; i<images.length; i++) {
    images[i].addEventListener("dragstart", e => {
        console.log("dragging started", e);
        dragElem = e.target;
    });
}

// Add event listener to the parent
document.getElementById("parent").addEventListener("dragover", e => {
    e.preventDefault(); // This is necessary to allow dropping
});

document.getElementById("parent").addEventListener("drop", e => {
    e.preventDefault(); // This is necessary to allow dropping
    
    // Swap the images of the dragged element and the target element
    let temp = e.target.src;
    e.target.src = dragElem.src;
    dragElem.src = temp;
    
    dragElem = null;
});