module.exports = {
    database: "technologydb",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "technologydb.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "TECHNOLOGY_TEST",
    jwtSession: {session: false}
};