const projectLinks = document.querySelectorAll(".project-link");

const projectModal = document.getElementById("project-modal");

const projectModalBody = document.getElementById("project-modal-body");

const closeModal = document.querySelector(".close-modal");


projectLinks.forEach(link => {

    link.addEventListener("click", async function () {

        // Find which project HTML file this button points to
        const projectFile = this.dataset.project;

        // Load that HTML file
        const response = await fetch(projectFile);

        const projectHTML = await response.text();

        // Put the project HTML inside the modal
        projectModalBody.innerHTML = projectHTML;

        if (window.MathJax) {MathJax.typesetPromise([projectModalBody]);}

        // Open the modal
        projectModal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {

    projectModal.classList.remove("active");

});


projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {
        projectModal.classList.remove("active");
    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        projectModal.classList.remove("active");
    }

});
