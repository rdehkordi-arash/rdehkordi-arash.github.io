
const buttons = document.querySelectorAll(".nav-button");

const sections = document.querySelectorAll(".content-section");


buttons.forEach(button => {

    button.addEventListener("click", function () {

        const sectionId = this.dataset.section;


        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });


        // Remove active style from all buttons
        buttons.forEach(button => {
            button.classList.remove("active");
        });


        // Show selected section
        document
            .getElementById(sectionId)
            .classList.add("active");


        // Highlight selected button
        this.classList.add("active");

    });

});
