"use strict";
(function () {
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, FormService, $rootScope, $location) {

        $scope.currentUserId = $rootScope.currentUser._id;
        $scope.forms = FormService.findAllFormsForUser($scope.currentUserId, id);


        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.selectForm = selectForm;
        $scope.deleteForm = deleteForm;


        function addForm(form) {
            FormService.createFormForUser($scope.currentUserId,{title : form.title}, function(response){});
            FormService.findAllFormsForUser($scope.currentUserId, function(response){
                $scope.forms=response;
            });

            $scope.forms.push(form);

        }

        function updateForm(form) {
            FormService.updateFormById(form._id, form, function(response){});

        }

        function selectForm(index) {
            $scope.form = {
                _id: $scope.forms[index]._id,
                title: $scope.forms[index].title,
                userId: $scope.forms[index].userId
            }
        }

        function deleteForm(index) {
            FormService.deleteFormById($scope.forms[index]._id, function(response){});
            $scope.forms.splice(index, 1);
        }

        function id(param) {
            return param;
        }
    }
})();