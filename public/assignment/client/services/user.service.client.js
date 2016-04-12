(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope) {
        var api = {
            login: login,
            logout: logout,
            register: register,
            findAllUsers: findAllUsers,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return api;

        function getCurrentUser(){
            return $http.get("/api/assignment/loggedin");
        }

        function setCurrentUser(user){
            $rootScope.currentUser = user;
        }
        function logout() {
            return $http.post("/api/assignment/logout");
        }

        function createUser(user) {
            return $http.post('/api/assignment/user', user);
        }

        function updateUser(userId, user) {
            return $http.put('/api/assignment/user/'+userId, user);
        }

        function deleteUser(userId) {
            console.log(userId);
            return $http.delete('/api/assignment/user/'+userId);
        }

        function findAllUsers() {
            console.log("calling find all users");
            return $http.get("/api/assignment/user");
        }

        function register(user) {
            //console.log(user);
            return $http.post("/api/assignment/register", user);
        }

        function login(user) {
            return $http.post("/api/assignment/login", user);
        }
    }
})();