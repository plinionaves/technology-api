import https from 'https';
import fs from 'fs';

module.exports = app => {

    const credentials = {
        key: fs.readFileSync("ntechnology.key", "utf8").toString(),
        cert: fs.readFileSync("ntechnology.cert", "utf8").toString()
    }

    const env = process.env.NODE_ENV;

    if (!env || env.trim() !== 'test') {
        
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get('port'), () => {
                    console.log(`Technology API rodando na porta ${app.get('port')}...`)
                });
        });
    }

};