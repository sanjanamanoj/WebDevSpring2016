/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService)

    function UserService($rootScope)
    {

        var model=
        {
           currentUser:
               [
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
               ],
            findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };
        return currentUser;


        function findUserByUsernameAndPassword(username, password, callback) {
            for (var u in model.currentUser) {
                if (model.currentUser[u].username === username &&
                    model.currentUser[u].password === password)
                {
                    callback(model.currentUser[u]);
                }
            }
            return null;
        }

       // function findUserByUsernameAndPassword(username, password, callback)
       // {

           // for(var i=0;i<currentUsers.length;i++)
           // {
            //    if(currentUsers[i].username == username)
            //    callback(currentUsers[i]);
           // }

            //var index = $scope.currentUsers.indexOf(username) && $scope.currentUsers.indexOf(password);
            //$scope.selectedUser=
            //{
            //    _id      : $scope.currentUsers[index]._id,
            //    firstName: $scope.currentUsers[index].firstName,
            //    lastName : $scope.currentUsers[index].lastName,
            //    username : $scope.currentUsers[index].username,
            //    password : $scope.currentUsers[index].password,
            //    roles    : $scope.currentUsers[index].roles
            //};
            // callback(selectedUser);
       // }

        function findAllUsers(callback)
        {
           callback(currentUser);
        }

        function createUser (user, callback) {
            var user = {
                username: user.username,
                password: user.password
            };
            model.currentUser.push(user);
            callback(user);
        }
       // function createUser(user, callback)
        //{
        //    $scope.currentUsers.push(user);
         //   console.log(currentUsers);
          //  callback(user);
        //}


        function deleteUserById(userId, callback)
        {
            var index = $scope.currentUsers.indexOf(userId);
            $scope.currentUsers.splice(index,1);
            callback(currentUsers);
        }


        function updateUser (userId, user,callback)
        {
            var user = model.findUserById (currentUser.username);
            if (user != null) {
                user.firstName = currentUser.firstName;
                user.lastName = currentUser.lastName;
                user.password = currentUser.password;
                user.username = currentUser.username;
                user.roles = currentUser.roles;
                callback(user);
            } else {
                return null;
            }
        }

        function findUserById(userId, callback) {
            for (var u in model.currentUser) {
                if (model.currentUser[u]._id === userId)
                {
                    callback(model.currentUser[u]);
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
        //function updateUser(userId, user, callback)
        //{
         //  var index = $scope.currentUsers.indexOf(userId);
          //  var updatedUser=
            //{
              // currentUsers:[index].firstName = user.firstName,
              // $scope: currentUsers[index].lastName = user.lastName,
               // $scope:currentUsers[index].username = user.username,
               // $scope:currentUsers[index].password = user.password,
               // $scope:currentUsers[index].roles = user.roles

//            };
  //          callback(updatedUser);

//        }
    }
})();
