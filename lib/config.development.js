import logger from './logger';

module.exports = {
    database: "technologydb",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "technologydb.sqlite",
        logging: sql => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: "@Technology$-AP1",
    jwtSession: {session: false}
};