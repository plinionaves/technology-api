module.exports = app => {

    const User = app.db.models.User;

    app.route('/user')

        .all(app.auth.authenticate())

        /**
        * @api {get} /user Exibe usuario autenticado
        * @apiGroup Usuario
        * @apiHeader {String} Authorization Token de usuario
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Object} data Objeto retornado        
        * @apiSuccess {Number} data.id Id de registro
        * @apiSuccess {String} data.name Nome
        * @apiSuccess {String} data.email Email
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": {
        *           "id": 1,
        *           "name": "John Connor",
        *           "email": "john@connor.net"
        *       }
        *   }
        * @apiError {Boolean} status Status da requisição
        * @apiError {String} data Mensagem de erro
        * @apiErrorExample {json} Erro de consulta
        *   HTTP/1.1 412 Precondition Failed
        *   {
        *       "status": false,
        *       "message": "An error ocurred"
        *   }
        */
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
        
        /**
        * @api {delete} /user Exclui usuario autenticado
        * @apiGroup Usuario
        * @apiHeader {String} Authorization Token de usuario
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Number} data Quantidade de registros excluídos
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": 1
        *   }
        * @apiError {Boolean} status Status da requisição
        * @apiError {String} data Mensagem de erro
        * @apiErrorExample {json} Erro na exclusão
        *   HTTP/1.1 412 Precondition Failed
        *   {
        *       "status": false,
        *       "message": "An error ocurred"
        *   }
        */
        .delete((req, res) => {
            User.destroy({where: {id: req.user.id}})
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

    /**
    * @api {post} /users Cadastra novo usuario
    * @apiGroup Usuario
    * @apiParam {String} name Nome
    * @apiParam {String} email Email
    * @apiParam {String} password Senha
    * @apiParamExample {json} Entrada
    *   {
    *       "name": "John Connor",
    *       "email": "john@connor.net",
    *       "password": "123456"
    *   }
    * @apiSuccess {Boolean} status Status da requisição
    * @apiSuccess {Object} data Objeto retornado        
    * @apiSuccess {Number} data.id Id de registro
    * @apiSuccess {String} data.name Nome
    * @apiSuccess {String} data.email Email
    * @apiSuccess {String} data.password Senha criptografada
    * @apiSuccess {Date} data.updated_at Data de atualização
    * @apiSuccess {Date} data.created_at Data de cadastro
    * @apiSuccessExample {json} Sucesso
    *   HTTP/1.1 200 OK
    *   {
    *       "status": true,
    *       "data": {
    *           "id": 1,
    *           "name": "John Connor",
    *           "email": "john@connor.net",
    *           "password": "$2a$10$SK1B1",
    *           "updated_at": "2015-09-24T15:46:51.778Z",
    *           "created_at": "2015-09-24T15:46:51.778Z"
    *       }
    *   }
    * @apiError {Boolean} status Status da requisição
    * @apiError {String} data Mensagem de erro
    * @apiErrorExample {json} Erro no cadastro
    *   {
    *       "status": false,
    *       "message": "An error ocurred"
    *   }
    */
    app.post("/users", (req, res) => {
        User.create(req.body)
            .then(user => res.json({
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