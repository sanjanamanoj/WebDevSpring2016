/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService);

    function FormService()
    {
        var forms=
            [
                {"_id":"000", "title":"Contacts", "userId":123},
                {"_id":"010", "title":"ToDo",     "userId":123},
                {"_id":"020", "title":"CDs",      "userId":234}
            ];

        var serv={
            createFormForUser : createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
    };
        return serv;

        function createFormForUser(userId, form, callback)
        {
            var newForm=
            {
                _id: (newDate).getTime(),
                title: form.title,
                userId: form.userId
            };
            $scope.forms.push(newForm);
            callback(newForm)
        }

        function findAllFormsForUser(userId, callback)
        {

        }

        function deleteFormById(formId, callback)
        {
            var index = $scope.currentUsers.indexOf(formId);
            $scope.forms.splice(index,1);
            callback(forms);
        }

        function updateFormById(formId, newForm, callback)
        {
            var index = $scope.forms.indexOf(formId);
            var updatedForm=
            {
                $scope:forms[index].title = newForm.title,
                $scope:forms[index].userId = newForm.userId

            };
            callback(updatedForm);
        }





    }
})();