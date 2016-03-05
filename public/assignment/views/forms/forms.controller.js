/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController",FormController);

    function FormController($scope,$rootScope, FormService, $location) {

        // event handler declarations
        $scope.message="hello";
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        // event handler implementation
        $scope.user=$rootScope.currentUser._id;


        console.log("hellellooo")
        $scope.userForms = FormService.forms ;
       console.log(FormService.forms);
        function addForm(form) {
            var newForm= FormService.createFormForUser($scope.user, form, function (response) {
                console.log(response)
            });
            $scope.userForms.push(newForm);
        }


        function updateForm(form) {
            FormService.updateFormById(form._id, form, function (response) {
            })
        }


        var selectedFormIndex = -1;

        function selectForm(form) {
            selectedFormIndex = $scope.forms.indexOf(form);
            console.log(form);

        }


        function deleteForm(form) {
            FormService.deleteFormById(form._id, function () {
            })

        }
    }
})();