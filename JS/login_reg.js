"use strict";

async function login_req(request) {
    const username_field = document.querySelector("#username");
    const password_field = document.querySelector("#password");
    const get_req = new Request(`https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${username_field.value}&password=${password_field.value}`);

    create_loading_alert("Coneting server");

    try {
        let response = await fetch_function(get_req);
        let resource = await response.json();
        remove_loading_alert();
        console.log(resource);

        //tar bort loading screen

        if (response.status === 404) {
            console.log("not found!");
            remove_loading_alert();
        };

        if (response.status === 418) {
            teapot_popup("The server thinks it's a teapot")
        };

    } catch (error) {
        console.log(error);
    };

};

//document.querySelector()

function switch_page(event) {

    let login_button = document.querySelector(".login_button");
    let reg_button = document.querySelector(".reg_button");
    let link = document.querySelector("#link");
    let h1 = document.querySelector("h1");
    let magic_text = document.querySelector("#magic_text");

    if (link.textContent === "Already have an account? Go to login") {
        link.textContent = "New to this? Register for free";
        h1.textContent = "LOGIN";
        magic_text.textContent = "Let the magic start!";

        login_button.style.visibility = "visible";
        reg_button.style.visibility = "hidden";

    } else {
        link.textContent = "Already have an account? Go to login"
        h1.textContent = "REGISTER";
        magic_text.textContent = "Ready when you are..";

        login_button.style.visibility = "hidden";
        reg_button.style.visibility = "visible";


    }

};

async function fetch_register() {
    const username_field = document.querySelector("#username");
    const password_field = document.querySelector("#password");
    try {

        const post = {
            action: "register",
            user_name: username_field.value,
            password: password_field.velue,
        };

        const options = {
            method: 'POST',
            headers: { "Content-type": "applications/json; charset =UTF-8" },
            body: JSON.stringify(post),
        };

        const post_req = new Request("https://teaching.maumt.se/apis/access/", options);
        let response = await fetch(post_req);
        // let response = await fetch_function(post_req, options);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
};




// async function register_attempt() {
//     const username_field = document.querySelector("#username");
//     const password_field = document.querySelector("#password");

//     try {

//         let post = {
//             action: "register",
//             user_name: username_field.value,
//             password: password_field.value,
//         }

//         let options = {
//             action: "register",
//             headers: { "Content-type": "application/json; charset=UTF-8" },
//             body: JSON.stringify(post)
//         };

//         const post_req = new Request("https://teaching.maumt.se/apis/access/", options);
//         let response = await fetch(post_req);
//         console.log(response);

//     } catch (error) {
//         console.log("error")
//     }
// }