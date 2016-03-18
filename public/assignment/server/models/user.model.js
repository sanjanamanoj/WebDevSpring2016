var users = [
    {
        "_id": "123",
        "firstName": "Alice",
        "lastName": "Wonderland",
        "username": "alice",
        "password": "alice"

    },

    {
        "_id": "234",
        "firstName": "Bob",
        "lastName": "Hope",
        "username": "bob",
        "password": "bob"

    },

    {
        "_id": "345",
        "firstName": "Charlie",
        "lastName": "Brown",
        "username": "charlie",
        "password": "charlie"

    },

    {
        "_id": "456",
        "firstName": "Dan",
        "lastName": "Craig",
        "username": "dan",
        "password": "dan"

    },

    {
        "_id": "567",
        "firstName": "Edward",
        "lastName": "Norton",
        "username": "ed",
        "password": "ed"
    }
];


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
        user._id = new Date().getTime();
        users.push (user);
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

    function findUserByCredentials(credentials)
    {
        for (var u in users)
        {
            if(users[u].username===credentials.username && users[u].password === credentials.password)
            {
                return users[u];
            }
        }
        return null;
    }

    function updateUser(id, user)
    {
        for (var u in users)
        {
            if (users[u]._id === id)
            {
                users[u].firstName = user.firstName;
                users[u].lastName = user.lastName;
                users[u].username = user.username;
                users[u].password = user.password;
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