module.exports = app => {

    const Technology = app.models.technology;

    app.get('/technology', (req, res) => {
        Technology.findAll({}, (technologies) => {
            res.json({technologies: technologies});
        });
    });

};