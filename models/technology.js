module.exports = app => {

    return {
        findAll: (params, callback) => {
            return callback([
                {technology: 'Node.js'},
                {technology: 'Express'},
                {technology: 'Angular2'},
                {technology: 'Babel'}
            ]);
        }
    };

};