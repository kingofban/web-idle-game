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
let cookiesPerClickEl=$("#cookiesPerClick")

function update() {
    cookiesEl.innerText=cookies;
    cookiesPerClickEl.innerText=cookiesPerClick;
}

// Game variables
let cookies=0;
let cookiesPerClick=1;

function getCookie() {
    cookies+=cookiesPerClick
    update()
}

function getUpgrade() {
    cookiesPerClick++
    update()
}

update();