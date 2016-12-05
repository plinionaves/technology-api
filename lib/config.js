module.exports = app => {

    const env = process.env.NODE_ENV;

    if (env) {
        return require(`./config.${env.trim()}.js`);
    }

    return require('./config.development.js');

};