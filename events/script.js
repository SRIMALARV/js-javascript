// searchBar Events - Focus & Blur
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("focus", () => {
    console.log("Search bar focused");

});
searchBar.addEventListener("blur", () => {
    console.log("Search bar lost focus");
});

// Click Event for Search Button - alert
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    alert("Search initiated for: " + searchBar.value);
});

//double click to view text
function displayText() {
    document.getElementById("samp").innerHTML += "Your one-stop shop for all gadgets";
}

// Mouseover & Mouseout for Product Images
const products = document.querySelectorAll(".product img");
products.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.3)";
        img.style.transition = "transform 0.4s";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
    //load for images
    img.addEventListener("load", () => {
        console.log("Image fully loaded: " + img.src);
    });

});

// Add to Cart Button Clicks - sweetalert
const cartButtons = document.querySelectorAll(".addToCart");
cartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Product Added!',
            text: `Product ${index + 1} has been added to your cart.`,
            confirmButtonText: 'Ok'
        });
    });
});

// Keydown & Keyup for searchBar - recieves keyboard input (window/document) 
searchBar.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});
searchBar.addEventListener("keyup", (event) => {
    console.log(`Key released: ${event.key}`);
});

// onfocus/ onblur/ onfocusout for name input
function toCapital() {
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function focusFunction() {
    document.getElementById("comments").style.background = "#dfffe0";
}

function blurFunction() {
    document.getElementById("comments").style.background = "#758976";
}
