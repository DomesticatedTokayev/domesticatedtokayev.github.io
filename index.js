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
let selectableCard = document.getElementsByClassName("selectable");
let cardDescription = document.getElementById("description");
for (let i = 0; i < selectableCard.length; i++)
{
    selectableCard[i].addEventListener("click", function () {

        // Check what content the card holds
        // Add custom content to element
        // $("video_link").prepend('<p>Hello World</p> ');
        
        // Use switch instead
        var elementID = selectableCard[i].id;
        if (elementID === "beyond_stars")
        {
            document.getElementById("description__title").innerHTML = "Beyond Stars";
            document.getElementById("project__content").innerHTML = '<iframe id="embedded" src="https://www.youtube.com/embed/6Ch8jzS-pwI?si=qEk1APYJtd70zlot&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';   
        } else if (elementID === "flight_finder") {
            document.getElementById("description__title").innerHTML = "Flight Finder";
            document.getElementById("project__content").innerHTML = '<p>Flight gallery here</P>';
        } else if (elementID === "book_library") {
            document.getElementById("description__title").innerHTML = "Books Library";
            document.getElementById("project__content").innerHTML = '<p>book library gallery here</P>';
        }

        // Check resolution, and open different description window when using small width screen
        if (window.innerWidth <= 846){
            // Remove classses, if previously a different screen size was used
            cardDescription.classList.remove("up");
            cardDescription.classList.remove("dropdown");
            cardDescription.classList.add("screen_view");
            cardDescription.classList.remove("show");
            descCardOpen = true;
        }
        else {
            let currOrder = getComputedStyle(selectableCard[i]).order;
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
        if (window.innerWidth <= 846) {
            cardDescription.classList.remove("screen_view");
        } else {
            cardDescription.classList.remove("dropdown");
            cardDescription.classList.add("up");
            descCardOpen = false;
        }
        document.getElementById("embedded").remove();
    }
};

// check screen size (remove mobile description on screen size)
window.onresize = function () {
    cardDescription.classList.remove("dropdown");
    cardDescription.classList.remove("show");
    cardDescription.classList.remove("screen_view");
    descCardOpen = false;
};
