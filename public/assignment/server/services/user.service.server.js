/**
 * Created by Sanjanamanoj on 3/15/2016.
 */
module.exports = function (app, formModel, userModel)
{

    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.get("/api/assignment/user?username=username",findUserByUsername);
    app.get("/api/assignment/user?username=alice&password=wonderland", findUserByCredentials);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUserById);
    app.get("/api/assignment/loggedin",loggedin);
    app.post("/api/project/logout", logout);



    function createUser (req, res)
    {
        var user = req.body;
        userModel.createUser(user);
        res.send (200);
    }


    function findAllUsers (req, res)
    {
        var users = userModel.findAllUsers();
        res.json(users);
    }


    function findUserById (req, res)
    {
        var id = req.params.id;
        var user = userModel.findUserById(id);
        if(user)
        {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }


    function findUserByUsername(req, res)
    {
        var username = req.params.username;
        var user = userModel.findUserByUsername(username);
        if(user)
        {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }


    function findUserByCredentials(req, res)
    {
        var credentials = req.body;
        var user = userModel.findUserByCredentials(credentials);
       // req.session.currentUser = user;
        res.json(user);
    }

    function updateUser(req, res)
    {
        var id = req.params.id;
        var user = req.body;
        var userResponse = userModel.updateUser(id, user);
        if(userResponse)
        {
            res.json(userResponse);
            return;
        }
        res.json({message: "User not found"});
    }



    function deleteUserById (req, res)
    {
        var id = req.params.id;
        var response = userModel.deleteUserById(id);
        if (response)
        {
            res.send(response);
            return;
        }
        res.json ({message: "User not found"});
    }


    function loggedin(req, res)
    {
        res.json(req.session.currentUser);
    }

    function logout(req, res)
    {
        req.session.destroy();
        res.send(200);
    }
};