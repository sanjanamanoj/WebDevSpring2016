/**
 * Created by Sanjanamanoj on 3/24/2016.
 */
module.exports = function(app, eventModel) {
    app.get("/api/project/user/:userId/event", getEventsForUser);
    app.get("/api/project/event/:eventId/details", findDetailsForEvent);
    app.delete("/api/project/event/:eventId", deleteEventById);
    app.post("/api/project/user/:userId/event", createEventForUser);
    app.put("/api/project/event/:eventId", updateEventById);

    function getEventsForUser(req, res) {
        var id = req.params.userId;
        console.log(id);
        var userEvents = eventModel.findEventsByUserId(id);
        console.log(userEvents);
        res.json(userEvents);
    }

    function findDetailsForEvent(req,res){
        var id = req.params.eventId;
        console.log(id);
        var eventDetails = eventModel.findDetailsForEvent(id);
        console.log(eventDetails);
        res.json(eventDetails);
    }

    function deleteEventById(req, res) {
        var id = req.params.eventId;
        console.log(id);
        eventModel.deleteEventById(id);
        res.send(200);
    }

    function createEventForUser(req, res) {
        var userId = req.params.userId;
        var event = req.body;
        res.json(eventModel.createEventForUser(userId, event));
    }

    function updateEventById(req, res) {
        var id = req.params.eventId;
        var event = req.body;
        eventModel.updateEvent(id, event);
        res.send(200);
    }
};