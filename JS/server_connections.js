"use strict";

async function fetch_function(request) {
    return await fetch(new Request(request));

};