/**
 * Created by Sanjanamanoj on 3/15/2016.
 */
module.exports = function (app, model, db) {
    app.get("/api/assignment/user/:userId/form", findAllFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateFormById);

    function findAllFormsForUser(req, res)
    {
        var id = req.params.userId;
        var forms = model.findAllFormsForUser(id);
        if(forms)
        {
            res.json(forms);
        }
        res.json({message:"No forms found"})
    }

    function findFormById(req, res)
    {
        var id = req.params.id;
        var form = model.findFormById(id);
        res.json(form);
    }

    function deleteFormById(req, res) {
        var id = req.params.id;
        var forms = model.deleteFormById(formId);
        res.json(forms);
    }

    function createFormForUser(req, res)
    {
        var userId = req.params.userId;
        var newForm = req.body;
        var forms = model.createFormForUser(userId, newForm);
        res.json(forms);
    }

    function updateFormById(req, res)
    {
        var userId = req.params.userId;
        var form = req.body;
        var forms = model.updateFormById(userId, form);
        res.json(forms);
    }
}