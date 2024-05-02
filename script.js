
var divs = document.querySelectorAll('div');

divs.forEach(function(div) {
  div.addEventListener('dragstart', handleDragStart, false);
  div.addEventListener('dragend', handleDragEnd, false);
});
//In your handleDragStart function, you’ll want to keep track of the element that’s being dragged. You can do this by setting a dataTransfer property:
function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', this.id);
}
//Next, you need to handle the drop event. You’ll want to swap the images of the div that was dragged and the div that it was dropped onto:
divs.forEach(function(div) {
  div.addEventListener('drop', handleDrop, false);
  div.addEventListener('dragover', handleDragOver, false);
});

function handleDrop(e) {
  e.preventDefault();
  
  var draggedId = e.dataTransfer.getData('text/plain');
  var draggedElement = document.getElementById(draggedId);
  
  var temp = this.style.backgroundImage;
  this.style.backgroundImage = draggedElement.style.backgroundImage;
  draggedElement.style.backgroundImage = temp;
}

function handleDragOver(e) {
  e.preventDefault(); // this allows us to drop
}