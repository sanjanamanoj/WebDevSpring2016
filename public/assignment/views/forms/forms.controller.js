/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController",FormController);

    function FormController($scope, FormService) {

        // event handler declarations
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        // event handler implementation

        function addForm(form) {
            FormService.createFormForUser(userId, form, function (response) {
                console.log(response)
            })
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