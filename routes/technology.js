module.exports = app => {

    const Technology = app.db.models.Technology;

    /*app.get('/technology', (req, res) => {
        Technology.findAll({}).then(technologies => {
            res.json({technologies: technologies});
        });
    });*/


    app.route('/technology')

        .all(app.auth.authenticate())

        .get((req, res) => {
            Technology.findAll({
                where: {user_id: req.user.id}
            })
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
            req.body.user_id = req.user.id;
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

        .all(app.auth.authenticate())

        .get((req, res) => {
            Technology.findOne({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
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
            Technology.update(req.body, {where: {
                id: req.params.id,
                user_id: req.user.id
            }})
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
        })
        .delete((req, res) => {
            Technology.destroy({where: {
                id: req.params.id,
                user_id: req.user.id
            }})
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