module.exports = app => {

    const Technology = app.db.models.Technology;

    /*app.get('/technology', (req, res) => {
        Technology.findAll({}).then(technologies => {
            res.json({technologies: technologies});
        });
    });*/


    app.route('/technology')

        .get((req, res) => {
            Technology.findAll({})
                .then(technologies => res.json({
                    status: true,
                    data: technologies
                }))
                .catch(error => {
                    res.status(412).json({
                        status: false,
                        message: error.message || error
                    })
                });
        })

        .post((req, res) => {
            Technology.create(req.body)
                .then(technology => res.json({
                    status: true,
                    data: technology
                }))
                .catch(error => {
                    res.status(412).json({
                        status: false,
                        message: error.message || error
                    })
                });
        });

    app.route('/technology/:id')
        .get((req, res) => {
            Technology.findOne({where: req. params})
                .then(technology => {
                    if (technology) {
                        res.json({
                            status: true,
                            data: technology
                        })
                    } else {
                        res.status(404).json({
                            status: false
                        });
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        status: false,
                        message: error.message || error
                    })
                });
        })
        .put((req, res) => {
            Technology.put(req.body, {where: req.params})
                .then(result => res.status(204).json({
                    status: true,
                    data: result
                }))
                .catch(error => {
                    res.status(412).json({
                        status: false,
                        message: error.message || error
                    })
                });
        })
        .delete((req, res) => {
            Technology.destroy({where: req.params})
                .then(result => res.json({
                    status: true,
                    data: result
                }))
                .catch(error => {
                    res.status(412).json({
                        status: false,
                        message: error.message || error
                    })
                });
        });

};