import jwt from 'jwt-simple';

module.exports = app => {

    const cfg = app.lib.config;
    const User = app.db.models.User;

    app.post('/token', (req, res) => {

        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;

            User.findOne({where: {email: email}})
                .then(user => {
                    if (User.isPassword(user.password, password)) {
                        const payload = {id: user.id};

                        res.json({
                            status: true,
                            token: jwt.encode(payload, cfg.jwtSecret)
                        });
                    } else {
                        res.status(401).json({
                            status: false
                        });
                    }
                })
        }

    });

};