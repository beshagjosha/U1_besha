"use strict";

async function fetch_function(request) {
    return await fetch(new Request(request));

};

function create_loading_alert(string, addButton) {
    let white_background = document.createElement("div");
    white_background.id = "white_cover";
    document.querySelector("body").prepend(white_background);
    white_background.innerHTML = `<div class="loading_text">${string}</div>`;
};

function remove_loading_alert() {
    //hur ska vi ta bort white_background
    document.querySelector("#white_cover").remove();

};

function teapot_popup(string) {
    let white_background = document.createElement("div");
    white_background.id = "white_cover";
    document.body.prepend(white_background);
    white_background.innerHTML = `<div class="teapot_popup">${string}<button>CLOSE</button></div>`
    document.querySelector(".teapot_popup > button").addEventListener("click", () => white_background.remove());

};
