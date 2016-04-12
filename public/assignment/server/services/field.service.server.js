module.exports = function(app, fieldModel) {
    app.get("/api/assignment/form/:formId/field", fieldsForFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldById);
    app.post("/api/assignment/form/:formId/field", addFieldToForm);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldById);
    app.put("/api/assignment/:formId/form", updateFields);

    function fieldsForFormId(req, res) {
        var formId;
        formId = req.params.formId;
         fieldModel.findFieldsByFormId(formId)
            .then(
                function(form){
                    console.log(form.fields);
                    res.json(form.fields);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function getFieldById(req, res) {
        var formId;
        var fieldId;
        var field;
        formId = req.params.formId;
        fieldId = req.params.fieldId;
        field = fieldModel.findField(formId, fieldId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function deleteFieldById(req, res) {
        var formId;
        var fieldId;
        formId = req.params.formId;
        fieldId = req.params.fieldId;
        fieldModel.deleteField(formId, fieldId)
            .then(
                function(stat){
                    res.json(200);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function addFieldToForm(req, res) {
        var field;
        var formId;
        field = req.body;
        formId = req.params.formId;
        fieldModel.createField(formId, field)
            .then(
                function(form){
                    res.json(form);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function updateFieldById(req, res) {
        var fieldId;
        var formId;
        var field;
        var r;
        field = req.body;
        fieldId = req.params.fieldId;
        formId = req.params.formId;
        r = fieldModel.updateField(formId, fieldId, field)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function updateFields (req, res) {
        var formId = req.params.formId;
        var startIndex = req.query.startIndex;
        var endIndex = req.query.endIndex;

        if(startIndex && endIndex) {
            fieldModel
                .sortField(formId, startIndex, endIndex)
                .then(

                        function(stat) {
                            return res.json(200);
                        },
                        function(err) {
                            res.status(400).send(err);
                        }
                        );
        }
    }




};