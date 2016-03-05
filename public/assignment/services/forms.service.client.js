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
        var forms=[];
        forms=
            [
                {"_id":"000", "title":"Contacts", "userId":123},
                {"_id":"010", "title":"ToDo",     "userId":123},
                {"_id":"020", "title":"CDs",      "userId":234}
            ];

        var op= {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return op;

        function createFormForUser(userId, form, callback)
        {
            var newForm=
            {
                "_id": (new Date()).getTime(),
                "title": form.title,
                "userId": userId
            };
            forms.push(newForm);
            callback(newForm)
        }


        function findAllFormsForUser(userId, callback){
            var userForms=[];
            for(var form in forms){
                if(forms[form].userId==userId){
                    userForms.push(forms[form]);
                }
            }
            callback(userForms);
        }



        function deleteFormById(formId, callback)
        {
            var index = forms.indexOf(formId);
            forms.splice(index, 1);
            callback(forms);
        }

        function updateFormById(formId, newForm, callback)
        {
            var f = findFormById(formId)
            if(f!=null)
            {
                f.title = newForm.title;
                callback(f);

            }
            else
            {
                return null;
            }
        }



        function findFormById(formId)
        {
            for (var f in forms)
            {
                if (forms[f]._id === formId)
                {
                    return forms[f];
                }
            }
            return null;
        }



    }
})();