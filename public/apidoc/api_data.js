define({ "api": [
  {
    "type": "post",
    "url": "/token",
    "title": "Token autenticado",
    "group": "Credencial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n    \"email\": \"john@connor.net\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de usuário autenticado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"token\": \"xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de autenticação",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/token.js",
    "groupTitle": "Credencial",
    "name": "PostToken"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"Technology API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  },
  {
    "type": "delete",
    "url": "/technology/:id",
    "title": "Exclui uma tecnologia",
    "group": "Tecnologias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da tecnologia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>Quantidade de registros excluídos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/technology.js",
    "groupTitle": "Tecnologias",
    "name": "DeleteTechnologyId"
  },
  {
    "type": "get",
    "url": "/technology",
    "title": "Lista tecnologias",
    "group": "Tecnologias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Objetos retornados</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome da tecnologia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.note",
            "description": "<p>Observação</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Data de cadastro</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": [{\n        \"id\": 1,\n        \"name\": \"Node.js\",\n        \"note\": null,\n        \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n        \"created_at\": \"2015-09-24T15:46:51.778Z\",\n        \"user_id\": 1\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/technology.js",
    "groupTitle": "Tecnologias",
    "name": "GetTechnology"
  },
  {
    "type": "get",
    "url": "/technology/:id",
    "title": "Exibe uma tecnologia",
    "group": "Tecnologias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da tecnologia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Tecnologia cadastrada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome da tecnologia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.note",
            "description": "<p>Observação</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Data de cadastro</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Node.js\",\n        \"note\": null,\n        \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n        \"created_at\": \"2015-09-24T15:46:51.778Z\",\n        \"user_id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/technology.js",
    "groupTitle": "Tecnologias",
    "name": "GetTechnologyId"
  },
  {
    "type": "post",
    "url": "/technology",
    "title": "Cadastra uma tecnologia",
    "group": "Tecnologias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da tecnologia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Observação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n    \"name\": \"Angular2\",\n    \"note\": \"Create modern web apps!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Tecnologia cadastrada</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome da tecnologia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.note",
            "description": "<p>Observação</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Data de cadastro</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Angular2\",\n        \"note\": \"Create modern web apps!\",\n        \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n        \"created_at\": \"2015-09-24T15:46:51.778Z\",\n        \"user_id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/technology.js",
    "groupTitle": "Tecnologias",
    "name": "PostTechnology"
  },
  {
    "type": "put",
    "url": "/technology/:id",
    "title": "Atualiza uma tecnologia",
    "group": "Tecnologias",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da tecnologia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da tecnologia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Observação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n    \"name\": \"ExpressJS\",\n    \"note\": null\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array com quantidade de registros atualizados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": [ 1 ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/technology.js",
    "groupTitle": "Tecnologias",
    "name": "PutTechnologyId"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Exclui usuario autenticado",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>Quantidade de registros excluídos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro na exclusão",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Usuario",
    "name": "DeleteUser"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Exibe usuario autenticado",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto retornado</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"John Connor\",\n        \"email\": \"john@connor.net\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed\n{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Usuario",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Cadastra novo usuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n    \"name\": \"John Connor\",\n    \"email\": \"john@connor.net\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto retornado</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.password",
            "description": "<p>Senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.created_at",
            "description": "<p>Data de cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"John Connor\",\n        \"email\": \"john@connor.net\",\n        \"password\": \"$2a$10$SK1B1\",\n        \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n        \"created_at\": \"2015-09-24T15:46:51.778Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status da requisição</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Mensagem de erro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro no cadastro",
          "content": "{\n    \"status\": false,\n    \"message\": \"An error ocurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Usuario",
    "name": "PostUsers"
  }
] });
