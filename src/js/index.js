'use strict';

var script = document.createElement("script");
script.src = "./src/js/fontfaceobserver.js";
script.async = true;

script.onload = function () {
    var regular = new FontFaceObserver("Open Sans");
    var bold = new FontFaceObserver("Open Sans", {
        weight: "bold"
    });
    

    Promise.all([
        regular.load(),
        bold.load()
    ]).then(function () {
        document.body.classList.add("fonts-loaded");
    });
};
document.head.appendChild(script);

