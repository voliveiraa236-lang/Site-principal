document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector(".menu");
    const openBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");

    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".search-box");

    const cart = document.querySelector(".cart");
    const cartCount = document.querySelector(".cart-count");

    let count = 0;

    // MENU
    openBtn.onclick = () => {
        menu.classList.add("active");
        overlay.classList.add("active");
    };

    closeBtn.onclick = () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

    overlay.onclick = () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

    // PESQUISA
    searchBtn.onclick = () => {
        searchBox.style.display =
            searchBox.style.display === "block" ? "none" : "block";
    };

    // CARRINHO
    cart.onclick = () => {
        count++;
        cartCount.textContent = count;
    };

});