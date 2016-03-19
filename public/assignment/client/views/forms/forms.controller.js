"use strict";
(function () {
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, FormService, $rootScope, UserService)
    {
        var vm = this;
        vm.addForm = addForm;
        vm.updateForm = updateForm;
        vm.deleteForm = deleteForm;
        vm.selectForm = selectForm;


       // vm.userId= $rootScope.currentUser._id;
        vm.forms = [];
        vm.form=null;

        function renderForms (response) {

            vm.forms = response.data;
        }

        function renderError (response) {
            return console.log("could not render");
        }

        function init () {
            FormService
                .findAllFormsForUser($rootScope.currentUser._id)
                .then(renderForms, renderError);
            vm.form = null;
        }

        init();


        function addForm (form) {
            FormService
                .createFormForUser($rootScope.currentUser._id, form)
                .then(init, renderError);
        }

        function updateForm (form) {
            FormService
                .updateFormById(form._id, form)
                .then(init, renderError);
        }

        function selectForm (fIndex) {
            vm.form = vm.forms[fIndex];
        }




        function deleteForm (form) {
           // console.log(form);
            FormService
                .deleteFormById(form._id)
                .then(init, renderError);
        }


    }
})();