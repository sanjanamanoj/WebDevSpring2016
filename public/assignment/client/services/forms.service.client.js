"use strict";
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService ($http) {

        var api = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            findFormById: findFormById
        };

        return api;

        function createFormForUser (userId, form) {
            console.log("creating form.... form.service.client.js");
            return $http.post("/api/assignment/user/" + userId + "/form", form);
        }

        function findAllFormsForUser (userId) {
            return $http.get("/api/assignment/user/" + userId + "/form");
        }

        function deleteFormById (formId) {
            return $http.delete("/api/assignment/form/" + formId);
        }

        function updateFormById (formId, newForm) {
            return $http.put("/api/assignment/form/" + formId, newForm);
        }

        function findFormById (formId) {
            return $http.get("/api/assignment/form/" + formId);
        }
    }
})();