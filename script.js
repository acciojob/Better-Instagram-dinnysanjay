document.addEventListener("DOMContentLoaded", function () {
    const draggables = document.querySelectorAll(".draggable");

    let draggedItem = null;

    for (const draggable of draggables) {
        draggable.addEventListener("dragstart", function () {
            draggedItem = this;
            setTimeout(() => {
                this.style.display = "none";
            }, 0);
        });

        draggable.addEventListener("dragend", function () {
            setTimeout(() => {
                draggedItem.style.display = "block";
                draggedItem = null;
            }, 0);
        });

        draggable.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        draggable.addEventListener("dragenter", function () {
            this.classList.add("highlight");
        });

        draggable.addEventListener("dragleave", function () {
            this.classList.remove("highlight");
        });

        draggable.addEventListener("drop", function () {
            this.classList.remove("highlight");
            if (draggedItem !== null && draggedItem !== this) {
                const temp = this.style.backgroundImage;
                this.style.backgroundImage = draggedItem.style.backgroundImage;
                draggedItem.style.backgroundImage = temp;
            }
        });
    }
});