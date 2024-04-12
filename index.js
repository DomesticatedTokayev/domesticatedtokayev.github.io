// Is Connected
let sideMenuOpen = false;

// Close side menu on outside click
window.onclick = function (event) {

    // Check if user hasn't clicked the side menu or button menu
    if (!event.target.classList.contains("sidebar") && !event.target.classList.contains("nav-button")) {
        // Check if clicked outside side menu
        if (!document.getElementById("sidebar").classList.contains("hidden")) {
            closeNavMenu();
        } else {
        }
        
    }
};

function openNavMenu() {
    document.getElementById("sidebar").classList.remove("hidden");
    sideMenuOpen = true;
};

function closeNavMenu() {
    document.getElementById("sidebar").classList.add("hidden");
    sideMenuOpen = false;
};

// Project cards
let descCardOpen = false;
let card = document.getElementsByClassName("card");
let cardDescription = document.getElementById("description");
for (let i = 0; i < card.length; i++)
{
    card[i].addEventListener("click", function () {

        // Check resolution, and open different description window when using small width screen
        if (window.innerWidth <= 576){
            // Remove classses, if previously a different screen size was used
            cardDescription.classList.remove("up");
            cardDescription.classList.remove("dropdown");
            cardDescription.classList.add("screen_view");
            cardDescription.classList.remove("show");
            descCardOpen = true;
        }
        else {
            let currOrder = getComputedStyle(card[i]).order;
            cardDescription.style.setProperty("order", currOrder + 1)
            cardDescription.classList.add("show");
            cardDescription.classList.remove("up");
            cardDescription.classList.add("dropdown");
            descCardOpen = true;
        }
     });
};


// Close description 
function closeDescCard() {
    if (descCardOpen) {
        if (window.innerWidth <= 576) {
            cardDescription.classList.remove("screen_view");
        } else {
            cardDescription.classList.remove("dropdown");
            cardDescription.classList.add("up");
            descCardOpen = false;
        }
    }
};

// check screen size (remove mobile description on screen size)
window.onresize = function () {
    cardDescription.classList.remove("dropdown");
    cardDescription.classList.remove("show");
    cardDescription.classList.remove("screen_view");
    descCardOpen = false;
};
