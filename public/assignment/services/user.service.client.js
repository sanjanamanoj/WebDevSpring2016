/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService($rootScope)
    {

        var fakeData = [];
        fakeData =[
            {
                "_id":123, "firstName":"Alice", "lastName":"Wonderland", "username":"alice", "password":"alice",
                "roles":["student"]
            },

            {
                "_id":234, "firstName":"Bob", "lastName":"Hope", "username":"bob", "password":"bob",
                "roles":["admin"]
            },
            {
                "_id":345, "firstName":"Charlie", "lastName":"Brown", "username":"charlie", "password":"charlie",
                "roles":["faculty"]
            },
            {
                "_id":456, "firstName":"Dan", "lastName":"Craig", "username":"dan", "password":"dan",
                "roles":["faculty","admin"]
            },
            {
                "_id":567, "firstName":"Edward", "lastName":"Norton", "username":"ed", "password":"ed",
                "roles":["student"]
            }
        ];
        var model=
        {
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser
        };
        return model;


        function findUserByUsernameAndPassword(username, password, callback) {
            for (var u in fakeData) {
                if (fakeData[u].username === username &&
                    fakeData[u].password === password)
                {
                    callback(fakeData[u]);
                }
            }
            return null;
        }



        function findAllUsers(callback)
        {
           callback(fakeData);
        }

        function createUser (user, callback)
        {
            var newUser =
            {
                "_id" : (new Date()).getTime(),
                "username": user.username,
                "password": user.password,
                "firstName" : "",
                "lastName": "",
                "email": user.email,
                "role": ""
            };
            fakeData.push(newUser);
            callback(newUser);
        }



        function deleteUserById(userId, callback)
        {
            var index = fakeData.indexOf(userId);
            fakeData.splice(index,1);
            callback(fakeData);
        }


        function updateUser (userId, user,callback)
        {
            var u = findUserById (userId);
            if (u != null)
            {
                u.firstName = user.firstName;
                u.lastName = user.lastName;
                u.password = user.password;
                u.username = user.username;
                u.roles = user.roles;
                callback(u);
            }
            else
            {
                return null;
            }
        }

        function findUserById(userId)
        {
            for (var u in fakeData)
            {
                if (fakeData[u]._id === userId)
                {
                    return fakeData[u];
                }
            }
            return null;
        }

        function setCurrentUser (user)
        {
            $rootScope.currentUser = user;
        }

        function getCurrentUser ()
        {
            return $rootScope.currentUser;
        }

    }
})();
