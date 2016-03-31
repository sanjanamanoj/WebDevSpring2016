
var q = require('q');

module.exports = function (formModel)
{
    //var FieldSchema = require('./field.schema.server.js')(mongoose);
    var Form = formModel.getMongooseModel();


    var api = {
        createField: createField,
        deleteField: deleteField,
        findField: findField,
        updateField: updateField,
        findFieldsByFormId: findFieldsByFormId
    };
    return api;


    function createField(formId, field) {
        return Form.findById(formId)
            .then(
                function(form) {
                    form.fields.push(field);
                    console.log(form.fields);
                    return form.save();
                }
            );
    }



    function deleteField(formId, fieldId) {
        return Form
            .findById(formId)
            .then(
                function(form){
                    form.fields.id(fieldId).remove();
                    return form.save();
                }
            );
    }


    function findField (formId, fieldId) {
        return Form
            .findById(formId)
            .then(
                function(form){
                    return form.fields.id(fieldId);
                }
            );
    }

    function updateField(formId,fieldId, fieldObj) {
        return Form
            .findById(formId)
            .then(
                function(form){
                    var field   = form.fields.id(fieldId);
                    field.label  = fieldObj.label;
                    field.placeholder = fieldObj.placeholder;
                    field.options = fieldObj.options;
                    return form.save();
                }
            );
    }

    function findFieldsByFormId(formId) {
        // use select() to retrieve a particular field
        return Form.findById(formId).select("fields");
    }




};