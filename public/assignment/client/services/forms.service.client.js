
"use strict";
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http)
    {

        var service =
        {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return service;

        function createFormForUser(userId, form)
        {
            return $http.post("/api/assignment/user/:userId/form" + userId, form);
        }

        function findAllFormsForUser(userId)
        {
            return $http.get("/api/assignment/user/:userId/form", + userId);
        }

        function deleteFormById(formId)
        {
            return $http.delete("/api/assignment/form/:formId", + formId );
        }

        function updateFormById(formId, newForm)
        {
          return $http.put("/api/assignment/form/:formId" + formId, newForm);
        }
    }
})();