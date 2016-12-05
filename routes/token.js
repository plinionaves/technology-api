import jwt from "jwt-simple";

module.exports = app => {

    const cfg = app.lib.config;
    const User = app.db.models.User;

    /**
    * @api {post} /token Token autenticado
    * @apiGroup Credencial
    * @apiParam {String} email Email de usuário
    * @apiParam {String} password Senha de usuário
    * @apiParamExample {json} Entrada
    *   {
    *       "email": "john@connor.net",
    *       "password": "123456"
    *   }
    * @apiSuccess {String} token Token de usuário autenticado
    * @apiSuccessExample {json} Sucesso
    *   HTTP/1.1 200 OK
    *   {"token": "xyz.abc.123.hgf"}
    * @apiErrorExample {json} Erro de autenticação
    *   HTTP/1.1 401 Unauthorized
    */
    app.post("/token", (req, res) => {

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
                .catch(error => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }

    });

};