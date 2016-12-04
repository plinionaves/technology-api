module.exports = app => {

    const User = app.db.models.User;

    app.get("/user/:id", (req, res) => {
        User.findById(req.params.id, {
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
    });

    app.delete("/user/:id", (req, res) => {
        User.destroy({where: req.params})
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