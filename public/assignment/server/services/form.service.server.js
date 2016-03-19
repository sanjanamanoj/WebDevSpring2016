module.exports = function(app, formModel, userModel) {
    app.get("/api/assignment/user/:userId/form", findAllFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateFormById);

    function findAllFormsForUser(req, res) {
        var id = req.params.userId;
        console.log(id);
        var userForms = formModel.findAllFormsForUser(id);
        console.log(userForms);
        res.json(userForms);
    }

    function findFormById(req, res) {
        var id = req.params.formId;
        var forms = formModel.findFormById(id);
        res.json(forms);
    }

    function deleteFormById(req, res) {
        var id = req.params.formId;
        formModel.deleteFormById(id);
        res.send(200);
    }

    function createFormForUser(req, res) {
        console.log("recieved request and building user");
        var userId = req.params.userId;
        var form = req.body;
        res.json(formModel.createFormForUser(userId, form));
    }

    function updateFormById(req, res) {
        var id = req.params._id;
        var form = req.body;
        formModel.updateFormById(id, form);
        res.send(200);
    }
};