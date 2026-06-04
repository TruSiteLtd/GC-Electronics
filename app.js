const navHeader = document.querySelector(".nav-header")
const toggleButton = document.querySelector("button.nav-toggle");
const dropDownMenu = document.querySelector("ul.nav-ul");
const dropDownSubMenuLink = document.querySelector(".nav-dropdown");
const dropDownSubMenu = document.querySelector(".nav-ul-dropdown");

var toggleActive = false;
var subMenuToggleActive = false;

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        if(toggleActive)
        {
            toggleActive = false;
            dropDownMenu.classList.remove("toggle-active");
        } 
        else 
        {
            toggleActive = true;
            dropDownMenu.classList.add("toggle-active");
        }
        
        console.log(`toggleActive has been switched to ${toggleActive}`);
    })
}

if (dropDownSubMenuLink) {
    dropDownSubMenuLink.addEventListener("mouseenter", () => {
        dropDownSubMenu.classList.remove("inactive");
        dropDownSubMenu.classList.add("active");
    })
}

if (navHeader) {
    navHeader.addEventListener("mouseleave", () => {
        dropDownSubMenu.classList.add("inactive");
        dropDownSubMenu.classList.remove("active");
    })
}

//--- FAQ SECTION ---//
const faqQuestions = document.querySelectorAll(".faq-question");

if(faqQuestions) {
    faqQuestions.forEach(item => {
        const title = item.querySelector(".faq-question-title");
        const downArrow = item.querySelector(".faq-arrow-down");
        const upArrow = item.querySelector(".faq-arrow-up");
        const answer = item.querySelector(".faq-question-answer");

        title.addEventListener("click", () => {
            answer.classList.toggle("inactive");
            answer.classList.toggle("active");
            downArrow.classList.toggle("inactive");
            upArrow.classList.toggle("inactive");
        })
    })
}

//--- TIME OF DAY SWITCHING ---//
const openingTime = 9;
const closingTime = 17;

const now = new Date();
const day = now.getDay(); // 0 = Sunday
const hour = now.getHours();

function isAvailable() {
    const isWeekday = day >= 1 && day <= 5;
    const withinHours = hour >= openingTime && hour < closingTime;

    return isWeekday && withinHours;
}

const todElements = document.querySelectorAll(".tod-element");

if (!isAvailable()) {
    todElements.forEach(item => {
        item.classList.toggle("none");
    })
}