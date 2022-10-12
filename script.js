/**
 * @param {String} name 
 * @returns {HTMLElement}
 */
function $(name) {
    return document.querySelector(name)
}

// Display variables
let cookiesEl=$("#cookies")

function update() {
    cookiesEl.innerText=cookies;
}

// Game variables
let cookies=0;

function getCookie() {
    cookies++
    update()
}