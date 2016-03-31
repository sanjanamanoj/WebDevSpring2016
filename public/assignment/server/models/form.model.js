
var q = require('q');

module.exports = function (db, mongoose) {

    var FormSchema = require('./form.schema.server.js')(mongoose);

    // create user model from schema
    var FormModel = mongoose.model('form', FormSchema);

    var api = {
        createFormForUser: createFormForUser,
        deleteFormById: deleteFormById,
        findAllForms: findAllForms,
        findFormById: findFormById,
        updateForm: updateForm,
        findFormByTitle: findFormByTitle,
        findFormsByUserId: findFormsByUserId,
        getMongooseModel: getMongooseModel
    };
    return api;

    function findFormByTitle(title) {
        var deferred = q.defer();
        FormModel.find({title:title}, function(err,doc){
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
        FormModel.find({userId:userId}, function(err,doc){
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
        var deferred = q.defer();
        var userForm = {
            userId : userId,
            title : newForm.title,
            fields : [],
            created: new Date(),
            updated: new Date()
    };
        FormModel.create(userForm, function(err,doc){
            console.log(doc);
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        } );
        return deferred.promise;
    }

    function updateForm (id, form) {
        var deferred = q.defer();
        FormModel.update({_id:id}, {$set: form}, function(err,doc){
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function getMongooseModel()
    {
        return FormModel;
    }
};