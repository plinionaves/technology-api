module.exports = app => {

    const Technology = app.db.models.Technology;

    app.get('/technology', (req, res) => {
        Technology.findAll({}).then(technologies => {
            res.json({technologies: technologies});
        });
    });

};