module.exports = app => {

    const Technology = app.db.models.Technology;

    app.route('/technology')

        .all(app.auth.authenticate())

        /**
        * @api {get} /technology Lista tecnologias
        * @apiGroup Tecnologias
        * @apiHeader {String} Authorization Token de usuário
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Array} data Objetos retornados        
        * @apiSuccess {Number} data.id Id de registro
        * @apiSuccess {String} data.name Nome da tecnologia
        * @apiSuccess {String} data.note Observação
        * @apiSuccess {Date} data.updated_at Data de atualização
        * @apiSuccess {Date} data.created_at Data de cadastro
        * @apiSuccess {Number} data.user_id Id do usuário
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": [{
        *           "id": 1,
        *           "name": "Node.js",
        *           "note": null,
        *           "updated_at": "2015-09-24T15:46:51.778Z",
        *           "created_at": "2015-09-24T15:46:51.778Z",
        *           "user_id": 1
        *       }]
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

        /**
        * @api {post} /technology Cadastra uma tecnologia
        * @apiGroup Tecnologias
        * @apiHeader {String} Authorization Token de usuário
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiParam {String} name Nome da tecnologia
        * @apiParam {String} note Observação
        * @apiParamExample {json} Entrada
        *   {
        *       "name": "Angular2",
        *       "note": "Create modern web apps!"
        *   }
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Object} data Tecnologia cadastrada        
        * @apiSuccess {Number} data.id Id de registro
        * @apiSuccess {String} data.name Nome da tecnologia
        * @apiSuccess {String} data.note Observação
        * @apiSuccess {Date} data.updated_at Data de atualização
        * @apiSuccess {Date} data.created_at Data de cadastro
        * @apiSuccess {Number} data.user_id Id do usuário
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": {
        *           "id": 1,
        *           "name": "Angular2",
        *           "note": "Create modern web apps!",
        *           "updated_at": "2015-09-24T15:46:51.778Z",
        *           "created_at": "2015-09-24T15:46:51.778Z",
        *           "user_id": 1
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

        /**
        * @api {get} /technology/:id Exibe uma tecnologia
        * @apiGroup Tecnologias
        * @apiHeader {String} Authorization Token de usuário
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiParam {Number} id Id da tecnologia
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Object} data Tecnologia cadastrada        
        * @apiSuccess {Number} data.id Id de registro
        * @apiSuccess {String} data.name Nome da tecnologia
        * @apiSuccess {String} data.note Observação
        * @apiSuccess {Date} data.updated_at Data de atualização
        * @apiSuccess {Date} data.created_at Data de cadastro
        * @apiSuccess {Number} data.user_id Id do usuário
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": {
        *           "id": 1,
        *           "name": "Node.js",
        *           "note": null,
        *           "updated_at": "2015-09-24T15:46:51.778Z",
        *           "created_at": "2015-09-24T15:46:51.778Z",
        *           "user_id": 1
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
                            status: false,
                            message: 'Technology not found!'
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
        * @api {put} /technology/:id Atualiza uma tecnologia
        * @apiGroup Tecnologias
        * @apiHeader {String} Authorization Token de usuário
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiParam {Number} id Id da tecnologia
        * @apiParam {String} name Nome da tecnologia
        * @apiParam {String} note Observação
        * @apiParamExample {json} Entrada
        *   {
        *       "name": "ExpressJS",
        *       "note": null
        *   }
        * @apiSuccess {Boolean} status Status da requisição
        * @apiSuccess {Array} data Array com quantidade de registros atualizados        
        * @apiSuccessExample {json} Sucesso
        *   HTTP/1.1 200 OK
        *   {
        *       "status": true,
        *       "data": [ 1 ]
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

        /**
        * @api {delete} /technology/:id Exclui uma tecnologia
        * @apiGroup Tecnologias
        * @apiHeader {String} Authorization Token de usuário
        * @apiHeaderExample {json} Header
        *   {"Authorization": "JWT xyz.abc.123.hgf"}
        * @apiParam {Number} id Id da tecnologia
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
        * @apiErrorExample {json} Erro de consulta
        *   HTTP/1.1 412 Precondition Failed
        *   {
        *       "status": false,
        *       "message": "An error ocurred"
        *   }
        */
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