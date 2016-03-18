/**
 * Created by Sanjanamanoj on 3/15/2016.
 */

var forms = require("./form.mock.json");
module.exports = function(app)
{

    app.post("/api/assignment/server/form", createForm);

    function createForm (req, res) {
        var form = req.body;
        var now = new Date().getTime();
        var id = "id-"+now;
        form._id = id;
        forms.push (movie);
        res.send (200);
    }
};