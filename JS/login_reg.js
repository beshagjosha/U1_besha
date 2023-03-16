"use strict";

async function login_req(request) {
    const username_field = document.querySelector("#username");
    const password_field = document.querySelector("#password");
    const get_req = `https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${username_field.value}&password=${password_field.value}`;

    try {
        let response = await fetch_function(get_req);
        let resource = await response.json();
        console.log(resource);
    } catch (error) {
        console.log(error);
    };

};

//document.querySelector()

function switch_page(event) {
    /*const h1 = document.querySelector("h1");
    const magic = document.querySelector("#magic_text");
    const button = document.querySelector("button")*/
    let login_button = document.querySelector(".login_button");
    let reg_button = document.querySelector(".reg_button");
    let link = document.querySelector("#link");
    let h1 = document.querySelector("h1");
    let magic_text = document.querySelector("h1");

    if (link.textContent === "Already have an account? Go to login") {
        link.textContent = "New to this? Register for free";
        h1.textContent = "LOGIN";
        magic_text.textContent === "Let the magic start!";

        login_button.style.visibility = "visible";
        reg_button.style.visibility = "hidden";

    } else {
        link.textContent === "Already have an account? Go to login"
        h1.textContent = "REGISTER";
        magic_text.textContent = "Ready when you are..";

        login_button.style.visibility = "hidden";
        reg_button.style.visibility = "visible";


    }

};