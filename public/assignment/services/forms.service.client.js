/**
 * Created by Sanjanamanoj on 2/19/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService)

    function FormService()
    {
        var forms=
            [
                {"_id":"000", "title":"Contacts", "userId":123},
                {"_id":"010", "title":"ToDo",     "userId":123},
                {"_id":"020", "title":"CDs",      "userId":234},
            ]


    }
})();