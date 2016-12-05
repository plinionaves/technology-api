describe('Routes: Index', () => {

    describe('GET /', () => {
        it('return the API status', done => {
            request.get('/')
                .expect(200)
                .end((err, res) => {
                    const expected = {status: 'Technology API'};
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });

});