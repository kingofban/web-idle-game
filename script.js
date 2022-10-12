/**
 * @param {String} name 
 * @returns {HTMLElement}
 */
 function $(name) {
    return document.querySelector(name)
}

/**
 * @param {String} name 
 * @returns {HTMLElement[]}
 */
 function $a(name) {
    return document.querySelectorAll(name)
}
$a("button").forEach((item)=>{
    item.addEventListener("keydown",(ev)=>{
        ev.preventDefault()
    })
})

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