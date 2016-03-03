/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController",FormController);

    function FormController($scope)

    {
        $scope.forms = [
            {"_id":"000", "title":"Contacts", "userId":123},
            {"_id":"010", "title":"ToDo",     "userId":123},
            {"_id":"020", "title":"CDs",      "userId":234}
        ];



        // event handler declarations
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        // event handler implementation
        function updateForm(form) {
            if(selectedFormIndex >= 0) {
                $scope.form[selectedFormIndex] = {
                    id: form._id,
                    title: form.title,
                    userId: form.userId
                }
            }
        }
        var selectedFormIndex = -1;
        function selectForm(form) {
            selectedFormIndex = $scope.forms.indexOf(form);
            console.log(form);
            $scope.form = {
                id: form._id,
                title: form.title,
                userId: form.userId
            };
        }

        function addForm(form) {
            var newForm = {
                id : form._id,
                title: form.title,
                userId: form.userId
            };
            $scope.forms.push(newForm);
        }

        function deleteForm(form) {
            var index = $scope.forms.indexOf(form);
            console.log("deleteForm: " + index);
            $scope.forms.splice(index, 1);
        }

    }

})();