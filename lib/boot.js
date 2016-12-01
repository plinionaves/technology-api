module.exports = app => {

    app.db.sync().done(() => {
        app.listen(app.get('port'), () => console.log(`Technology API rodando na porta ${app.get('port')}...`));
    });


};