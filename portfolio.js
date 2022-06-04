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

const EtchASketchImg = document.querySelector("#etch-a-sketch");
EtchASketchImg.addEventListener("click", () => {
    window.open("https://dbyrne978.github.io/etch-a-sketch/");
});

const RockPaperScissorsImg = document.querySelector("#rock-paper-scissors");
RockPaperScissorsImg.addEventListener("click", () => {
    window.open("https://dbyrne978.github.io/rock-paper-scissors/");
});

const LandingPageImg = document.querySelector("#landing-page");
LandingPageImg.addEventListener("click", () => {
    window.open("https://dbyrne978.github.io/landing-page/");
});

const LegacyStaplesImage = document.querySelector("#legacy-staples");
LegacyStaplesImage.addEventListener("click", () => {
    window.open("https://dbyrne978.github.io/legacy-staples/");
});