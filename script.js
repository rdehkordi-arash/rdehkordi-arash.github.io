// Get all clickable project titles
const projectLinks = document.querySelectorAll(".project-link");

// Get all project modals
const projectModals = document.querySelectorAll(".project-modal");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close-modal");


// OPEN MODAL
projectLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Read the modal ID from data-modal
        const modalId = this.dataset.modal;

        // Find that modal
        const modal = document.getElementById(modalId);

        // Open it
        modal.classList.add("active");
    });

});


// CLOSE MODAL USING X BUTTON
closeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const modal = this.closest(".project-modal");

        modal.classList.remove("active");
    });

});


// CLOSE MODAL BY CLICKING OUTSIDE THE CONTENT
projectModals.forEach(modal => {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("active");
        }

    });

});


// CLOSE MODAL WITH ESC KEY
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        projectModals.forEach(modal => {
            modal.classList.remove("active");
        });

    }

});
