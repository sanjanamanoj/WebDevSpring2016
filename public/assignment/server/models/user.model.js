var users = require('./user.mock.json');
var uuid = require('node-uuid');


module.exports = function(app)
{
    var api =
    {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials,
        updateUser: updateUser,
        deleteUserById: deleteUserById
    };
    return api;

    function createUser (user)
    {
        var u = {
            "_id": uuid.v1(),
            "username":user.username,
            "firstName":user.firstName,
            "lastName":user.lastName,
            "password":user.password,
            "email" : user.email

        };

       // user._id = uuid.v1;
        users.push (u);
        //console.log(users );
        return users;
    }



    function findAllUsers ()
    {
        return users;
    }

    function findUserById (id)
    {
        for (var u in users)
        {
            if (users[u]._id === id)
            {
                return users[u];
            }
        }
        return null;
    }


    function findUserByUsername(username)
    {
        for (var u in users)
        {
            if(users[u].username===username)
            {
                return users[u];
            }
        }
        return null;
    }

    function findUserByCredentials(username, password)
    {
        for (var u in users)
        {
            if(users[u].username===username && users[u].password === password)
            {
                return users[u];
            }
        }
        return null;
    }

    function updateUser(id, user)
    {
        console.log(id);
        for (var u in users)
        {
            console.log(users[u]);
            if (users[u]._id == id)
            {
                users[u].firstName = user.firstName;
                users[u].lastName = user.lastName;
                users[u].username = user.username;
                users[u].password = user.password;
                users[u].email = user.email;
                console.log("Model");
                console.log(user);
                return users[u];
            }
        }
        return null;
    }


    function deleteUserById (id)
    {
        for (var u in users)
        {
            if (users[u]._id === id)
            {
                users.splice(u, 1);
            }
        }
        return users;
    }
};