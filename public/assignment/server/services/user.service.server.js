/**
 * Created by Sanjanamanoj on 3/15/2016.
 */
module.exports = function (app, formModel, userModel)
{

    app.get("/api/assignment/user", findUserByCredentials);
    app.post("/api/assignment/user", createUser);
    app.put("/api/assignment/user/:id", updateUser);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/", findUserById);
    app.get("/api/assignment/user",findUserByUsername);

    app.delete("/api/assignment/user/:id", deleteUserById);
    //app.get("/api/assignment/loggedin",loggedin);
    app.post("/api/project/logout", logout);



    function createUser (req, res)
    {
        var user = req.body;

        res.send (userModel.createUser(user));
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
        var user = userModel.findUserByCredentials(req.query.username, req.query.password);
        console.log(user);
       // req.session.currentUser = user;
        res.json(user);
    }

    function updateUser(req, res)
    {
        var id = req.params.id;
        var user = req.body;
        console.log("Server user service");
        console.log(id);
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
        var id = req.params._id;
        var response = userModel.deleteUserById(id);
        if (response)
        {
            res.send(response);
            return;
        }
        res.json ({message: "User not found"});
    }



    function logout(req, res)
    {
        req.session.destroy();
        res.send(200);
    }
};