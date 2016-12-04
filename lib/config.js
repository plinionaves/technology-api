module.exports = {
    database: "technologydb",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "technologydb.sqlite",
        define: {
            underscored: true
        }
    },
    jwtSecret: "@Technology$-AP1",
    jwtSession: {session: false}
};