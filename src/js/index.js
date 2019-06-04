'use strict';

// var script = document.createElement("script");
// script.src = "./src/js/fontfaceobserver.js";
// script.async = true;
//
// script.onload = function () {
//     var regular = new FontFaceObserver("Open Sans");
//     var bold = new FontFaceObserver("Open Sans", {
//         weight: "bold"
//     });
//
//
//     Promise.all([
//         regular.load(),
//         bold.load()
//     ]).then(function () {
//         document.body.classList.add("fonts-loaded");
//     });
// };
// document.head.appendChild(script);


/******************/
/* https://webformyself.com/otlozhennaya-zagruzka-izobrazhenij-5-texnik-lenivoj-zagruzki/ */
/* https://codepen.io/rposbo/pen/ONmgVG */


/*
window.addEventListener('load', setLazy);
window.addEventListener('load', lazyLoad);
window.addEventListener('scroll', lazyLoad);

var lazy = [];

function setLazy() {
    lazy = document.getElementsByClassName('lazy');
    window.removeEventListener('load', setLazy);
    console.log('Found ' + lazy.length + ' lazy images');
}

function lazyLoad() {
    for (var i = 0; i < lazy.length; i++) {
        if (isInViewport(lazy[i])) {
            if (lazy[i].getAttribute('data-src')) {
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }
    cleanLazy();
}

function cleanLazy() {
    lazy = Array.prototype.filter.call(lazy, function (item) {
        return item.getAttribute('data-src');
    });
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top - 100 <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

*/

/********** Lazy Load XT jQuery плагин ********/

$.extend($.lazyLoadXT, {
  edgeY: 300,
  visibleOnly: false,
  forceLoad: false,
  show: true
});