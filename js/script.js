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
    let postIconContainer = document.getElementById("post-icon-container");
    document.getElementById("post-content").addEventListener("mouseover", () => {
        postIconContainer.style.animationName = "posts-icon-brightness";
        postIconContainer.style.animationDuration = "1s";
        postIconContainer.style.animationFillMode = "forwards";
    })
    document.getElementById("post-content").addEventListener("mouseleave", () => {
        postIconContainer.style.animationName = "none";
    })

    document.getElementById("post-content").addEventListener("mouseover", () => {
        document.getElementById("post-image").style.animationName = "posts-image-brightness";
        document.getElementById("post-image").style.animationDuration = "1s";
        document.getElementById("post-image").style.animationFillMode = "forwards";
    })

    document.getElementById("post-content").addEventListener("mouseleave", () => {
        document.getElementById("post-image").style.animationName = "none";
    })

    $('.saved-stories-inner').slick({
        slidesToShow: 8,
        prevArrow: false,
        nextArrow: false,
    })

});