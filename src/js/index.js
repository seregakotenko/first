'use strict';

var html = document.documentElement;
var script = document.createElement("script");
script.src = "./src/js/fontfaceobserver.js";
script.async = true;

script.onload = function () {
    var regular = new FontFaceObserver("OpenSans");
    var bold = new FontFaceObserver("OpenSans", {
        weight: "bold"
    });
    

    Promise.all([
        regular.load(),
        bold.load()
    ]).then(function () {
        html.classList.add("fonts-loaded");
    });
};
document.head.appendChild(script);

