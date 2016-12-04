module.exports = app => {

    const User = app.db.models.User;

    app.route('/user')

        .get((req, res) => {
            User.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
                .then(user => {
                    if (user) {
                        res.json({
                            status: true,
                            data: user
                        });
                    } else {
                        res
                            .status(404)
                            .json({
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
        
        .delete((req, res) => {
            User.destroy({where: {id: req.user.id}})
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
        });

    app.post("/user", (req, res) => {
        User.then(user => res.json({
            status: true,
            data: user
        }))
        .catch(error => {
            res.status(412).json({
                status: false,
                message: error.message || error
            })
        });
    });
};