(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope) {
        var api = {
            login: login,
            getCurrentUser: getCurrentUser,
            logout: logout,
            register: register,
            createUser: createUser,
            findAllUsers: findAllUsers,
            findUserById: findUserById,
            deleteUser: deleteUser,
            updateUser: updateUser,
            updateUserById: updateUserById,
            setCurrentUser: setCurrentUser,
            findUserByUsername: findUserByUsername
        };
        return api;

        function login(user) {
            return $http.post("/api/assignment/login", user);
        }

        function getCurrentUser(){
            return $http.get("/api/assignment/loggedin");
        }

        function logout() {
            return $http.post("/api/assignment/logout");
        }

        function register(user) {
            return $http.post("/api/assignment/register", user);
        }

        function updateUser(userId,user){
            return $http.put('/api/assignment/user/'+userId, user);
        }

        function findUserByUsername(username) {
            return $http.get('/api/assignment/user?username=' + username);
        }

        function createUser(user) {
            return $http.post('/api/assignment/admin/user', user);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/admin/user/");
        }

        function findUserById(userId){
            return $http.get("/api/assignment/admin/user/"+ userId)
        }

        function deleteUser(userId) {
            return $http.delete('/api/assignment/admin/user/'+userId);
        }

        function updateUserById(userId, user) {
            return $http.put('/api/assignment/admin/user/'+userId, user);
        }

        function setCurrentUser(user){
            $rootScope.currentUser = user;
        }

    }
})();