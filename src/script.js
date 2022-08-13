function toggleSlider() {
    const slider = document.getElementsByTagName("aside")[0]
    slider.classList.toggle("show")
}

function toggleSubCategory(e) {
    const element = e.composedPath().find(element => {
        if (element.classList.contains("has__sub-category")) {
            return true;
        }
        return false;
    })
    element.classList.toggle("show")
}

function activateSlider() {
    const menuBtn = document.getElementsByClassName("icon__menu")[0]
    const closeBtn = document.getElementsByClassName("icon__close")[0]

    menuBtn.addEventListener("click", toggleSlider)
    closeBtn.addEventListener("click", toggleSlider)
}

function activateSubCategory() {
    const dropDowns = [...document.getElementsByClassName("toggle__sub-category")]
    dropDowns.forEach(element => {
        element.addEventListener("click", toggleSubCategory)
    })
}

function deactivateSlider() {
    const menuBtn = document.getElementsByClassName("icon__menu")[0]
    const closeBtn = document.getElementsByClassName("icon__close")[0]

    menuBtn.removeEventListener("click", toggleSlider)
    closeBtn.removeEventListener("click", toggleSlider)
}

function deactivateSubCategory() {
    const dropDowns = [...document.getElementsByClassName("toggle__sub-category")]
    dropDowns.forEach(element => {
        element.removeEventListener("click", toggleSubCategory)
    })
}

function enableMobile() {
    activateSlider()
    activateSubCategory()
}

function disableMobile() {
    deactivateSlider()
    deactivateSubCategory()

    const slider = document.getElementsByTagName("aside")[0]
    slider.classList.remove("show")

    const list = [...document.getElementsByClassName("has__sub-category")]
    list.forEach(element => {
        element.classList.remove("show")
    })
}

function checkMobile(isMobile) {
    if (isMobile.matches) {
        enableMobile()
    } else {
        disableMobile()
    }
}

/* main() function */
const isMobile = window.matchMedia("(max-width: 720px)")
isMobile.addEventListener("change",checkMobile);

checkMobile(isMobile);