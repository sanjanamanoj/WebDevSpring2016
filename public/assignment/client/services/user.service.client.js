/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService($rootScope,$http) {

        var model =
        {
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser : setCurrentUser,
            getCurrentUser: getCurrentUser,
            logout : logout
        };
        return model;


        function findUserByUsername(username) {
            return $http.get("/api/assignment/user?username=username" + username);
        }

        function findUserByCredentials(credentials) {
            return $http.get("/api/assignment/user?username=alice&password=wonderland" + credentials);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function createUser(user) {
            return $http.post("/api/assignment/user", user);
        }

        function deleteUserById(id)
        {
            return $http.delete("/api/assignment/user/:id" + id);
        }

        function updateUser(id, user)
        {
            return $http.put("/api/assignment/user/:id" + id, user);
        }


        function setCurrentUser(user)
        {
                       $rootScope.currentUser = user;
                        console.log($rootScope.currentUser);
                    }

        function getCurrentUser()
        {
            return $http.get("/api/project/loggedin");
        }


        function logout()
        {
            return $http.post("/api/project/logout");
        }
    }
})();
