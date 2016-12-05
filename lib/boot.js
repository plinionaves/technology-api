module.exports = app => {

    if (!process.env.hasOwnProperty('NODE_ENV') || process.env.NODE_ENV.trim() !== 'test') {
        app.db.sequelize.sync().done(() => {
            app.listen(app.get('port'), () => console.log(`Technology API rodando na porta ${app.get('port')}...`));
        });
    }

};