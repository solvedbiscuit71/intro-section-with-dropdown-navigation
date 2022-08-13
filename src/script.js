const aside = document.getElementsByTagName("aside")[0]
const nav = document.getElementsByTagName("nav")[0]

function toggleSlider() {
    aside.classList.toggle("show")
}

function toggleSubCategory(e) {
    const category = e.composedPath().find(element => {
        if (element.classList.contains("has__list")) {
            return true;
        }
        return false;
    })
    category.classList.toggle("show")
}

function activateSlider() {
    const menuBtn = document.getElementsByClassName("icon__menu")[0]
    const closeBtn = document.getElementsByClassName("icon__close")[0]

    menuBtn.addEventListener("click", toggleSlider)
    closeBtn.addEventListener("click", toggleSlider)
}

function activateSubCategory() {
    const btns = [...aside.getElementsByClassName("btn__sub-category")]
    btns.forEach(element => {
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
    const btns = [...aside.getElementsByClassName("btn__sub-category")]
    btns.forEach(element => {
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

    aside.classList.remove("show")

    const category = [...aside.getElementsByClassName("has__list")]
    category.forEach(element => {
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
const isMobile = window.matchMedia("(max-width: 1020px)")
isMobile.addEventListener("change",checkMobile);

checkMobile(isMobile);