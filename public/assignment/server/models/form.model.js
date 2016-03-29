var forms = require("./form.mock.json");
var q = require('q');

module.exports = function (db, mongoose) {

    var FormSchema = require('./form.schema.server.js')(mongoose);

    // create user model from schema
    var FormModel = mongoose.model('Form', FormSchema);

    var api = {
        createFormForUser: createFormForUser,
        deleteFormById: deleteFormById,
        findAllForms: findAllForms,
        findFormById: findFormById,
        updateForm: updateForm,
        findFormByTitle: findFormByTitle,
        findFormsByUserId: findFormsByUserId
    };
    return api;

    function findFormByTitle(title) {
        var deferred = q.defer();
        FormModel.findOne({title:title}, function(err,doc){
            if(err)
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

    function findFormsByUserId(userId) {
        var deferred = q.defer();
        FormModel.findOne({userId:userId}, function(err,doc){
            if(err)
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

    function findFormById (id) {
        var deferred = q.defer();
        FormModel.findById(id, function(err,doc){
            if(err)
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

    function findAllForms () {
       var deferred = q.defer();
        FormModel.find(function(err,doc)
        {
            if(err)
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

    function deleteFormById (id) {
        var deferred = q.defer();
        FormModel.remove({_id:id}, function(err, doc)
        {
            if(err)
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

    function createFormForUser (userId, newForm) {

    }

    function updateForm (id, form) {
        for (var f in forms) {
            if (forms[f]._id === id) {
                forms[f] = form;
            }
        }
    }
};