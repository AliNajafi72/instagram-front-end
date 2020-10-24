$(document).ready(function(){
    let searchInputPlaceholder = document.getElementById("search-input-placeholder");
    let searchInput = document.getElementById("search-input");
    searchInput.addEventListener("click", () => {
        searchInputPlaceholder.style.visibility = "hidden";
    })
    searchInput.addEventListener("focusout", () => {
        if (searchInput.value === "") {
            searchInputPlaceholder.style.visibility = "visible";
        }
    })
    searchInputPlaceholder.addEventListener("click", () => {
        searchInputPlaceholder.style.visibility = "hidden";
        searchInput.focus();
    })
    searchInputPlaceholder.addEventListener("focusout", () => {
        if (searchInput.value === "") {
            searchInputPlaceholder.style.visibility = "visible";
        }
    })
    searchInput.addEventListener("input", () => {
        if (searchInput.value === "") {
            searchInputPlaceholder.style.visibility = "visible";
        }
    })
    $('.saved-stories-inner').slick({
        slidesToShow: 8,
        prevArrow: false,
        nextArrow: false
    })
});