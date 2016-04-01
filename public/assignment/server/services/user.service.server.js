module.exports = function(app, userModel) {
    app.get('/api/assignment/user', userRouter);
    app.post('/api/assignment/user',createUser);
    app.get("/api/assignment/user/:id", findUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);
    app.post("/api/assignment/logout",logout);
    app.get("/api/assignment/loggedin",loggedin);

    function userRouter(req, res) {
        if (req.query.username && req.query.password) {
            findUserByCredentials(req, res);
        }
        else if (req.query.username) {
            findUserByUsername(req, res);
        }
        else {
            getUsers(req, res);
        }
    }

    function findUserByCredentials(req, res)
    {
        var credentials= {
            username: req.query.username,
            password: req.query.password
        };
        var user = userModel.findUserByCredentials(credentials)
            .then(
                function(doc){
                    req.session.currentUser = doc;
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function findUserByUsername(req, res)
    {
        var username = req.query.username;
        var user = userModel.findUserByUsername(username)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }


    function getUsers(req,res)
    {
        var users= userModel.getUsers()
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }


    function createUser(req,res)
    {
        var newUser = req.body;
        var user = userModel.createUser(newUser)
            .then(
                function(doc){
                    req.session.currentUser = doc;
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function updateUser(req, res) {
        var user = req.body;
        var userId = req.params.id;
        userModel.updateUser(userId, user)
            .then(
                function(doc)
                {
                    req.session.currentUser = req.body;
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function deleteUser(req, res) {
        var id = req.params.id;
        (userModel.deleteUserById(id))
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function findUserById(req, res)
    {
        var userId = req.params.id;
        var user = userModel.findUserById(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            )
    }

    function logout(req,res){
     req.session.destroy();
        res.send(200);
    }

    function loggedin(req,res){
        res.json(req.session.currentUser);
    }

};