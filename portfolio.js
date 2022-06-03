const ResumeButtonList = document.querySelectorAll(".resume-button");
ResumeButtonList.forEach((button) => {
    button.addEventListener("click", () => {
        window.open("Daniel Byrne's resume.pdf", "_blank");
    });
});