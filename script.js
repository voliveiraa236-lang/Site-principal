document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");

    const openBtn = document.getElementById("menuBtn");
    const closeBtn = document.querySelector(".close-btn");

    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".search-box");

    const cart = document.querySelector(".cart");
    const cartCount = document.querySelector(".cart-count");

    let count = 0;

    // MENU
    openBtn.onclick = function(){
        menu.classList.add("active");
        overlay.classList.add("active");
    };

    closeBtn.onclick = function(){
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

    overlay.onclick = function(){
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

    // SEARCH
    searchBtn.onclick = function(){
        searchBox.style.display =
            searchBox.style.display === "block" ? "none" : "block";
    };

    // CARRINHO
    cart.onclick = function(){
        count++;
        cartCount.textContent = count;
    };

});