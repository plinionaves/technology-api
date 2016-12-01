module.exports = app => {

    app.listen(app.get('port'), () => console.log(`Technology API rodando na porta ${app.get('port')}...`));

};