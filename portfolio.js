const ResumeButtonList = document.querySelectorAll(".resume-button");
ResumeButtonList.forEach((button) => {
    button.addEventListener("click", () => {
        window.open("Daniel Byrne's resume.pdf", "_blank");
    });
});

const EmailButtonList = document.querySelectorAll(".email-button");
EmailButtonList.forEach((button) => {
    button.addEventListener("click", () => {
        window.open("mailto:dbyrne978@gmail.com");
    });
});