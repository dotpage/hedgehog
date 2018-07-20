const sg = require('smart-grid');

var options = {
    filename: 'sg',
    oldStyle: false,
    offset: '30px',
    columns: 12,
    container: {
        maxWidth: '1170px',
        fields: '15px'
    },
    breakPoints: {},
    properties: []
};

sg('./app/preproc', options);