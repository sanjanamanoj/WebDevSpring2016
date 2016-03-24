/**
 * Created by Sanjanamanoj on 3/24/2016.
 */
var events = require("./event.mock.json");

module.exports = function (uuid) {
    var api = {
        createEventForUser: createEventForUser,
        deleteEventById: deleteEventById,
        findAllEvents: findAllEvents,
        findEventById: findEventById,
        updateEvent: updateEvent,
        findEventByTitle: findEventByTitle,
        findEventsByUserId: findEventsByUserId,
        findDetailsForEvent : findDetailsForEvent

    };
    return api;

    function findEventByTitle(title) {
        for (var e in events) {
            if (events[e].title === title) {
                return events[e];
            }
        }
        return null;
    }

    function findEventsByUserId(userId) {
        var userEvents = [];
        for (e in events) {
            if (events[e].userId == userId) {
                userEvents.push(events[e]);
            }
        }
        return userEvents;
    }

    function findEventById (id) {
        for (var e in events) {
            if (events[e]._id === id) {
                return events[e];
            }
        }
        return null;
    }

    function findAllEvents () {
        return events;
    }

    function deleteEventById (id) {
        for (var e in events) {
            if (events[e]._id == id) {
                events.splice(e, 1);
            }
        }
    }

    function createEventForUser (userId, newEvent) {
        var nEvent = {
            _id: uuid.v1(),
            title: newEvent.title,
            userId: userId
            //fields: []
        };
        events.push(nEvent);
        return events;
    }

    function updateEvent (id, event) {
        for (var e in events) {
            if (events[e]._id === id) {
                events[e] = event;
            }
        }
    }

    function findDetailsForEvent(eventId) {
        var event;
        event = findEventById(eventId);
        return event.details;
    }



};