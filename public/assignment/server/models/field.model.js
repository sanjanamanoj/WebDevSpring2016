var forms = require("./form.mock.json");
var q = require('q');

module.exports = function (formModel, db, mongoose)
{
    var FieldSchema = require('./field.schema.server.js')(mongoose);

    // create user model from schema
    var FieldModel = mongoose.model('Field', FieldSchema);

    var api = {
        createField: createField,
        deleteField: deleteField,
        findField: findField,
        updateField: updateField,
        findFieldsByFormId: findFieldsByFormId
    };
    return api;


    function createField(formId, field) {
        var deferred = q.defer();
        FieldModel.create({_id:id},field,function(err,doc){
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



    function deleteField(formId, fieldId) {
       var deferred = q.defer();
        FieldModel.remove({formId: formId, _id:fieldId}, function(err,doc){
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


    function findField(formId, fieldId) {
       var deferred = q.defer();
        FieldModel.findOne({formId:formId, _id:fieldId},function(err,doc){
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


    function findFieldsByFormId(formId) {
        var deferred = q.defer();
        FieldModel.find({formId:formId}, function(err,doc){
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

    function updateField(formId, fieldId, field) {
       var deferred = q.defer();
        FieldModel.update({formId:formId,_id:fieldId},{$set:field},function(err,doc){
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

};