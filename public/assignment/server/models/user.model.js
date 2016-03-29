var users = require("./user.mock.json");

// load q promise library
var q = require("q");

module.exports = function(db, mongoose) {

    var UserSchema = require('./user.schema.server.js')(mongoose);

    // create user model from schema
    var UserModel = mongoose.model('User', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        getUsers: getUsers,
        createUser: createUser,
        deleteUserById: deleteUserById,
        findUserById: findUserById,
        updateUser: updateUser
    };
    return api;


    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne(
            {
                username: credentials.username,
                password: credentials.password
            },
            function (err, doc) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }


    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.findOne(
            {username: username},
            function (err, doc) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(doc);
                }

            });
        return deferred.promise;
    }

    function getUsers() {
        var deferred = q.defer();
        UserModel.find(function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc)
            }
        });
        return deferred.promise;
    }


    function createUser(newUser) {
        var deferred = q.defer();
        UserModel.create(user, function (err, doc) {
            console.log(doc);
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }


    function deleteUserById(id) {
        var deferred = q.defer();
        UserModel.remove({_id: id}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }


    function findUserById(id) {
        var deferred = q.defer();
        UserModel.findById(id, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }



    function updateUser(id, user)
    {
        var deferred = q.defer();
        UserModel.update({_id: id}, {$set: user}, function (err, doc)
        {
            if (err)
            {
                deferred.reject(err);
            }
            else
            {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }
};