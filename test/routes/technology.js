import jwt from 'jwt-simple';

describe('Routes: Technology', () => {

    const User = app.db.models.User;
    const Technology = app.db.models.Technology;
    const jwtSecret = app.lib.config.jwtSecret;
    let token;
    let fakeTechnology;

    beforeEach(done => {
        User
            .destroy({where: {}})
            .then(() => User.create({
                name: 'John',
                email: 'john@mail.net',
                password: '12345'
            }))
            .then(user => {
                Technology
                    .destroy({where: {}})
                    .then(() => Technology.bulkCreate([{
                        id: 1,
                        name: 'Node.js',
                        user_id: user.id
                    }, {
                        id: 2,
                        name: 'Angular2',
                        user_id: user.id
                    }]))
                    .then(technologies => {
                        fakeTechnology = technologies[0];
                        token = jwt.encode({id: user.id}, jwtSecret);
                        done();
                    });
            });
    });

    describe('GET /technology', () => {
        describe('status 200', () => {
            it('returns a list of Technology', done => {
                request.get('/technology')
                    .set('Authorization', `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.data).to.have.length(2);
                        expect(res.body.data[0].name).to.eql('Node.js');
                        expect(res.body.data[1].name).to.eql('Angular2');
                        done(err);
                    });
            });
        });
    });

    describe('POST /technology/', () => {
        describe('status 200', () => {
            it('creates a new task', done => {
                request.post('/technology')
                    .set('Authorization', `JWT ${token}`)
                    .send({name: 'Express'})
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.data.name).to.eql('Express');
                        expect(res.body.data.note).to.be.null;
                        done(err);
                    });
            });
        });
    });

    describe('GET /technology/:id', () => {

        describe('status 200', () => {
            it('returns one task', done => {
                request.get(`/technology/${fakeTechnology.id}`)
                    .set('Authorization', `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.data.name).to.eql('Node.js');
                        done(err);
                    });
            });
        });

        describe('status 404', () => {
            it('throws error when task not exist', done => {
                request.get('/technology/0')
                    .set('Authorization', `JWT ${token}`)
                    .expect(404)
                    .end((err, res) => done(err));
            });
        });

    });

    describe('PUT /technology/:id', () => {
        describe('status 200', () => {
            it('updates a task', done => {
                request.put(`/technology/${fakeTechnology.id}`)
                    .set('Authorization', `JWT ${token}`)
                    .send({
                        title: 'Node.js, the best of the world',
                        note: 'Changed'
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.status).to.be.true;
                        expect(res.body.data[0]).to.eql(1);
                        done(err);
                    });
            });
        });
    });

    describe('DELETE /technology/:id', () => {
        describe('status 200', () => {
            it('removes a task', done => {
                request.delete(`/technology/${fakeTechnology.id}`)
                    .set('Authorization', `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.status).to.be.true;
                        expect(res.body.data).to.eql(1);
                        done(err);
                    });
            });
        });
    });

});