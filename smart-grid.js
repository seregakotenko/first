'use strict';


var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    filename: "_smart-grid",
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '15px', /* gutter width px || % || rem */
    mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1150px', /* max-width оn very large screen */
        fields: '2%' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px', /* -> @media (max-width: 1100px) */
            //fields: '15px'
        },
        md: {
            width: '992px',
            //fields: '15px'
        },
        sm: {
            width: '768px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '576px',
            //fields: '2%'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/scss', settings);